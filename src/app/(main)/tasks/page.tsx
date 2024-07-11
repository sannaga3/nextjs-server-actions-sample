"use client";

import { getAllTaskList } from "@/actions/task";
import TaskItem from "@/app/components/Task/TaskItem/TaskItem";
import TaskItemHeader from "@/app/components/Task/TaskItem/TaskItemHeader";
import { taskListAtom } from "@/store/taskStore";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect } from "react";

const AllTaskListPage = () => {
  const [taskList, setTaskList] = useAtom(taskListAtom);

  useEffect(() => {
    (async () => {
      const tasks = await getAllTaskList();
      setTaskList(tasks);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-center items-center">
        <h1 className="text-2xl font-bold flex items-center">タスク一覧</h1>
      </header>
      <div className="flex justify-end">
        <Link
          href="/tasks/new"
          className="text-sm font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-800"
        >
          新規作成
        </Link>
      </div>
      <TaskItemHeader />
      {taskList.length > 0 && (
        <div className="flex flex-col">
          {taskList.map((task) => (
            <div key={task.id} className="flex py-2">
              <TaskItem task={task} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTaskListPage;
