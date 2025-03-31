// Gemini API Integration for Interactive Exercises

// API Configuration
const GEMINI_API_KEY = "YOUR_API_KEY"; // This should be replaced with a proper API key management system in production
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// DOM Elements for the interactive exercise interface
let exerciseContainerEl;
let promptInputEl;
let submitButtonEl;
let responseContainerEl;
let feedbackContainerEl;

// Initialize the exercise interface
function initExerciseInterface(containerId) {
    // Get or create the container
    exerciseContainerEl = document.getElementById(containerId) || createExerciseContainer(containerId);
    
    // Create the interface elements if they don't exist
    if (!exerciseContainerEl.querySelector('.prompt-input')) {
        createExerciseElements();
    }
    
    // Add event listeners
    setupEventListeners();
}

// Create the exercise container if it doesn't exist
function createExerciseContainer(containerId) {
    const container = document.createElement('div');
    container.id = containerId;
    container.className = 'exercise-container';
    document.body.appendChild(container);
    return container;
}

// Create the interface elements
function createExerciseElements() {
    // Create elements based on current language
    const lang = currentLang || 'de';
    const labels = {
        de: {
            title: 'Interaktive Übung',
            promptLabel: 'Gib deinen Prompt ein:',
            submitButton: 'Absenden',
            responseTitle: 'Gemini Antwort:',
            feedbackTitle: 'Feedback zu deinem Prompt:',
            placeholder: 'Schreibe hier deinen Prompt...'
        },
        en: {
            title: 'Interactive Exercise',
            promptLabel: 'Enter your prompt:',
            submitButton: 'Submit',
            responseTitle: 'Gemini Response:',
            feedbackTitle: 'Feedback on your prompt:',
            placeholder: 'Write your prompt here...'
        }
    };
    
    // Create the HTML structure
    exerciseContainerEl.innerHTML = `
        <div class="exercise-header">
            <h3>${labels[lang].title}</h3>
        </div>
        <div class="exercise-content">
            <div class="prompt-section">
                <label for="prompt-input">${labels[lang].promptLabel}</label>
                <textarea id="prompt-input" class="prompt-input" placeholder="${labels[lang].placeholder}" rows="5"></textarea>
                <button id="submit-prompt" class="submit-button">${labels[lang].submitButton}</button>
            </div>
            <div class="response-section">
                <h4>${labels[lang].responseTitle}</h4>
                <div id="response-container" class="response-container"></div>
            </div>
            <div class="feedback-section">
                <h4>${labels[lang].feedbackTitle}</h4>
                <div id="feedback-container" class="feedback-container"></div>
            </div>
        </div>
    `;
    
    // Get references to the created elements
    promptInputEl = document.getElementById('prompt-input');
    submitButtonEl = document.getElementById('submit-prompt');
    responseContainerEl = document.getElementById('response-container');
    feedbackContainerEl = document.getElementById('feedback-container');
}

// Set up event listeners
function setupEventListeners() {
    submitButtonEl.addEventListener('click', handlePromptSubmission);
    
    // Update interface language when language is changed
    document.addEventListener('languageChanged', (e) => {
        updateExerciseLanguage(e.detail.lang);
    });
}

// Update the exercise interface language
function updateExerciseLanguage(lang) {
    const labels = {
        de: {
            title: 'Interaktive Übung',
            promptLabel: 'Gib deinen Prompt ein:',
            submitButton: 'Absenden',
            responseTitle: 'Gemini Antwort:',
            feedbackTitle: 'Feedback zu deinem Prompt:',
            placeholder: 'Schreibe hier deinen Prompt...'
        },
        en: {
            title: 'Interactive Exercise',
            promptLabel: 'Enter your prompt:',
            submitButton: 'Submit',
            responseTitle: 'Gemini Response:',
            feedbackTitle: 'Feedback on your prompt:',
            placeholder: 'Write your prompt here...'
        }
    };
    
    // Update the text content of the elements
    exerciseContainerEl.querySelector('.exercise-header h3').textContent = labels[lang].title;
    exerciseContainerEl.querySelector('.prompt-section label').textContent = labels[lang].promptLabel;
    promptInputEl.placeholder = labels[lang].placeholder;
    submitButtonEl.textContent = labels[lang].submitButton;
    exerciseContainerEl.querySelector('.response-section h4').textContent = labels[lang].responseTitle;
    exerciseContainerEl.querySelector('.feedback-section h4').textContent = labels[lang].feedbackTitle;
}

// Handle prompt submission
async function handlePromptSubmission() {
    const promptText = promptInputEl.value.trim();
    
    if (!promptText) {
        showError(currentLang === 'de' ? 'Bitte gib einen Prompt ein.' : 'Please enter a prompt.');
        return;
    }
    
    // Show loading state
    responseContainerEl.innerHTML = `<div class="loading">${currentLang === 'de' ? 'Lädt...' : 'Loading...'}</div>`;
    feedbackContainerEl.innerHTML = '';
    
    try {
        // Get the current exercise context
        const exerciseContext = getCurrentExerciseContext();
        
        // Call Gemini API
        const response = await callGeminiAPI(promptText, exerciseContext);
        
        // Process and display the response
        displayGeminiResponse(response);
        
        // Generate and display feedback on the prompt
        const feedback = await generatePromptFeedback(promptText, response, exerciseContext);
        displayPromptFeedback(feedback);
    } catch (error) {
        showError(error.message);
    }
}

// Get the current exercise context based on the lesson
function getCurrentExerciseContext() {
    // This would be determined by the current lesson
    const currentLessonId = getCurrentLessonId();
    
    // Define exercise contexts for each lesson
    const exerciseContexts = {
        de: {
            1: {
                task: 'Erstelle einen einfachen Prompt, der nach Informationen über Netzwerksicherheit fragt.',
                criteria: ['Klarheit', 'Präzision', 'Relevanz für SOC-Teams']
            },
            2: {
                task: 'Formuliere einen Instruction Prompt, der Gemini anweist, verdächtige Netzwerkaktivitäten zu analysieren.',
                criteria: ['Klare Rollenanweisung', 'Spezifische Aufgabenbeschreibung', 'Formatierungsanweisungen']
            },
            // Additional contexts for other lessons would be defined here
        },
        en: {
            1: {
                task: 'Create a simple prompt that asks for information about network security.',
                criteria: ['Clarity', 'Precision', 'Relevance to SOC teams']
            },
            2: {
                task: 'Formulate an instruction prompt that directs Gemini to analyze suspicious network activities.',
                criteria: ['Clear role instruction', 'Specific task description', 'Formatting instructions']
            },
            // Additional contexts for other lessons would be defined here
        }
    };
    
    return exerciseContexts[currentLang][currentLessonId] || {
        task: currentLang === 'de' ? 'Übe Prompt Engineering Techniken.' : 'Practice prompt engineering techniques.',
        criteria: ['Clarity', 'Specificity', 'Effectiveness']
    };
}

// Get the current lesson ID
function getCurrentLessonId() {
    // This would be determined by the current lesson being viewed
    // For now, we'll return a default value
    return 1;
}

// Call the Gemini API
async function callGeminiAPI(promptText, exerciseContext) {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY
        };
        
        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: promptText
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024
            }
        };
        
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(currentLang === 'de' 
                ? `API-Fehler: ${response.status} ${response.statusText}` 
                : `API Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        return result.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw new Error(currentLang === 'de' 
            ? 'Fehler bei der Kommunikation mit der Gemini API. Bitte versuche es später erneut.' 
            : 'Error communicating with the Gemini API. Please try again later.');
    }
}

// Generate feedback on the prompt
async function generatePromptFeedback(promptText, response, exerciseContext) {
    try {
        const feedbackPrompt = currentLang === 'de'
            ? `Als Prompt Engineering Experte, bewerte den folgenden Prompt basierend auf diesen Kriterien: ${exerciseContext.criteria.join(', ')}. 
               Die Aufgabe war: "${exerciseContext.task}"
               
               Prompt: "${promptText}"
               
               Gib konstruktives Feedback, wie der Prompt verbessert werden könnte, und hebe Stärken hervor. 
               Formatiere dein Feedback in diesen Kategorien: Stärken, Verbesserungsmöglichkeiten, Gesamtbewertung (1-10).`
            
            : `As a prompt engineering expert, evaluate the following prompt based on these criteria: ${exerciseContext.criteria.join(', ')}.
               The task was: "${exerciseContext.task}"
               
               Prompt: "${promptText}"
               
               Provide constructive feedback on how the prompt could be improved, and highlight strengths.
               Format your feedback in these categories: Strengths, Areas for Improvement, Overall Rating (1-10).`;
        
        const headers = {
            'Content-Type': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY
        };
        
        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: feedbackPrompt
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.2,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024
            }
        };
        
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(currentLang === 'de' 
                ? `API-Fehler: ${response.status} ${response.statusText}` 
                : `API Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        return result.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error generating feedback:', error);
        return currentLang === 'de'
            ? 'Feedback konnte nicht generiert werden. Bitte versuche es später erneut.'
            : 'Could not generate feedback. Please try again later.';
    }
}

// Display the Gemini API response
function displayGeminiResponse(responseText) {
    responseContainerEl.innerHTML = `<div class="response-text">${formatResponseText(responseText)}</div>`;
}

// Display feedback on the prompt
function displayPromptFeedback(feedbackText) {
    feedbackContainerEl.innerHTML = `<div class="feedback-text">${formatResponseText(feedbackText)}</div>`;
}

// Format response text with simple markdown-like conversion
function formatResponseText(text) {
    return text
        // Convert headers
        .replace(/^# (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h4>$1</h4>')
        .replace(/^### (.*$)/gm, '<h5>$1</h5>')
        // Convert bold and italic
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Convert line breaks to paragraphs
        .replace(/\n\n/g, '</p><p>')
        // Wrap in paragraph tags
        .replace(/^(.+)$/gm, '<p>$1</p>');
}

// Show error message
function showError(message) {
    responseContainerEl.innerHTML = `<div class="error-message">${message}</div>`;
}

// Add the exercise interface to the global scope
window.initExerciseInterface = initExerciseInterface;

// Add custom event for language changes
function dispatchLanguageChangedEvent(lang) {
    const event = new CustomEvent('languageChanged', {
        detail: { lang: lang }
    });
    document.dispatchEvent(event);
}

// Update the language switcher to dispatch the custom event
const originalUpdateContent = updateContent;
updateContent = function(lang) {
    originalUpdateContent(lang);
    dispatchLanguageChangedEvent(lang);
};

// Add CSS for the exercise interface
function addExerciseStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .exercise-container {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .exercise-header {
            margin-bottom: 15px;
        }
        
        .exercise-header h3 {
            color: var(--secondary-color);
            margin: 0;
        }
        
        .prompt-section {
            margin-bottom: 20px;
        }
        
        .prompt-section label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .prompt-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
            font-size: 14px;
            resize: vertical;
        }
        
        .submit-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            margin-top: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .submit-button:hover {
            background-color: #2980b9;
        }
        
        .response-section, .feedback-section {
            margin-top: 20px;
        }
        
        .response-section h4, .feedback-section h4 {
            color: var(--secondary-color);
            margin-bottom: 10px;
        }
        
        .response-container, .feedback-container {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            min-height: 100px;
        }
        
        .loading {
            color: #888;
            font-style: italic;
        }
        
        .error-message {
            color: #e74c3c;
            font-weight: bold;
        }
        
        .response-text p, .feedback-text p {
            margin-bottom: 10px;
        }
        
        .response-text h3, .feedback-text h3,
        .response-text h4, .feedback-text h4,
        .response-text h5, .feedback-text h5 {
            margin-top: 15px;
            margin-bottom: 10px;
        }
    `;
    document.head.appendChild(styleEl);
}

// Initialize styles when the document is loaded
document.addEventListener('DOMContentLoaded', addExerciseStyles);
