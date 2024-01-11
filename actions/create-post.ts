'use server'
import { db } from "@/server/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}

const CreatePostSchema = z.object({
    title: z.string().min(3, {
        message: 'Title must be at least 3 characters'
    }),
    content: z.string()
});

export async function create(formData: FormData) {
    const { title, content } = CreatePostSchema.parse({
        title: formData.get('title'),
        content: formData.get('content'),
    });

    await db.post.create({
        data: {
            title,
            content,
            userId: 'testklsailnilfasdf'
        }
    });

    revalidatePath('/app');
}
