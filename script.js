function firstNonRepeatedChar(str) {
 // Write your code here
	// Create a map to store the frequency of each character
    const charCount = new Map();

    // First pass: Count the frequency of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Second pass: Find the first character with a frequency of 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
