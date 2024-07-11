"use client";

import { useState } from "react";

const usePending = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  return { isPending, setIsPending };
};

export default usePending;
