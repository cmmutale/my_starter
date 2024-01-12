'use server'
import { db } from "@/server/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

export async function create(prevState: any, formData: FormData) {
    const { userId } = auth();
    if (!userId) {
        return { message: 'please login' };
    }
    const schema = z.object({
        title: z.string().min(1),
        content: z.string().min(1),
    })
    const validateFields = schema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
    });

    if (!validateFields.success) {
        return { message: 'please give me a string' };
    }
    const { title, content } = validateFields.data;

    await db.post.create({
        data: {
            title,
            content,
            userId
        }
    });

    revalidatePath('/app');
}
