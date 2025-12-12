export function exportQuotes(quotes: any[]): void {
    const json = JSON.stringify(quotes, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export function importQuotes(event: Event, callback: (quotes: any[]) => void): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = e.target?.result as string;
                const quotes = JSON.parse(json);
                callback(quotes);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };
        reader.readAsText(input.files[0]);
    }
}