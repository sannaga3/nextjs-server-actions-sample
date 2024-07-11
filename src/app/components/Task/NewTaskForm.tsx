"use client";

import { editOrCreateTask } from "@/actions/task";
import usePending from "@/hooks/usePending";
import { FC } from "react";
import Form from "../Common/Form";
import SubmitButton from "../Common/SubmitButton";

const NewTaskForm: FC = () => {
  const { isPending } = usePending();

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <Form handleAction={editOrCreateTask} redirectTo="/tasks">
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
          />
        </div>
        <div className="flex justify-center">
          <SubmitButton classProps="w-2/5 mt-12 py-2" isPending={isPending} />
        </div>
      </Form>
    </div>
  );
};

export default NewTaskForm;
