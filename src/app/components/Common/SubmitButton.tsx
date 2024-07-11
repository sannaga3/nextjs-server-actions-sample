import { SubmitButtonProps } from "@/app/types/common";
import { FC } from "react";

const SubmitButton: FC<SubmitButtonProps> = ({
  isPending,
  color = "blue",
  classProps = "",
}) => {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`rounded-md text-white bg-${color}-600 hover:bg-${color}-800 text-sm font-semibold ${classProps}`}
    >
      送信
    </button>
  );
};

export default SubmitButton;
