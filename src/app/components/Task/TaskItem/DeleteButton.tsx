"use client";

import { deleteTask, getAllTaskList } from "@/actions/task";
import { DeleteButtonProps } from "@/app/types/common";
import { taskListAtom } from "@/store/taskStore";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC } from "react";

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const router = useRouter();
  const setTaskList = useSetAtom(taskListAtom);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("本当に削除しますか？");
    if (confirmed) {
      const deletedTask = await deleteTask(id);

      if (deletedTask?.id) {
        const updatedTasks = await getAllTaskList();
        setTaskList(updatedTasks);
        router.push("/tasks");
      }
    }
  };

  return (
    <button
      type="submit"
      className="text-white bg-red-600 hover:bg-red-800 rounded-full text-xs cursor-pointer px-2 pb-0.5 pt-1"
    >
      <div onClick={() => handleDelete(id)}>削除</div>
    </button>
  );
};

export default DeleteButton;
