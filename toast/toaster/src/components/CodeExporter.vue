<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  code: string;
}>();

const copied = ref(false);

const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(props.code).then(
    () => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
      console.log('Code copied to clipboard');
    },
    (err) => {
      console.error('Could not copy text: ', err);
    },
  );
};
</script>

<template>
  <div class="card code-export">
    <h3>Code Export</h3>
    <pre class="code-block">
      <code>{{ code }}</code>
    </pre>
    <button @click="handleCopyToClipboard" class="copy-btn-v2">
      <span class="icon-clipboard">📋</span>
      {{ copied ? 'Copied!' : 'Copy to Clipboard' }}
    </button>
  </div>
</template>
