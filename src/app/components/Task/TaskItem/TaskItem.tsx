import { TaskItemProps } from "@/app/types/task";
import { FC } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="flex justify-start items-center border-b border-gray-600 px-5 pb-1 space-x-3">
      <div className="w-20">{task.id}</div>
      <div className="w-20">{task.title}</div>
      <div className="w-20">{task.content}</div>
      <div className="w-36 text-xs">
        {new Date(task.createdAt).toLocaleString()}
      </div>
      <div
        className={`text-xs text-center text-white rounded-full px-2 py-1 w-28 ${
          task.status === "COMPLETED" ? "bg-green-500" : "bg-gray-500"
        }`}
      >
        {task.status}
      </div>
      <div className="w-24 flex items-center space-x-3">
        <EditButton id={task.id} />
        <DeleteButton id={task.id} />
      </div>
    </div>
  );
};

export default TaskItem;
