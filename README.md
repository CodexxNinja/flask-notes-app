# 📝 Flask Notes App

A full-stack notes-taking web application built with **Flask**, featuring secure user authentication, complete CRUD functionality, an AI-powered sentiment analyzer, dark mode, and a clean, modern UI.

This was built as **Week 1** of my personal Python → Flask → AI/ML project roadmap, where I'm building and shipping one project per week.

---

## 🚀 Live Demo

🔗 [Live App](#) *(link will be added after deployment)*

---

## ✨ Features

- 🔐 **User Authentication** — Secure register/login/logout system with hashed passwords (no plain-text passwords ever stored)
- 📝 **Full CRUD for Notes** — Create, read, update, and delete personal notes
- 🤖 **AI Sentiment Detection** — Each note is automatically analyzed and tagged as 😊 Positive, 😐 Neutral, or 😞 Negative using NLP (TextBlob)
- 🌗 **Dark Mode** — Toggle between light and dark themes, saved across visits
- 🔢 **Live Word/Character Counter** — Real-time count while writing a note
- 🔒 **User-specific Data** — Every user can only see and manage their own notes
- 💬 **Flash Messages** — Instant feedback for actions (login success, errors, note saved, etc.)
- 📱 **Responsive UI** — Clean, card-based design that works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, Flask |
| Database | SQLite + Flask-SQLAlchemy (ORM) |
| Authentication | Flask-Login, Werkzeug password hashing |
| AI/NLP | TextBlob (sentiment analysis) |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Templating | Jinja2 |

---

## 📸 Screenshots

*(Add 2–3 screenshots here — login page, dashboard with notes, dark mode. This section matters a lot for recruiters skimming your repo.)*

```
![Dashboard](screenshots/dashboard.png)
![Dark Mode](screenshots/darkmode.png)
```

---

## ⚙️ How It Works (Quick Overview)

1. A user **registers** an account — their password is hashed before being stored, never saved as plain text.
2. After **logging in**, the session is managed securely using Flask-Login.
3. On the **dashboard**, users can create new notes. Each note's text is passed through a sentiment analysis function that scores it and labels it Positive, Negative, or Neutral.
4. Notes are stored in a SQLite database, linked to the specific user who created them — so no one can see or edit another user's notes.
5. Users can **edit or delete** any of their own notes at any time.
6. A **dark mode toggle** in the navbar lets users switch themes, and their choice is remembered using the browser's local storage.

---

## 📂 Project Structure

```
flask-notes-app/
├── app.py                 # Main Flask app: routes & logic
├── models.py               # Database models (User, Note)
├── requirements.txt         # Python dependencies
├── .env                     # Secret key (not committed to GitHub)
├── .gitignore
├── static/
│   ├── css/style.css        # Styling (light/dark themes, layout)
│   └── js/script.js         # Dark mode, word counter logic
└── templates/
    ├── base.html            # Shared layout (navbar, flash messages)
    ├── login.html
    ├── register.html
    ├── dashboard.html
    └── note_form.html       # Used for both creating & editing notes
```

---

## 💻 Running This Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/CodexxNinja/flask-notes-app.git
cd flask-notes-app
```

### 2. Create a virtual environment
```bash
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate   # Mac/Linux
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Set up environment variables
Create a `.env` file in the root folder:
```
SECRET_KEY=your-own-random-secret-key
```
Generate one with:
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### 5. Run the app
```bash
python app.py
```
Visit `http://127.0.0.1:5000` in your browser.

---

## 🧠 What I Learned Building This

- Structuring a Flask app with proper routes, templates, and blueprints of logic
- Implementing secure authentication from scratch (hashing, sessions, protected routes)
- Designing a relational database schema with foreign keys (User → Notes)
- Integrating a lightweight NLP library into a web app for real functionality, not just a demo
- Writing UI logic in vanilla JavaScript (dark mode persistence, live counters) without any frontend framework

---

## 🗺️ What's Next

This is Week 1 of a 14-week roadmap covering Flask, APIs, Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, ML pipelines, and deployed AI/ML web apps. Follow along on my GitHub for upcoming projects.

---

## 📄 License

This project is open source and available for anyone to learn from.
