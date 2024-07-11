"use server";

import { FormState } from "@/app/types/common";
import { prisma } from "@/lib/prisma";

export const getAllTaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { id: "desc" },
  });
  return tasks;
};

export const getTask = async (taskId: number) => {
  return await prisma.task.findUnique({
    where: { id: taskId },
  });
};

export const editOrCreateTask = async (
  state: FormState,
  formData: FormData,
  taskId?: number
) => {
  const isUpdate = taskId && taskId > 0;

  try {
    let data = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      status: formData.get("status") ? "COMPLETED" : "UN_COMPLETED",
    };
    if (validTitle(data.title)) throw new Error();

    isUpdate
      ? await prisma.task.update({
          where: { id: taskId },
          data: data,
        })
      : await prisma.task.create({ data: data });

    state.error = "";
  } catch (e) {
    state.error = "タイトルは２文字以上入力してください";
  } finally {
    return state;
  }
};

const validTitle = (title: string) => {
  if (title.length < 2) return true;
  return false;
};

export const deleteTask = async (id: number) => {
  const deletedTask = await prisma.task.delete({
    where: { id: id },
  });

  return deletedTask;
};
