// Define the flashcards array with names and branches
const flashcards = [
    { question: "Piyush Kumar Sahu", answer: "BIO-MEDICAL" },
    { question: "Pavankartik Peyyetti", answer: "BIO TECHNOLOGY" },
    { question: "Snehal Bhute", answer: "BIO TECHNOLOGY" },
    { question: "Aishwarya Kumar Singh", answer: "CHEMICAL" },
    { question: "D. Satya Harshit", answer: "CHEMICAL" },
    { question: "Ishan Binayak", answer: "CIVIL" },
    { question: "Mohammad Muddasir", answer: "CIVIL" },
    { question: "Sweta Kumari", answer: "ELECTRICAL" },
    { question: "Pranav Kumar Singh", answer: "ELECTRICAL" },
    { question: "Juhi Dwivedi", answer: "ELECTRICAL" },
    { question: "Ankit Dubey", answer: "MCA" },
    { question: "Utsab Samadder", answer: "MCA" },
    { question: "Arikathota Karthik", answer: "MECHANICAL" },
    { question: "Balraj Singh", answer: "MECHANICAL" },
    { question: "Prashant Kaushik", answer: "MECHANICAL" },
    { question: "Anurag Chatterjee", answer: "METALLURGICAL AND MATERIALS" },
    { question: "Yash Kumar Gupta", answer: "METALLURGICAL AND MATERIALS" },
    { question: "Shruti Kashyap", answer: "METALLURGICAL AND MATERIALS" },
    { question: "Krish Gupta", answer: "MINING AND APPLIED GEOLOGY" },
    { question: "Parmanand Mishra", answer: "MINING AND APPLIED GEOLOGY" }
];

let shuffledFlashcards = [];

// Function to shuffle the flashcards array
function shuffleFlashcards() {
    shuffledFlashcards = [...flashcards].sort(() => Math.random() - 0.5);
}

let currentCard = 0;

function showFlashcard() {
    const flashcard = shuffledFlashcards[currentCard];
    document.getElementById('flashcard').innerText = flashcard.question;
    document.getElementById('answer').innerText = "";
    document.getElementById('showAnswerBtn').style.display = 'inline';
    document.getElementById('nextBtn').style.display = 'none';
}

function showAnswer() {
    const flashcard = shuffledFlashcards[currentCard];
    document.getElementById('answer').innerText = flashcard.answer;
    document.getElementById('showAnswerBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline';
}

function nextCard() {
    currentCard = (currentCard + 1) % shuffledFlashcards.length;
    showFlashcard();
}

// Initialize the quiz by shuffling the flashcards array
shuffleFlashcards();
document.addEventListener('DOMContentLoaded', showFlashcard);
