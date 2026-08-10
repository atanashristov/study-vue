<script setup lang="ts">
import type { NotificationConfig } from '../types';

defineProps<{
  currentConfig: Omit<NotificationConfig, 'id'>;
}>();
</script>

<template>
  <div class="card preview-card">
    <h3>Preview</h3>
    <div class="preview-boundary">
      <div :class="['toast-container-internal', currentConfig.position]">
        Hello
      </div>
    </div>
  </div>
</template>
