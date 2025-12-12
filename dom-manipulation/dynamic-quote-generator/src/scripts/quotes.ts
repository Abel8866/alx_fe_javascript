export interface Quote {
    id: number;
    text: string;
    author: string;
}

let quotes: Quote[] = [];

export function addQuote(text: string, author: string): void {
    const newQuote: Quote = {
        id: Date.now(),
        text,
        author,
    };
    quotes.push(newQuote);
    saveQuotesToLocalStorage();
}

export function getQuotes(): Quote[] {
    return quotes;
}

export function loadQuotesFromLocalStorage(): void {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
}

export function saveQuotesToLocalStorage(): void {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}