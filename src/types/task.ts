export enum TaskStatus {
  open,
  closed,
}

export type Task = {
  _key: string;
  name: string;
  status: TaskStatus;
  due: Date;
}

export enum TaskDelimiter {
  due = '$'
}
