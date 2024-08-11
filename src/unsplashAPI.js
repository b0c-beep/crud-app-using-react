
export async function getImage(searchQuery){
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    if (!accessKey) {
        console.error("Unsplash Access Key is missing. Please set REACT_APP_UNSPLASH_ACCESS_KEY in your .env file.");
        return null;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`);
        const data = await response.json();

        // Check if the API returned results
        if (data && data.results && data.results.length > 0) {
            console.log("succesfully fetched image from Unsplash");
            return data.results[0].urls.regular; // Return the first image's regular URL
        } else {
            console.error("No images found for the given search query.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching image from Unsplash:", error);
        return null;
    }
}