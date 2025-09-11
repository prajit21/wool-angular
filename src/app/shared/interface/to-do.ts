export interface Task {
  id?: number;
  text: string;
  completed: boolean;
  priority: string;
  badgeClass: string;
  textColor?: string;
  Date: string | Date;
}
