'use server'
import { revalidatePath } from "next/cache"
import { db } from "@/server/db"
import { z } from 'zod'

export async function deleteTodo(prevState: any, formData: FormData) {
    const schema = z.object({
        todo: z.string().nonempty(),
    });
    const data = schema.parse({
        todo: formData.get('id'),
    });

    try {
        await db.todoItem.delete({
            where: {
                id: data.todo,
            }
        });
        revalidatePath('/server-action');
        return { message: 'item deleted' };
    } catch (e) {
        return { message: 'failed to delete item' };
    }
}