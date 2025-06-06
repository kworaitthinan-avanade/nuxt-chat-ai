import { AzureOpenAI } from 'openai';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const endpoint = config.public.azureOpenaiUrl;
  const apiKey = config.azureOpenaiApiKey;
  const deployment = config.public.azureOpenaiModel;
  const apiVersion = '2024-04-01-preview';

  // Validate incoming messages
  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return {
      text: "I didn't receive any messages to process. Can you try again?"
    };
  }

  // Format messages for Azure OpenAI
  const formattedMessages = body.messages.map(msg => ({
    role: msg.role || 'user',
    content: msg.content || ''
  }));

  // Add system message if missing
  if (!formattedMessages.some(msg => msg.role === 'system')) {
    formattedMessages.unshift({
      role: 'system',
      content: 'You are a helpful assistant.'
    });
  }

  const client = new AzureOpenAI({
    endpoint,
    apiKey,
    deployment,
    apiVersion,
  });

  try {
    const response = await client.chat.completions.create({
      messages: formattedMessages,
      max_tokens: 800,
      temperature: 0.7,
      top_p: 1,
      model: deployment,
    });

    const content = response.choices?.[0]?.message?.content;
    console.log('Response from Azure OpenAI:', content);

    if (!content) {
      return { text: "I'm sorry, I couldn't generate a response. Please try again." };
    }
    return { text: content };
  } catch (err: any) {
    return {
      text: `Sorry, I encountered an error: ${err.message || 'Unknown error'}. Please try again later.`
    };
  }
});
