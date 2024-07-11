export type Task = {
  id: number;
  title: string;
  content: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type EditPageProps = {
  params: { id: string };
};

export type TaskItemProps = {
  task: Task;
};

export type EditTaskFormProps = {
  taskId: string;
};
