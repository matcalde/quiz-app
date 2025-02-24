import { OpenAI } from 'langchain/llms/openai';

const generateQuiz = async (prompt) => {
  const model = new OpenAI({ temperature: 0.7 });
  const response = await model.call(prompt);
  console.log(response);
  return response;
};

export default generateQuiz;