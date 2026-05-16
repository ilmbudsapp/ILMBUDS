import { seedCategories, seedQuestions, seedQuizzes } from "@/data/ilmbudsSeed";
import {
  findUserById,
  findUserByUsername,
  getUserProgress,
  loginUser,
  publicUser,
  registerUser,
  saveUserProgress,
} from "./localUserStore";

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function match(path: string, pattern: string): Record<string, string> | null {
  const pParts = pattern.split("/").filter(Boolean);
  const uParts = path.split("/").filter(Boolean);
  if (pParts.length !== uParts.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < pParts.length; i++) {
    if (pParts[i].startsWith(":")) params[pParts[i].slice(1)] = uParts[i];
    else if (pParts[i] !== uParts[i]) return null;
  }
  return params;
}

export async function handleWebApiRequest(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response | null> {
  const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
  const parsed = new URL(url, window.location.origin);
  if (!parsed.pathname.startsWith("/api/")) return null;

  const path = parsed.pathname;
  const method = (init?.method ?? "GET").toUpperCase();
  let body: unknown = undefined;
  if (init?.body && typeof init.body === "string") {
    try {
      body = JSON.parse(init.body);
    } catch {
      body = undefined;
    }
  }

  try {
    if (method === "GET" && path === "/api/categories") {
      return json([...seedCategories]);
    }

    const cat = match(path, "/api/categories/:id");
    if (method === "GET" && cat) {
      const category = seedCategories.find((c) => c.id === Number(cat.id));
      if (!category) return json({ message: "Not found" }, 404);
      return json(category);
    }

    const catQuiz = match(path, "/api/categories/:id/quizzes");
    if (method === "GET" && catQuiz) {
      return json(seedQuizzes.filter((q) => q.categoryId === Number(catQuiz.id)));
    }

    const quiz = match(path, "/api/quizzes/:id");
    if (method === "GET" && quiz && !path.endsWith("/questions")) {
      const q = seedQuizzes.find((x) => x.id === Number(quiz.id));
      if (!q) return json({ message: "Not found" }, 404);
      return json(q);
    }

    const questions = match(path, "/api/quizzes/:id/questions");
    if (method === "GET" && questions) {
      return json(seedQuestions.filter((q) => q.quizId === Number(questions.id)));
    }

    if (method === "POST" && path === "/api/users/login") {
      const { username, password } = body as { username: string; password: string };
      const user = loginUser(username, password);
      return json(publicUser(user));
    }

    if (method === "POST" && path === "/api/users/register") {
      const user = registerUser(body as Parameters<typeof registerUser>[0]);
      return json(publicUser(user));
    }

    const userGet = match(path, "/api/users/:id");
    if (method === "GET" && userGet && !path.includes("/progress") && !path.includes("/quran")) {
      const user = findUserById(Number(userGet.id));
      if (!user) return json({ message: "Not found" }, 404);
      return json(publicUser(user));
    }

    const userProgressRoute = match(path, "/api/users/:id/progress");
    if (method === "GET" && userProgressRoute) {
      return json(getUserProgress(Number(userProgressRoute.id)));
    }

    if (method === "POST" && userProgressRoute) {
      const userId = Number(userProgressRoute.id);
      const data = body as {
        quizId: number;
        score: number;
        completed: boolean;
        correctAnswers: number;
        incorrectAnswers: number;
      };
      const saved = saveUserProgress(userId, {
        ...data,
        lastCompleted: new Date().toISOString(),
      });
      const user = findUserById(userId);
      return json({ progress: saved, user: user ? publicUser(user) : null });
    }

    const parentChildren = match(path, "/api/parents/:id/children");
    if (method === "GET" && parentChildren && path.endsWith("/progress")) {
      return json([]);
    }
    if (method === "GET" && parentChildren) {
      return json([]);
    }

    if (method === "POST" && path === "/api/contact") {
      console.info("[ILMBUDS web] contact form", body);
      return json({ success: true, message: "Message received (web demo mode)" });
    }

    const quranMem = match(path, "/api/users/:userId/quran/verses/:verseId/memorization");
    if (method === "POST" && quranMem) {
      return json({ success: true });
    }

    return json({ message: "Not found" }, 404);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Request failed";
    return json({ message }, 400);
  }
}
