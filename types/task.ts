export enum TaskStatus {
  open,
  closed,
}

export type Task = {
  name: string;
  status: TaskStatus;
  due: Date;
}
