class FileReader{
    constructor(fileUrl) {
        this.fileUrl = fileUrl; // URL to the file you want to read
    }

    // Async method to fetch and parse the file
    async fetchAndParseFile() {
        try {
            // Fetch the file from the URL
            const response = await fetch(this.fileUrl);

            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error(`Error fetching file: ${response.status} ${response.statusText}`);
            }

            // Read the response as text
            const fileContent = await response.text();

            // Split the content by newline to get an array of lines
            const lines = fileContent.split('\n');

            // Optionally, filter out empty lines and trim whitespace
            const items = lines
                .map(line => line.trim()) // Trim each line
                .filter(line => line !== ''); // Filter out empty lines

            // Return the array of items
            return items;
        } catch (error) {
            console.error('Failed to fetch and parse the file:', error);
            return [];
        }
    }
}