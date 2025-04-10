import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

const schema = z.union([
  z.literal("a"),
  z.literal("b"),
]);

export const action = createSafeActionClient()
  .schema(schema)
  .action(async () => {
    return "All Good!";
  })
