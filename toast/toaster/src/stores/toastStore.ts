import { defineStore } from 'pinia';
import type { NotificationConfig, NotificationType } from '../types';
import { NOTIFICATION_COLORS } from '../utils/colors';

export const useToastStore = defineStore('toast', {
  state: () => ({
    currentConfig: {
      type: 'success',
      title: 'Success!',
      message: 'Your changes have been saved successfully.',
      duration: 3000,
      position: 'top-right',
      backgroundColor: '#22c55e',
      textColor: '#FFFFFF',
      showIcon: true,
      showCloseButton: true,
      animation: 'slide',
    } as Omit<NotificationConfig, 'id'>, // excludes the 'id' property from NotificationConfig
  }),
  actions: {
    updateType(newType: NotificationType) {
      this.currentConfig = {
        ...this.currentConfig,
        type: newType,
        backgroundColor: NOTIFICATION_COLORS[newType], // Update background color based on the new type
      };
    }
  }
})
