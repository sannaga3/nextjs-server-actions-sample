import { FC } from "react";

const TaskItemHeader: FC = () => {
  return (
    <div className="mt-8 flex items-center space-x-3">
      <div className="flex justify-start items-center border-b border-gray-600 px-5 pb-1 space-x-3">
        <div className="w-10">ID</div>
        <div className="w-20">タイトル</div>
        <div className="w-20">内容</div>
        <div className="w-36 ">作成日</div>
        <div className="w-28 px-2 py-1">ステータス</div>
        <div className="w-24 flex items-center space-x-3">
          <div>編集</div>
          <div>削除</div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemHeader;
