export type TodoType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  done: boolean;
  userSessionId: string;
};

export type ClassesType = {
  classes: string;
};
