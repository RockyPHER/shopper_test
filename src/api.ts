const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function RequestAPI(imageInput: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([
        "Transcrypt the numbers of this photo.",
        {
            inlineData: {
                data: imageInput,
                mimeType: 'image/png'
            }
        }]
    );
    return result.response.text();
}