<!-- pages/index.vue -->

<template>
  <div class="flex justify-center">
    <client-only>

      <deep-chat
        style="background-color: #f7f7f7; border-radius: 8px; width: 1000px; height: 600px;"
        
        directConnection='{
          "azure": {
            "key": "3Rx9V2biWWjXNc7nsKMg3gIXAlZunXErROutBXfZMC0uCCutY41jJQQJ99BFACHYHv6XJ3w3AAAAACOG0g0l",
            "openAI": {
              "urlDetails": {
                "endpoint": "https://ava-wora-aif-01.cognitiveservices.azure.com/",
                "version": "2024-12-01-preview",
                "deploymentId": "gpt-4o"
              },
              "chat": true
            }
          }
        }'
      ></deep-chat>

    </client-only>
  </div>
</template>