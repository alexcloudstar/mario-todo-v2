export type Todo = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  done: boolean;
  userSessionId: string;
};
