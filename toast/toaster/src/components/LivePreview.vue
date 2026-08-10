<script setup lang="ts">
import type { NotificationConfig } from '../types';
import { getIcon } from '../utils/icons';

defineProps<{
  currentConfig: Omit<NotificationConfig, 'id'>;
  activeToasts: NotificationConfig[];
}>();

const emit = defineEmits<{
  (e: 'close', id: string): void;
}>();

const removeToast = (id: string) => {
  emit('close', id);
};
</script>

<template>
  <div class="card preview-card">
    <h3>Preview</h3>
    <div class="preview-boundary">
      <div :class="['toast-container-internal', currentConfig.position]">
        <TransitionGroup :name="currentConfig.animation">
          <div
            v-for="toast in activeToasts"
            :key="toast.id"
            class="toast-item"
            :style="{
              backgroundColor: toast.backgroundColor,
              color: toast.textColor,
            }"
          >
            <div class="toast-content">
              <span
                v-if="toast.showIcon"
                v-html="getIcon(toast.type)"
                class="toast-icon"
              ></span>
              <div class="toast-text">
                <div class="toast-title">{{ toast.title }}</div>
                <div class="toast-message">{{ toast.message }}</div>
              </div>
            </div>
            <button
              v-if="toast.showCloseButton"
              @click="removeToast(toast.id)"
              class="toast-close"
            >
              x
            </button>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
