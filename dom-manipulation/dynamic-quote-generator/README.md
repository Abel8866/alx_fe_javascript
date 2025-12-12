# Dynamic Quote Generator

## Overview
The Dynamic Quote Generator is a web application that allows users to generate, manage, and store quotes dynamically. It features local and session storage for quote persistence and provides functionality for importing and exporting quotes in JSON format.

## Features
- Generate random quotes
- Add new quotes
- Store quotes in local storage for persistence
- Use session storage for temporary data
- Import quotes from a JSON file
- Export quotes to a JSON file
- User-friendly interface

## Project Structure
```
dynamic-quote-generator
├── src
│   ├── index.html          # Main HTML document
│   ├── styles
│   │   └── main.css       # Styles for the application
│   ├── scripts
│   │   ├── app.ts         # Main application logic
│   │   ├── storage.ts     # Web storage management
│   │   ├── quotes.ts      # Quote management
│   │   └── importExport.ts # JSON import/export functionality
│   └── types
│       └── index.ts       # TypeScript interfaces and types
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd dynamic-quote-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Open `src/index.html` in a web browser to run the application.

## Usage Guidelines
- Click the "Generate Quote" button to display a random quote.
- Use the "Add Quote" feature to save your own quotes.
- Quotes will be saved in local storage and will persist even after refreshing the page.
- You can import quotes from a JSON file or export your quotes to a JSON file for backup.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.