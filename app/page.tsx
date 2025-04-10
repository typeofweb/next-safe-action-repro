"use client";

import { useAction } from "next-safe-action/hooks";
import { action } from "./action";

export default function Home() {
  const {result,  status, execute} = useAction(action)

  return <div>
    <h1>Safe Action</h1>
    <button onClick={() => {
      // @ts-ignore
      execute("c");
    }}>Execute</button>
    <p>Status: {status}</p>
    <pre>{JSON.stringify(result)}</pre>
  </div>
}
