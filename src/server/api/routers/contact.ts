import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const contactRouter = createTRPCRouter({
  post: publicProcedure
    .input(
      z.object({
        firstname: z.string(),
        lastname: z.string(),
        email: z.string().email(),
        message: z.string(),
      })
    )
    .mutation(
      async ({ ctx, input: { firstname, lastname, email, message } }) => {
        return ctx.prisma.contactForm.create({
          data: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            message: message,
          },
        });
      }
    ),
});
