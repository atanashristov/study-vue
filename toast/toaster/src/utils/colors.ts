import type { NotificationType } from '../types/index';

export const NOTIFICATION_COLORS: Record<NotificationType, string> = {
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
};

export const getBgColor = (type: NotificationType): string => {
  return NOTIFICATION_COLORS[type];
};
