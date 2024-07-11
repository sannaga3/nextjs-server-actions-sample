"use client";

import EditTaskForm from "@/app/components/Task/EditTaskForm";
import { EditPageProps } from "@/app/types/task";
import { FC } from "react";

const EditTaskPage: FC<EditPageProps> = ({ params }) => {
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">タスク編集</h2>
      <EditTaskForm taskId={params.id} />
    </div>
  );
};

export default EditTaskPage;
