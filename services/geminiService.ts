import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with the key from environment variables
// Note: In Vite, we typically use import.meta.env.VITE_API_KEY, but adhering to the 
// existing project structure using process.env.API_KEY for the pipeline injection.
const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');

export const generateLyrics = async (songTitle: string, originalTitle: string): Promise<string> => {
  try {
    const prompt = `
      You are a professional choir master and lyrics database.
      Please provide the full lyrics for the song titled "${songTitle}" (also known as or related to "${originalTitle}").
      
      Requirements:
      1. If the song title is in Malayalam, provide the lyrics in Malayalam script.
      2. If the song title is in English, provide the lyrics in English.
      3. Format the lyrics neatly into stanzas with line breaks.
      4. Do NOT include any introductory or concluding text (like "Here are the lyrics"). Just the lyrics.
      5. Ensure correct spelling and traditional phrasing.
    `;

    // Use the 1.5-flash model which is stable and cost-effective
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text.trim() || "Could not generate lyrics. Please try again.";
  } catch (error) {
    console.error("Error generating lyrics:", error);
    throw new Error("Failed to fetch lyrics from Gemini.");
  }
};