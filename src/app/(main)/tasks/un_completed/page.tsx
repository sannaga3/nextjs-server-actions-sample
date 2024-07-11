"use client";
import TaskItemHeader from "@/app/components/Task/TaskItem/TaskItemHeader";
import { taskListAtom } from "@/store/taskStore";
import { useAtomValue } from "jotai";
import TaskItem from "../../../components/Task/TaskItem/TaskItem";

const UnCompletedTaskListPage = () => {
  const taskList = useAtomValue(taskListAtom);

  const filteredList = taskList.filter((task) => {
    return task.status === "UN_COMPLETED";
  });
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">未完了タスク</h1>
      </header>
      <TaskItemHeader />
      {filteredList.length > 0 && (
        <div className="flex flex-col">
          {filteredList.map((task) => (
            <div key={task.id} className="flex py-2">
              <TaskItem task={task} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UnCompletedTaskListPage;
