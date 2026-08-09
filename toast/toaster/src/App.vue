<script setup lang="ts">
import type { NotificationType } from './types';
import { getBgColor } from './utils/colors';
import { getIcon } from './utils/icons';
import { useToastStore } from './stores/toastStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { getPositionLabel } from './utils/stringUtils';

const store = useToastStore();
const { currentConfig } = storeToRefs(store);
const { updateType, setPersistence } = store;

const isPersistent = ref(false);

const notificationTypes: NotificationType[] = [
  'success',
  'error',
  'warning',
  'info',
];

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const;
</script>

<template>
  <div class="builder-container">
    <div class="panel card">
      <h2>Configuration</h2>
      <div class="field">
        <label for="">Type</label>
        <div class="type-grid">
          <button
            v-for="t in notificationTypes"
            :key="t"
            :class="['type-card', { active: currentConfig.type === t }]"
            :style="{ '--btn-color': getBgColor(t) }"
            @click="updateType(t as NotificationType)"
          >
            <span class="type-icon" v-html="getIcon(t)"></span>
            <span>{{ t.charAt(0).toUpperCase() + t.slice(1) }}</span>
          </button>
        </div>
      </div>
      <div class="input-group">
        <label class="input-label" for="title">Title</label>
        <input
          id="title"
          type="text"
          class="custom-input"
          placeholder="Enter title..."
          v-model="currentConfig.title"
        />
      </div>
      <div class="input-group">
        <label class="input-label" for="message">Message</label>
        <textarea
          id="message"
          type="text"
          class="custom-textarea"
          placeholder="Enter message..."
          rows="3"
          v-model="currentConfig.message"
        />
      </div>
      <div class="input-group">
        <div class="duration-header">
          <label class="input-label" for="duration">Duration</label>
          <span class="duration-value"
            >{{ currentConfig.duration / 1000 }}s</span
          >
        </div>
        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          class="custom-slider"
          v-model="currentConfig.duration"
          :disabled="isPersistent"
          :style="{ '--slider-color': getBgColor(currentConfig.type) }"
        />
        <label class="checkbox-container">
          <input
            type="checkbox"
            v-model="isPersistent"
            @change="setPersistence(isPersistent)"
          />
          <span class="checkbox-label">Persistent (no auto-dismiss)</span>
        </label>
      </div>
      <div class="input-group">
        <label class="input-label">Position</label>
        <div class="position-grid">
          <button
            v-for="position in positions"
            :key="position"
            type="button"
            @click="currentConfig.position = position"
            :class="['pos-card', { active: currentConfig.position === position }]"
          >{{ getPositionLabel(position) }}</button>
        </div>
      </div>
    </div>
    {{ currentConfig }}
    <div class="management-area"></div>
  </div>
</template>
