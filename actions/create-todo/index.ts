'use server'
import { db } from "@/server/db"
import { auth } from "@clerk/nextjs"
import { InputType, ReturnType } from "./types"
import { revalidatePath } from "next/cache"
import { createSafeAction } from "@/lib/create-safe-action"
import { CreateTodo } from "./schema"

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId } = auth();

    if (!userId) {
        return {
            error: 'Unauthorized',
        }
    }

    const { todo } = data;

    let Todo;

    try {
        Todo = await db.todoItem.create({
            data: {
                title: todo,
                userId: 'myUser',
                completed: false,
            }
        })
    } catch (e) {
        return {
            error: 'Failed to create todo item',
        }
    }

    revalidatePath('/server-action');
    return { data: Todo };
}

export const createTodo = createSafeAction(CreateTodo, handler);