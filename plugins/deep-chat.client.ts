// plugins/deep-chat.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    import('deep-chat');
  }
});
