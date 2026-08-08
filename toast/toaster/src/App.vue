<script setup lang="ts">
import type { NotificationType } from './types';
import { getBgColor } from './utils/colors';
import { getIcon } from './utils/icons';

const notificationTypes: NotificationType[] = [
  'success',
  'error',
  'warning',
  'info',
];
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
            :class="['type-card']"
            :style="{ '--btn-color': getBgColor(t) }"
          >
            <!-- {active:currentConfig.type === t} -->
            <span class="type-icon" v-html="getIcon(t)"></span>
            <span>{{ t.charAt(0).toUpperCase() + t.slice(1) }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="management-area"></div>
  </div>
</template>
