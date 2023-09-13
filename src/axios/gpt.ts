// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";

const BASE_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.REACT_APP_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getCorrectYN = async (
  messages: CreateChatCompletionRequestMessage[]
) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 1,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response;
};
