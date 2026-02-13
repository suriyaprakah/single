const quotes = [
    "Single is not a status, it's a word that describes a person who is strong enough to live and enjoy life without depending on others.",
    "My life. My rules. My attitude.",
    "Being single isn’t a weakness.It’s a standard.😎🔥",
    "Single: Stress Is Now Gone Life Enjoyed.",
    "I'm always single.",
    "I don’t change for anyone.",
    "Single by choice.Standard by attitude."
];

const vibeBtn = document.getElementById('vibeBtn');
const quoteText = document.getElementById('quote');

vibeBtn.addEventListener('click', () => {
    // Adding a fade-out effect
    quoteText.style.opacity = 0;

    setTimeout(() => {
        // Pick random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = `"${quotes[randomIndex]}"`;
        
        // Fade-in effect
        quoteText.style.opacity = 1;
    }, 400);
});

// Fun feature: Randomly change the "Focus Level" percentage
setInterval(() => {
    const randomPercent = Math.floor(Math.random() * (100 - 95 + 1)) + 95;
    document.getElementById('percent').innerText = randomPercent;
}, 3000);
