import { FormProps, FormState } from "@/app/types/common";
import usePending from "@/hooks/usePending";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const Form: FC<FormProps> = ({
  children,
  handleAction,
  modelId,
  redirectTo,
  formClassProps = "",
}) => {
  const router = useRouter();
  const initialState: FormState = { error: "" };
  const [state, setState] = useState<FormState>(initialState);
  const { setIsPending } = usePending();

  const formAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    const newState = await handleAction(state, formData, modelId);
    setState(newState);
    setIsPending(false);

    if (newState.error === "" && redirectTo) router.push(redirectTo);
  };

  return (
    <>
      {state.error && (
        <p className="my-5 text-red-500 text-sm">{state.error}</p>
      )}
      <form onSubmit={formAction} className={formClassProps}>
        {children}
      </form>
    </>
  );
};

export default Form;

// useActionStateフックが使える場合

// export const Form: FC<FormProps> = ({
//   children,
//   handleAction,
//   formClassProps = "",
//   submitButtonLocateClassProps = "",
//   submitButtonClassProps = "",
// }) => {
//   const initialState: FormState = { error: "" };
//   const [state, formAction, isPending] = useActionState(
//     handleAction,
//     initialState
//   );

//   return (
//     <>
//       {state.error && (
//         <p className="mt-5 text-red-500 text-sm">{state.error}</p>
//       )}
//       <form action={formAction} className={formClassProps}>
//         {children}
//         <div className={submitButtonLocateClassProps}>
//           <SubmitButton classProps={submitButtonClassProps} isPending={isPending} />
//         </div>
//       </form>
//     </>
//   );
// };
