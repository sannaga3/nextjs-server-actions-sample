import { Task } from "@/app/types/task";
import { atom } from "jotai";

export const taskListAtom = atom<Task[]>([]);
