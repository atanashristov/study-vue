<script setup lang="ts">
import type { AnimationType, NotificationType } from './types';
import { getBgColor } from './utils/colors';
import { getIcon } from './utils/icons';
import { useToastStore } from './stores/toastStore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { getPositionLabel, formatConfigToCode } from './utils/stringUtils';
import LivePreview from './components/LivePreview.vue';
import CodeExporter from './components/CodeExporter.vue';

const store = useToastStore();
const { currentConfig, activeToasts, presets } = storeToRefs(store);
const {
  updateType,
  setPersistence,
  showNotification,
  removeToast,
  savePreset,
  deletePreset,
  applyPreset,
} = store;

const isPersistent = ref(false);
const presetNameInput = ref('');

const generatedCode = computed(() => formatConfigToCode(currentConfig.value));

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

const animations: AnimationType[] = ['fade', 'slide', 'bounce'];

const handleSavePreset = () => {
  const presetName = presetNameInput.value.trim();
  if (!presetName) {
    return;
  }
  savePreset(presetName);
  presetNameInput.value = '';
};
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
            :class="[
              'pos-card',
              { active: currentConfig.position === position },
            ]"
          >
            {{ getPositionLabel(position) }}
          </button>
        </div>
      </div>
      <div class="input-group">
        <div class="section-title">Style</div>
        <div class="style-grid">
          <div class="color-field">
            <label>Background</label>
            <div class="color-input-wrapper">
              <input
                type="color"
                v-model="currentConfig.backgroundColor"
                class="color-picker"
              />
              <input
                type="text"
                v-model="currentConfig.backgroundColor"
                class="color-text"
              />
            </div>
          </div>
          <div class="color-field">
            <label>Text</label>
            <div class="color-input-wrapper">
              <input
                type="color"
                v-model="currentConfig.textColor"
                class="color-picker"
              />
              <input
                type="text"
                v-model="currentConfig.textColor"
                class="color-text"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="input-group">
        <div class="section-title">Options</div>
        <div class="options-flex">
          <label class="checkbox-wrapper">
            <input type="checkbox" v-model="currentConfig.showIcon" />
            <span>Show Icon</span>
          </label>
          <label class="checkbox-wrapper">
            <input type="checkbox" v-model="currentConfig.showCloseButton" />
            <span>Show Close Button</span>
          </label>
        </div>
      </div>
      <div class="input-group">
        <div class="section-title">Animation</div>
        <div class="animation-grid">
          <button
            v-for="anim in animations"
            :key="anim"
            :class="['anim-btn', { active: currentConfig.animation === anim }]"
            @click="currentConfig.animation = anim"
          >
            {{ anim.charAt(0).toUpperCase() + anim.slice(1) }}
          </button>
        </div>
      </div>
    </div>
    <div class="management-area">
      <div class="panel">
        <LivePreview
          :active-toasts="activeToasts"
          :currentConfig="currentConfig"
          @close="removeToast"
        />
        <button class="main-trigger-button" @click="showNotification">
          Show Notification
        </button>
        <div class="card preset-card">
          <h3>Saved Presets</h3>
          <div class="presets-list">
            <div
              v-for="p in presets"
              :key="p.id"
              class="preset-item"
              @click="applyPreset(p.config)"
            >
              <div
                class="preset-info"
                @click="Object.assign(currentConfig, p.config)"
              >
                <span
                  class="preset-dot"
                  :style="{ background: p.config.backgroundColor }"
                ></span>
                <span class="preset-name">{{ p.name }}</span>
              </div>
              <button class="btn-delete" @click="deletePreset(p.id)">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div v-if="presets.length === 0" class="empty-list">
              No Presets yet
            </div>
          </div>
          <div class="preset-input-group">
            <input
              type="text"
              placeholder="Preset name..."
              class="preset-field"
              v-model="presetNameInput"
              @keyuop.enter="handleSavePreset"
            />
            <button class="btn-save" @click="handleSavePreset">Save</button>
          </div>
        </div>

        <CodeExporter :code="generatedCode" />
      </div>
    </div>
  </div>
</template>
