const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function callGeminiAPI(prompt, systemInstruction, retries = 3, delay = 800) {
  const payload = { prompt, systemInstruction };

  for (let i = 0; i < retries; i += 1) {
    try {
      const response = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      if (result.text) {
        return result.text;
      }

      throw new Error('Invalid response structure from API.');
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);

      if (i < retries - 1) {
        await sleep(delay * Math.pow(2, i));
      } else {
        return "Sorry, I couldn't generate a response right now.";
      }
    }
  }

  return "Sorry, I couldn't generate a response right now.";
}
