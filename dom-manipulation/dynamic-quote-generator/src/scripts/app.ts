// This file contains the main script for the application. It initializes the quote generator, handles user interactions, and integrates the functionalities for adding, displaying, and managing quotes. It also includes logic for loading quotes from local storage.

import { saveQuote, getQuotes } from './quotes';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';
import { exportQuotes, importQuotes } from './importExport';

const quoteDisplay = document.getElementById('quoteDisplay') as HTMLElement;
const addQuoteButton = document.getElementById('addQuoteButton') as HTMLButtonElement;
const importButton = document.getElementById('importButton') as HTMLButtonElement;
const exportButton = document.getElementById('exportButton') as HTMLButtonElement;

function displayQuotes() {
    const quotes = loadFromLocalStorage();
    quoteDisplay.innerHTML = quotes.map(quote => `<p>${quote}</p>`).join('');
}

addQuoteButton.addEventListener('click', () => {
    const newQuote = prompt('Enter a new quote:');
    if (newQuote) {
        saveQuote(newQuote);
        saveToLocalStorage(newQuote);
        displayQuotes();
    }
});

importButton.addEventListener('click', async () => {
    const quotes = await importQuotes();
    quotes.forEach(quote => saveQuote(quote));
    displayQuotes();
});

exportButton.addEventListener('click', () => {
    exportQuotes();
});

// Load quotes from local storage on initial load
displayQuotes();