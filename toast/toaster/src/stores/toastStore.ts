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
    activeToasts: [] as NotificationConfig[], // Array to hold active notifications
  }),
  actions: {
    updateType(newType: NotificationType) {
      this.currentConfig = {
        ...this.currentConfig,
        type: newType,
        backgroundColor: NOTIFICATION_COLORS[newType], // Update background color based on the new type
      };
    },
    setPersistence(isPersistent: boolean) {
      this.currentConfig.duration = isPersistent ? 0 : 3000; // Set duration to 0 for persistent notifications
    },
    showNotification() {
      const newToast: NotificationConfig = {
        ...this.currentConfig,
        id: Date.now().toString(), // Generate a unique ID based on the current timestamp
      };
      this.activeToasts.push(newToast); // Add the new notification to the activeToasts array
      if (this.currentConfig.duration > 0) {
        setTimeout(() => {
          this.removeToast(newToast.id); // Automatically remove the notification after the specified duration
        }, this.currentConfig.duration);
      }
    },
    removeToast(toastId: string) {
      this.activeToasts = this.activeToasts.filter(toast => toast.id !== toastId); // Remove the notification with the specified ID
    },
  },
});
