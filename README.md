# Flask Notes App

### *A Full-Stack Note-Taking Web Application with Integrated Sentiment Analysis*

[![Live App](https://img.shields.io/badge/Live_Demo-Online-brightgreen?style=for-the-badge)](https://flask-notes-app-d3gn.onrender.com)
[![Python](https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge)](https://www.python.org)
[![Flask](https://img.shields.io/badge/Flask-Framework-black?style=for-the-badge)](https://flask.palletsprojects.com)

---

## Project Description

The **Flask Notes App** is a secure, full-stack **web application** designed to streamline **personal note management** while introducing intelligent content insights. Built using a modern, lightweight backend architecture, it delivers complete **CRUD functionality**, robust user data isolation, and real-time interface enhancements like an asynchronous dark mode engine and live metrics trackingsx.

The core distinguishing feature is an integrated Natural Language Processing (NLP) pipeline that dynamically evaluates the emotional undertone of user entries, automatically categorizing and tagging each note based on its underlying sentiment.

---

## Key Features

*   **Secure Authentication Engine** — End-to-end registration, login, and session management powered by cryptographic password hashing to ensure no plain-text credentials touch the database.
*   **Isolated Data Architecture** — Enforced user-specific data isolation layer using relational foreign keys; users strictly read and mutate their own data records.
*   **Algorithmic Sentiment Analysis** — Automated textual analysis utilizing TextBlob NLP to evaluate note content and apply real-time sentiment classifications: Positive, Neutral, or Negative.
*   **Persistent Theme Engine** — A hardware-accelerated dark/light mode toggle with state persistence handled seamlessly via client-side local storage.
*   **Reactive UI Components** — High-performance, vanilla JavaScript live word and character counters that calculate input metrics instantly without triggering page reloads.
*   **Asynchronous Feedback System** — UI micro-interactions featuring contextual flash alert notifications for instant system feedback (e.g., cryptographic verification, CRUD success).

---

## Tech Stack

| Layer | Technologies & Libraries |
| :--- | :--- |
| **Backend Core** | Python, Flask |
| **Database & ORM** | SQLite, Flask-SQLAlchemy |
| **Security & Auth** | Flask-Login, Werkzeug Security (PBKDF2) |
| **Natural Language Processing** | TextBlob |
| **Frontend Architecture** | HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript |
| **Templating Engine** | Jinja2 |

---

## Project Structure

```text
flask-notes-app/
├── app.py                  # Application entry point & routing architecture
├── models.py               # Relational database schemas (User 1->N Note)
├── requirements.txt        # Deterministic project dependencies
├── .env                    # Local environment variables (git-ignored)
├── .gitignore
├── static/
│   ├── css/style.css       # Scoped stylesheets & dynamic theme properties
│   └── js/script.js        # Client-side reactivity & persistence logic
└── templates/
    ├── base.html           # Master layout blueprint & alert layout
    ├── login.html          # Authentication portals
    ├── register.html
    ├── dashboard.html      # Protected user console
    └── note_form.html      # Polymorphic creation/editing interface
