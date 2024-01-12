'use server'
import { revalidatePath } from "next/cache"
import { db } from "@/server/db"
import { z } from 'zod'
import { redirect } from "next/navigation";

export async function createTodo(prevState: any, formData: FormData) {
    const schema = z.object({
        todo: z.string().min(1),
    });
    const validateFields = schema.safeParse({
        todo: formData.get('todo'),
    });

    if (!validateFields.success) {
        return { message: 'please give me a string' };
    }

    const { todo } = validateFields.data;

    try {
        await db.todoItem.create({
            data: {
                title: todo,
                userId: 'myUser',
                completed: false,
            }
        });
        revalidatePath('/server-action');
        // redirect('/server-action');
        return { message: 'item created' };
    } catch (e) {
        return { message: 'failed to create item' };
    }
}