import NewTaskForm from "@/app/components/Task/NewTaskForm";

const NewTaskPage = () => {
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">新規タスク作成</h2>
      <NewTaskForm />
    </div>
  );
};

export default NewTaskPage;
