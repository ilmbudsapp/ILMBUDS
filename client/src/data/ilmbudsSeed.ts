/** Static content for web deployment (no Express server). */
export const seedCategories = [
  {
    id: 1,
    name: "History of Islam",
    icon: "menu_book",
    iconColor: "hsl(240 85% 59%)",
    backgroundColor: "hsl(240 85% 97%)",
    difficulty: 1,
    totalQuizzes: 1,
    folder: "QUIZ",
  },
] as const;

export const seedQuizzes = [
  { id: 1, title: "History of Islam", categoryId: 1, difficulty: 1, totalQuestions: 7 },
] as const;

export const seedQuestions = [
  {
    id: 1,
    quizId: 1,
    text: "What special journey did Prophet Muhammad (PBUH) make from Makkah to Madinah?",
    imageUrl: "/images/quiz/HIJRA.jpg",
    audioUrl: null,
    options: ["The Hajj", "The Hijra", "The Umrah", "The Isra"],
    correctOption: 1,
    explanation:
      "The Hijra was when Prophet Muhammad (PBUH) and his friends moved from Makkah to Madinah. This special journey marked the beginning of the Islamic calendar!",
  },
  {
    id: 2,
    quizId: 1,
    text: "Who was Prophet Muhammad's (PBUH) closest friend who became the first leader after him?",
    imageUrl: "/images/quiz/ABU BAKR.jpg",
    audioUrl: null,
    options: ["Abu Bakr (RA)", "Umar (RA)", "Uthman (RA)", "Ali (RA)"],
    correctOption: 0,
    explanation:
      "Abu Bakr (RA) was Prophet Muhammad's (PBUH) closest friend and became the first caliph (leader) after him. He was known for being very kind and truthful.",
  },
  {
    id: 3,
    quizId: 1,
    text: "What is the name of the special book Muslims read?",
    imageUrl: "/images/quiz/QURAN.jpg",
    audioUrl: null,
    options: ["Hadith", "Quran", "Sunnah", "Fiqh"],
    correctOption: 1,
    explanation:
      "The Quran is the special book that Muslims read. It contains Allah's words and was revealed to Prophet Muhammad (PBUH) by Angel Jibreel (Gabriel).",
  },
  {
    id: 4,
    quizId: 1,
    text: "Which building in Makkah do Muslims pray towards?",
    imageUrl: "/images/quiz/THE KABBA.jpg",
    audioUrl: null,
    options: ["The Kaaba", "Masjid Al-Nabawi", "Dome of the Rock", "Masjid Al-Aqsa"],
    correctOption: 0,
    explanation:
      "The Kaaba is the special cube-shaped building in Makkah that Muslims around the world face when they pray.",
  },
  {
    id: 5,
    quizId: 1,
    text: "What do Muslims say before they start to pray?",
    imageUrl: "/images/quiz/ALLAHU EKBER.png",
    audioUrl: null,
    options: ["SubhanAllah", "Alhamdulillah", "Allahu Akbar", "Astaghfirullah"],
    correctOption: 2,
    explanation:
      "Muslims say 'Allahu Akbar' (Allah is the Greatest) when they start to pray.",
  },
  {
    id: 6,
    quizId: 1,
    text: "What do we call the month when Muslims fast during daylight hours?",
    imageUrl: "/images/quiz/RAMADAN.jpg",
    audioUrl: null,
    options: ["Muharram", "Rajab", "Shaban", "Ramadan"],
    correctOption: 3,
    explanation:
      "Ramadan is the blessed month when Muslims fast from dawn until sunset.",
  },
  {
    id: 7,
    quizId: 1,
    text: "What special celebration comes after Ramadan?",
    imageUrl: "/images/quiz/EID-AL FITR.jpg",
    audioUrl: null,
    options: ["Eid al-Fitr", "Eid al-Adha", "Mawlid", "Laylat al-Qadr"],
    correctOption: 0,
    explanation:
      "Eid al-Fitr is the happy celebration that comes after Ramadan.",
  },
] as const;
