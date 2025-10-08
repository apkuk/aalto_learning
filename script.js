// Global state
let currentStep = 0;
const totalSteps = 5;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
});

// Navigation functions
function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        updateProgress();
        scrollToTop();
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
        updateProgress();
        scrollToTop();
    }
}

function showStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show current step
    if (stepNumber === 0) {
        document.getElementById('welcome').classList.add('active');
    } else {
        document.getElementById(`step${stepNumber}`).classList.add('active');
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const percentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = percentage + '%';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Quiz functionality
function checkAnswer(questionName, correctValue, questionNumber) {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    const feedback = document.getElementById(`feedback${questionNumber}`);
    const options = document.querySelectorAll(`input[name="${questionName}"]`);

    if (!selectedOption) {
        feedback.className = 'feedback show incorrect';
        feedback.textContent = '⚠️ Please select an answer first!';
        return;
    }

    // Remove previous styling
    options.forEach(option => {
        option.parentElement.classList.remove('correct', 'incorrect');
    });

    if (selectedOption.value === correctValue) {
        feedback.className = 'feedback show correct';
        feedback.textContent = '✅ Correct! A good MVP solves one specific problem really well. You can always add more features later based on user feedback.';
        selectedOption.parentElement.classList.add('correct');
    } else {
        feedback.className = 'feedback show incorrect';
        feedback.textContent = '❌ Not quite. Remember: MVP stands for Minimum Viable Product. Focus on solving one problem well before adding complexity!';
        selectedOption.parentElement.classList.add('incorrect');

        // Highlight the correct answer
        options.forEach(option => {
            if (option.value === correctValue) {
                option.parentElement.classList.add('correct');
            }
        });
    }
}

// Code copy functionality
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
        // Find the copy button
        const button = codeElement.parentElement.querySelector('.copy-btn');
        const originalText = button.textContent;

        button.textContent = '✓ Copied!';
        button.style.background = '#10b981';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code. Please try selecting and copying manually.');
    });
}

// Reset tutorial
function resetTutorial() {
    currentStep = 0;
    showStep(0);
    updateProgress();
    scrollToTop();

    // Reset all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset all radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
        radio.parentElement.classList.remove('correct', 'incorrect');
    });

    // Hide all feedback
    const feedbacks = document.querySelectorAll('.feedback');
    feedbacks.forEach(feedback => {
        feedback.classList.remove('show');
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextStep();
    } else if (e.key === 'ArrowLeft') {
        previousStep();
    }
});

// Track checklist progress
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
        const checklistBox = e.target.closest('.checklist-box');
        if (checklistBox) {
            const allCheckboxes = checklistBox.querySelectorAll('input[type="checkbox"]');
            const checkedBoxes = checklistBox.querySelectorAll('input[type="checkbox"]:checked');

            if (allCheckboxes.length === checkedBoxes.length) {
                // All items checked - show celebration
                showCelebration(checklistBox);
            }
        }
    }
});

function showCelebration(element) {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.textContent = '🎉 Great job! All tasks completed!';
    celebration.style.cssText = `
        position: absolute;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        animation: slideIn 0.5s ease;
        margin-top: 15px;
    `;

    element.style.position = 'relative';
    element.appendChild(celebration);

    setTimeout(() => {
        celebration.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => celebration.remove(), 500);
    }, 3000);
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('header h1').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        alert('🚀 You\'re enthusiastic! Now go build something amazing!');
        clickCount = 0;
    }
});

console.log('%c🚀 AI MVP Builder ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold; border-radius: 5px;');
console.log('%cReady to build your first AI MVP? Let\'s go! 💪', 'color: #6366f1; font-size: 14px; font-weight: bold;');
