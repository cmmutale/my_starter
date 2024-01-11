'use server'
import { db } from "@/server/db"
import { revalidatePath } from "next/cache";

export async function deletePost(id: string) {
    await db.post.delete({
        where: {
            id
        }
    });

    revalidatePath('/app');
}