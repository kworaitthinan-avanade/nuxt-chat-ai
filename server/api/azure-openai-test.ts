// server/api/azure-openai-test.ts

import { AzureOpenAI } from 'openai';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const endpoint = config.public.azureOpenaiUrl;
  const apiKey = config.azureOpenaiApiKey;
  const deployment = config.public.azureOpenaiModel;
  const apiVersion = '2024-04-01-preview';

  const client = new AzureOpenAI({
    endpoint,
    apiKey,
    deployment,
    apiVersion,
  });

  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Is Azure OpenAI working? Answer only Azure OpenAI connection test is Passed or Failed. And give random 4 digits number as test id' }
      ],
      max_tokens: 100,
      temperature: 0.7,
      top_p: 1,
      model: deployment,
    });

    return {
      success: true,
      result: response.choices?.[0]?.message?.content || 'No response from model.'
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
    };
  }
});
