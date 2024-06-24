// README.ts

/**
 * This is an example TypeScript file created based on the name of the file `README.md`.
 * It includes a simple function to demonstrate basic TypeScript functionality.
 */

// Function to greet a user
function greetUser(name: string): string {
    return `Hello, ${name}! Welcome to the TypeScript example.`;
}

// Example usage
const userName: string = "Alice";
console.log(greetUser(userName));