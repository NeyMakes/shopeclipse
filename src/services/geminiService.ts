
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a named parameter for apiKey using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAiRecommendation = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The user is looking for Discord services. Suggest one or two of our categories: "High-End Discord Servers", "Custom Bots", or "Emoji Expansion Packs" based on their request. Keep it short and cool. User says: "${userInput}"`,
      config: {
        maxOutputTokens: 150,
        temperature: 0.7,
      },
    });
    // Accessing .text as a property directly as per the latest guidelines.
    return response.text || "I recommend checking out our custom server templates for a start!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Feel free to browse our full shop!";
  }
};
