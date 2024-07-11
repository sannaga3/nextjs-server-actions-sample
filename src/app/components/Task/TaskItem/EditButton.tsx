import { EditButtonProps } from "@/app/types/common";
import Link from "next/link";
import { FC } from "react";

const EditButton: FC<EditButtonProps> = ({ id }) => {
  return (
    <Link
      href={`/tasks/${id}/edit`}
      className="text-white bg-orange-600 hover:bg-orange-800 rounded-full text-xs cursor-pointer px-2 pb-0.5 pt-1"
    >
      編集
    </Link>
  );
};

export default EditButton;
