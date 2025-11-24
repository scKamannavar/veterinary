import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

export const initializeChat = () => {
  try {
    // Initialize GoogleGenAI with the API key directly from process.env
    // The API key must be obtained exclusively from process.env.API_KEY
    if (!ai && process.env.API_KEY) {
       ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else if (!ai) {
      console.warn("API_KEY not found in process.env");
      return;
    }

    if (!chatSession && ai) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: `You are "Dr. Paw's Assistant", a helpful virtual assistant for a Veterinary Clinic.
          
          Key Information to know:
          - Animals can get sick just like humans.
          - It is crucial to take pets to the Veterinarian at least once a year for a check-up.
          - You can answer general questions about pet care (nutrition, exercise, common symptoms).
          - You CANNOT provide specific medical diagnoses. If a user describes severe symptoms, urge them to book an appointment immediately.
          - Our clinic hours are Mon-Fri 8am-6pm, Sat 9am-2pm.
          - We are located at 123 Puppy Lane, Barktown.
          
          Keep answers concise, warm, and professional. Use emojis occasionally to be friendly 🐾.`,
        },
      });
    }
  } catch (error) {
    console.error("Failed to initialize chat session:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Ensure initialization happens before sending
    initializeChat();

    if (!chatSession) {
      // If still null, try one more time or fail gracefully
      return "I'm having a little trouble connecting to my brain right now. Please call us directly at (555) 123-4567!";
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({
      message: message
    });

    return result.text || "I'm not sure how to answer that, but I'd love to help you schedule a visit.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the server. Please try asking again in a moment!";
  }
};