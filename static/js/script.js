// ---------- WORD/CHAR COUNTER ----------
const noteContent = document.getElementById('noteContent');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

if (noteContent) {
    const updateCounts = () => {
        const text = noteContent.value.trim();
        const words = text === '' ? 0 : text.split(/\s+/).length;
        wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;
        charCount.textContent = `${noteContent.value.length} characters`;
    };
    noteContent.addEventListener('input', updateCounts);
    updateCounts(); // run once on load (for edit mode)
}

// ---------- DARK MODE ----------
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        root.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    }
};

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}