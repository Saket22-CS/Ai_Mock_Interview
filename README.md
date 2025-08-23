# 🧑‍💼 PrepWise – AI Mock Interview System

🚀 **PrepWise** is an **AI-powered mock interview platform** designed to help job seekers practice and improve their interview skills.
With **real-time voice interaction**, **personalized AI-generated questions**, and **detailed feedback**, PrepWise is your ultimate **interview preparation companion**.

🌐 **Live Demo:** [PrepWise](https://ai-mock-interview-puce-tau.vercel.app/)

---

## ✨ Features

✅ **Secure Authentication** – User accounts with Firebase (hacker-proof).
✅ **AI-Powered Interview Creation** – Customize interviews (role, type, stack, difficulty).
✅ **Real-Time Mock Interviews** – Conduct lifelike interviews via voice (powered by Vapi).
✅ **AI-Generated Questions** – Dynamic, role-specific, and tailored with Gemini AI.
✅ **Detailed Feedback Report** – Score breakdown, strengths, weaknesses, and improvement tips.
✅ **Responsive UI** – Beautiful design with TailwindCSS & Shadcn UI.
✅ **Technology Icons** – Automatic mapping of tech stacks to Devicons.
✅ **Seamless Deployment** – Hosted on Vercel with environment-secure configs.

---

## 🖼️ Visuals

| Homepage                                                               | Login Page                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Homepage](Images\HomePage.png) | ![Login](Images\Loginpage.png)        |

| Interview Page                                                         | Feedback Page                                                        |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Interview](Images\Interviewpage.png)    | ![Feedback](Images\Feedbackpage.png) |

---

## 🛠️ Tech Stack

**Frontend & Core**

* ⚛️ Next.js 14 (App Router, Server Components)
* 🎨 Tailwind CSS + Shadcn UI
* 🗂 Zod (validation)
* 📋 React Hook Form

**AI & Voice**

* 🗣️ Vapi (Voice API) – AI voice interview agent
* 🤖 Gemini AI – Question & feedback generation

**Backend & Auth**

* 🔑 Firebase (authentication, Firestore DB)

**Other Tools**

* 📦 Devicon (technology icons)
* 🛠 Vercel (deployment)

---

## 🗂️ Project Structure

```
prepwise/
├── app/                # Next.js App Router
│   ├── (auth)/         # Authentication routes (sign-in, sign-up)
│   ├── (root)/         # Main app layout
│   ├── interview/      # Interview generation & sessions
│   ├── feedback/       # AI-generated feedback display
│   └── api/            # API routes (Vapi & Gemini integrations)
│
├── components/         # Reusable UI components
├── lib/                # Utility functions (icons, helpers)
├── styles/             # Global styles
├── public/             # Static assets
├── .env.local          # Environment variables
└── README.md           # Documentation
```

---

## ⚡ Getting Started

Follow these steps to run **PrepWise** locally:

### 1. Clone the repo

```bash
git clone https://github.com/your-username/prepwise.git
cd prepwise
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root with:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
VAPI_API_KEY=your_vapi_key
GEMINI_API_KEY=your_gemini_key
```

### 4. Run locally

```bash
npm run dev
```

Your app will be live at `http://localhost:3000`

---

## 🔐 Authentication Flow

1. User signs up / logs in with Firebase.
2. Session cookies are securely set.
3. Routes are protected (auth pages redirect authenticated users, and vice versa).

---

## 🎤 Interview Flow

1. User selects role, type, level, and stack.
2. Gemini AI generates **personalized questions**.
3. Vapi handles **voice-driven interaction**.
4. Responses are transcribed in real-time.
5. AI generates a **detailed feedback report** with scores.

---

## 📊 Feedback Report Includes

* ✅ **Total Score**
* ✅ **Category Scores** (Communication, Technical, Problem-Solving, Confidence, Cultural Fit)
* ✅ **Strengths & Weaknesses**
* ✅ **Final Assessment**
* ✅ **Actionable Suggestions**

---

## 🚀 Deployment

The project is deployed on **Vercel**.
Key steps:

* Push repo to GitHub.
* Connect GitHub → Vercel.
* Configure environment variables.
* Automatic builds on push.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and open a PR.

---

## 📬 Contact

👤 **Saket Chaudhary**
🔗 [LinkedIn](https://www.linkedin.com/in/saket-chaudhary)
💻 [GitHub](https://github.com/Saket22-CS)

---

✨ *PrepWise is more than a project — it’s a step towards building confidence and bridging the gap between preparation and performance.*
