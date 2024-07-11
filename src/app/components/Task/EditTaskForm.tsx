"use client";

import { editOrCreateTask, getTask } from "@/actions/task";
import { EditTaskFormProps, Task } from "@/app/types/task";
import usePending from "@/hooks/usePending";
import { FC, useEffect, useState } from "react";
import Form from "../Common/Form";
import SubmitButton from "../Common/SubmitButton";

const EditTaskForm: FC<EditTaskFormProps> = ({ taskId }) => {
  const { isPending } = usePending();
  const numberTaskId = parseInt(taskId);
  const [task, setTask] = useState<Task | null>(null);
  const [status, setStatus] = useState("COMPLETED");

  const handleStatusChange = () => {
    if (status === "COMPLETED") setStatus("UN_COMPLETED");
    else setStatus("COMPLETED");
  };

  useEffect(() => {
    (async () => {
      const task = await getTask(numberTaskId);
      setTask(task);
      setStatus(task.status);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {task && (
        <div className="mt-10 mx-auto w-full max-w-sm">
          <Form
            handleAction={editOrCreateTask}
            modelId={numberTaskId}
            redirectTo="/tasks"
          >
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                タイトル
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="input-style"
                defaultValue={task.title}
              />
            </div>
            <div className="mt-6">
              <label htmlFor="content" className="block text-sm font-medium">
                内容
              </label>
              <input
                type="text"
                id="content"
                name="content"
                required
                className="input-style"
                defaultValue={task.content}
              />
            </div>
            <div className="mt-6 flex items-center space-x-3">
              <input
                type="checkbox"
                id="status"
                name="status"
                className="mr-2 w-4 h-4"
                checked={status === "COMPLETED" ? true : false}
                onChange={handleStatusChange}
              />
              <label htmlFor="status" className="block text-sm font-medium">
                完了
              </label>
            </div>
            <div className="flex justify-center">
              <SubmitButton
                color="orange"
                classProps="w-2/5 mt-12 py-2"
                isPending={isPending}
              />
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default EditTaskForm;
