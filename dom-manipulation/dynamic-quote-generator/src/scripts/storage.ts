function saveQuoteToLocalStorage(quote: string): void {
    const quotes = getQuotesFromLocalStorage();
    quotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function getQuotesFromLocalStorage(): string[] {
    const quotes = localStorage.getItem('quotes');
    return quotes ? JSON.parse(quotes) : [];
}

function saveQuoteToSessionStorage(quote: string): void {
    const sessionQuotes = getQuotesFromSessionStorage();
    sessionQuotes.push(quote);
    sessionStorage.setItem('sessionQuotes', JSON.stringify(sessionQuotes));
}

function getQuotesFromSessionStorage(): string[] {
    const sessionQuotes = sessionStorage.getItem('sessionQuotes');
    return sessionQuotes ? JSON.parse(sessionQuotes) : [];
}

export { saveQuoteToLocalStorage, getQuotesFromLocalStorage, saveQuoteToSessionStorage, getQuotesFromSessionStorage };