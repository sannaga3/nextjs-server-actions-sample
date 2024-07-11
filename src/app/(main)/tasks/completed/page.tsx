"use client";

import TaskItem from "@/app/components/Task/TaskItem/TaskItem";
import TaskItemHeader from "@/app/components/Task/TaskItem/TaskItemHeader";
import { taskListAtom } from "@/store/taskStore";
import { useAtomValue } from "jotai";

const CompletedTaskListPage = () => {
  const taskList = useAtomValue(taskListAtom);

  const filteredList = taskList.filter((task) => {
    return task.status === "COMPLETED";
  });

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">完了タスク</h1>
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

export default CompletedTaskListPage;
