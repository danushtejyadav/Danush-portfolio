// --- (1.1) GEMINI API UTILITIES ---

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;// WARNING: Keep this secure!
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function callGeminiAPI(prompt, systemInstruction, retries = 5, delay = 1000) {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    },
  };

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const candidate = result.candidates?.[0];

      if (candidate && candidate.content?.parts?.[0]?.text) {
        return candidate.content.parts[0].text;
      } else {
        throw new Error("Invalid response structure from API.");
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        await sleep(delay * Math.pow(2, i));
      } else {
        return "Sorry, I couldn't generate a response right now.";
      }
    }
  }
}