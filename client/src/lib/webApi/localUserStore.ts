const USERS_KEY = "ilmbuds.web.users";
const SESSION_KEY = "ilmbuds.web.session";

export type WebUser = {
  id: number;
  username: string;
  password: string;
  role: string;
  points: number;
  badgesEarned: string[];
  quizzesCompleted: number;
  displayName: string | null;
  email: string | null;
  profileImageUrl: string | null;
};

export type WebProgress = {
  id: number;
  userId: number;
  quizId: number;
  score: number;
  completed: boolean;
  correctAnswers: number;
  incorrectAnswers: number;
  lastCompleted: string | null;
};

type Store = {
  nextUserId: number;
  nextProgressId: number;
  users: WebUser[];
  progress: WebProgress[];
};

function load(): Store {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return { nextUserId: 1, nextProgressId: 1, users: [], progress: [] };
    return JSON.parse(raw) as Store;
  } catch {
    return { nextUserId: 1, nextProgressId: 1, users: [], progress: [] };
  }
}

function save(store: Store) {
  localStorage.setItem(USERS_KEY, JSON.stringify(store));
}

export function getSessionUserId(): number | null {
  const id = localStorage.getItem(SESSION_KEY);
  return id ? Number(id) : null;
}

export function setSessionUserId(id: number | null) {
  if (id == null) localStorage.removeItem(SESSION_KEY);
  else localStorage.setItem(SESSION_KEY, String(id));
}

export function findUserByUsername(username: string): WebUser | undefined {
  return load().users.find((u) => u.username === username);
}

export function findUserById(id: number): WebUser | undefined {
  return load().users.find((u) => u.id === id);
}

export function registerUser(input: {
  username: string;
  password: string;
  role?: string;
  displayName?: string;
  email?: string;
}): WebUser {
  const store = load();
  if (store.users.some((u) => u.username === input.username)) {
    throw new Error("Username already exists");
  }
  const user: WebUser = {
    id: store.nextUserId++,
    username: input.username,
    password: input.password,
    role: input.role ?? "child",
    points: 0,
    badgesEarned: [],
    quizzesCompleted: 0,
    displayName: input.displayName ?? input.username,
    email: input.email ?? null,
    profileImageUrl: null,
  };
  store.users.push(user);
  save(store);
  return user;
}

export function loginUser(username: string, password: string): WebUser {
  const user = findUserByUsername(username);
  if (!user || user.password !== password) {
    throw new Error("Invalid username or password");
  }
  setSessionUserId(user.id);
  return user;
}

export function getUserProgress(userId: number): WebProgress[] {
  return load().progress.filter((p) => p.userId === userId);
}

export function saveUserProgress(
  userId: number,
  data: Omit<WebProgress, "id" | "userId"> & { quizId: number },
): WebProgress {
  const store = load();
  const existing = store.progress.find((p) => p.userId === userId && p.quizId === data.quizId);
  if (existing) {
    Object.assign(existing, data);
    save(store);
    return existing;
  }
  const row: WebProgress = {
    id: store.nextProgressId++,
    userId,
    quizId: data.quizId,
    score: data.score,
    completed: data.completed,
    correctAnswers: data.correctAnswers,
    incorrectAnswers: data.incorrectAnswers,
    lastCompleted: data.lastCompleted,
  };
  store.progress.push(row);
  const user = store.users.find((u) => u.id === userId);
  if (user && data.completed) {
    user.quizzesCompleted += 1;
    user.points += data.score;
  }
  save(store);
  return row;
}

export function publicUser(user: WebUser) {
  const { password: _p, ...rest } = user;
  return rest;
}
