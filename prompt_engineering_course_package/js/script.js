// Main JavaScript file for the Prompt Engineering Course

// DOM Elements
const deBtnEl = document.getElementById('de-btn');
const enBtnEl = document.getElementById('en-btn');
const courseIntroEl = document.getElementById('course-intro');
const lessonCardsEl = document.querySelectorAll('.lesson-card');
const lessonModalEl = document.getElementById('lesson-modal');
const lessonContainerEl = document.getElementById('lesson-container');
const closeModalEl = document.querySelector('.close');

// Language content
const content = {
    de: {
        title: 'Prompt Engineering Kurs für SOC-Teams',
        introTitle: 'Willkommen zum Prompt Engineering Kurs',
        introText1: 'Dieser Kurs wurde speziell für SOC-Teams entwickelt, um die Fähigkeiten im Bereich Prompt Engineering mit Google Studio AI und Gemini zu verbessern.',
        introText2: 'Jede Lektion dauert ca. 15-20 Minuten und enthält interaktive Übungen und Challenges.',
        lessonsTitle: 'Lektionen',
        lessonBtnText: 'Zur Lektion',
        lessons: [
            {
                number: 1,
                title: 'Grundlagen des Prompt Engineering',
                description: 'Verstehen, was Prompts sind und wie sie funktionieren. Kennenlernen der verschiedenen Prompt-Typen.'
            },
            {
                number: 2,
                title: 'Instruction Prompts für SOC-Teams',
                description: 'Effektive Anweisungen für Gemini formulieren können. SOC-spezifische Instruction Prompts erstellen.'
            },
            {
                number: 3,
                title: 'Kontext und Beispiele in Prompts',
                description: 'Die Rolle von Kontext in Prompts verstehen. Beispiele effektiv in Prompts einbauen.'
            },
            {
                number: 4,
                title: 'Fortgeschrittene Prompt-Techniken',
                description: 'Fortgeschrittene Prompt-Strategien kennenlernen. Komplexe Aufgaben durch Prompts lösen.'
            },
            {
                number: 5,
                title: 'Prompt Engineering für Sicherheitsanalysen',
                description: 'Prompts für Sicherheitsanalysen optimieren. Gemini für SOC-Aufgaben effektiv einsetzen.'
            },
            {
                number: 6,
                title: 'Gemini API Integration und Automatisierung',
                description: 'Gemini API in Workflows integrieren. Prompt-basierte Automatisierung verstehen.'
            },
            {
                number: 7,
                title: 'Prompt Engineering Best Practices und Fallstricke',
                description: 'Häufige Fehler beim Prompt Engineering vermeiden. Prompts systematisch verbessern.'
            },
            {
                number: 8,
                title: 'Abschlussprojekt - SOC Prompt Engineering Challenge',
                description: 'Das Gelernte in einem praxisnahen Projekt anwenden. Komplexe SOC-Aufgaben mit Prompt Engineering lösen.'
            }
        ],
        footerText: '© 2025 Prompt Engineering Kurs für SOC-Teams'
    },
    en: {
        title: 'Prompt Engineering Course for SOC Teams',
        introTitle: 'Welcome to the Prompt Engineering Course',
        introText1: 'This course has been specifically designed for SOC teams to improve their skills in prompt engineering with Google Studio AI and Gemini.',
        introText2: 'Each lesson takes approximately 15-20 minutes and includes interactive exercises and challenges.',
        lessonsTitle: 'Lessons',
        lessonBtnText: 'Go to Lesson',
        lessons: [
            {
                number: 1,
                title: 'Fundamentals of Prompt Engineering',
                description: 'Understand what prompts are and how they work. Learn about different prompt types.'
            },
            {
                number: 2,
                title: 'Instruction Prompts for SOC Teams',
                description: 'Formulate effective instructions for Gemini. Create SOC-specific instruction prompts.'
            },
            {
                number: 3,
                title: 'Context and Examples in Prompts',
                description: 'Understand the role of context in prompts. Effectively incorporate examples in prompts.'
            },
            {
                number: 4,
                title: 'Advanced Prompt Techniques',
                description: 'Learn advanced prompt strategies. Solve complex tasks through prompts.'
            },
            {
                number: 5,
                title: 'Prompt Engineering for Security Analysis',
                description: 'Optimize prompts for security analysis. Effectively use Gemini for SOC tasks.'
            },
            {
                number: 6,
                title: 'Gemini API Integration and Automation',
                description: 'Integrate Gemini API into workflows. Understand prompt-based automation.'
            },
            {
                number: 7,
                title: 'Prompt Engineering Best Practices and Pitfalls',
                description: 'Avoid common mistakes in prompt engineering. Systematically improve prompts.'
            },
            {
                number: 8,
                title: 'Final Project - SOC Prompt Engineering Challenge',
                description: 'Apply what you\'ve learned in a practical project. Solve complex SOC tasks with prompt engineering.'
            }
        ],
        footerText: '© 2025 Prompt Engineering Course for SOC Teams'
    }
};

// Current language (default: German)
let currentLang = 'de';

// Function to update content based on selected language
function updateContent(lang) {
    // Update document title
    document.title = content[lang].title;
    
    // Update header title
    document.querySelector('header h1').textContent = content[lang].title;
    
    // Update intro section
    document.querySelector('#course-intro h2').textContent = content[lang].introTitle;
    const introParas = document.querySelectorAll('#course-intro p');
    introParas[0].textContent = content[lang].introText1;
    introParas[1].textContent = content[lang].introText2;
    
    // Update lessons section title
    document.querySelector('#lessons h2').textContent = content[lang].lessonsTitle;
    
    // Update lesson cards
    lessonCardsEl.forEach((card, index) => {
        const lessonData = content[lang].lessons[index];
        card.querySelector('h4').textContent = lessonData.title;
        card.querySelector('p').textContent = lessonData.description;
        card.querySelector('.btn').textContent = content[lang].lessonBtnText;
    });
    
    // Update footer
    document.querySelector('footer p').textContent = content[lang].footerText;
    
    // Update language buttons
    if (lang === 'de') {
        deBtnEl.classList.add('active');
        enBtnEl.classList.remove('active');
    } else {
        enBtnEl.classList.add('active');
        deBtnEl.classList.remove('active');
    }
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    currentLang = lang;
}

// Function to load lesson content
async function loadLessonContent(lessonId) {
    try {
        const response = await fetch(`content/lesson${lessonId}_${currentLang}.md`);
        if (!response.ok) {
            throw new Error(`Failed to load lesson content: ${response.status}`);
        }
        const markdown = await response.text();
        
        // Simple markdown to HTML conversion (for headings, paragraphs, code blocks)
        let html = markdown
            // Convert headers
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            // Convert code blocks
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            // Convert inline code
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // Convert paragraphs (lines that aren't headers or code blocks)
            .replace(/^(?!<h|<pre|<ul|<ol)(.+)$/gm, '<p>$1</p>')
            // Convert unordered lists
            .replace(/^\* (.*)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>\n)+/g, '<ul>$&</ul>')
            // Convert ordered lists
            .replace(/^\d+\. (.*)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>\n)+/g, '<ol>$&</ol>');
        
        return html;
    } catch (error) {
        console.error('Error loading lesson content:', error);
        return `<h1>Error</h1><p>Failed to load lesson content: ${error.message}</p>`;
    }
}

// Function to initialize the exercise interface for the current lesson
function initializeExerciseForLesson(lessonId) {
    // Clear any existing exercise
    const exerciseContainerEl = document.getElementById('exercise-container');
    exerciseContainerEl.innerHTML = '';
    
    // Add a heading for the exercise section
    const exerciseHeading = document.createElement('h2');
    exerciseHeading.textContent = currentLang === 'de' ? 'Interaktive Übung' : 'Interactive Exercise';
    exerciseHeading.className = 'exercise-heading';
    exerciseContainerEl.appendChild(exerciseHeading);
    
    // Initialize the exercise interface
    if (typeof window.initExerciseInterface === 'function') {
        window.initExerciseInterface('exercise-container');
    } else {
        console.error('Exercise interface initialization function not found');
        exerciseContainerEl.innerHTML += `<p class="error-message">${
            currentLang === 'de' 
                ? 'Die interaktive Übung konnte nicht geladen werden. Bitte versuchen Sie es später erneut.' 
                : 'The interactive exercise could not be loaded. Please try again later.'
        }</p>`;
    }
}

// Event Listeners

// Language switcher
deBtnEl.addEventListener('click', () => {
    if (currentLang !== 'de') {
        updateContent('de');
    }
});

enBtnEl.addEventListener('click', () => {
    if (currentLang !== 'en') {
        updateContent('en');
    }
});

// Lesson buttons
document.querySelectorAll('.btn[data-lesson-id]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const lessonId = e.target.getAttribute('data-lesson-id');
        const lessonContent = await loadLessonContent(lessonId);
        lessonContainerEl.innerHTML = lessonContent;
        lessonModalEl.style.display = 'block';
        
        // Initialize the exercise interface for this lesson
        initializeExerciseForLesson(lessonId);
    });
});

// Close modal
closeModalEl.addEventListener('click', () => {
    lessonModalEl.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === lessonModalEl) {
        lessonModalEl.style.display = 'none';
    }
});

// Initialize content based on saved preference or default
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
        updateContent(savedLang);
    } else {
        updateContent('de'); // Default language
    }
});
