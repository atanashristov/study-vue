export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export type AnimationType = 'fade' | 'slide' | 'bounce';

export interface NotificationConfig {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration: number;
  position: Position;
  backgroundColor: string;
  textColor: string;
  showIcon: boolean;
  showCloseButton: boolean;
  animation: AnimationType;
}

export interface Preset {
  id: string;
  name: string;
  config: Omit<NotificationConfig, 'id'>;
  createdAt: Date; // Excludes the 'id' property from NotificationConfig
}
