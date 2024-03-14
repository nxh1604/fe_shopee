import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

async function translateToVietnamese(text: string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `Can you translate this to vietnamese '${text}'` }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
}

export default translateToVietnamese;
