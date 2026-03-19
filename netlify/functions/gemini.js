const DEFAULT_MODEL = 'gemini-2.5-flash';

function buildResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return buildResponse(405, { error: 'Method not allowed.' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return buildResponse(500, {
      error: 'Missing Gemini API key. Set GEMINI_API_KEY in Netlify environment variables.',
    });
  }

  try {
    const { prompt, systemInstruction } = JSON.parse(event.body || '{}');

    if (!prompt || !systemInstruction) {
      return buildResponse(400, { error: 'Missing prompt or system instruction.' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${DEFAULT_MODEL}:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      const apiError = result.error?.message || `Gemini request failed with status ${response.status}.`;
      return buildResponse(response.status, { error: apiError });
    }

    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return buildResponse(502, { error: 'Gemini returned an unexpected response format.' });
    }

    return buildResponse(200, { text });
  } catch (error) {
    console.error('Gemini function error:', error);
    return buildResponse(500, { error: 'Internal server error while generating draft.' });
  }
}
