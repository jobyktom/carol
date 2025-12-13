import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Could not generate lyrics. Please try again.";
  } catch (error) {
    console.error("Error generating lyrics:", error);
    throw new Error("Failed to fetch lyrics from Gemini.");
  }
};