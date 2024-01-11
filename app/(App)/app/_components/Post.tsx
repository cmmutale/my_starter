import { Button } from '@/components/ui/button';
import React from 'react'
import { deletePost } from '@/actions/delete-board';

interface PostProps {
    title: string;
    content: string;
    id: string;
}

function Post({
    title,
    content,
    id
}: PostProps) {
    const deletePostWithId = deletePost.bind(null, id);
    return (
        <form
            action={deletePostWithId}
            className='flex flex-col items-start gap-2 my-4 shadow-md'
        >
            <h1>{title}</h1>
            <p>{content}</p>
            <Button
                variant='destructive'
                size='sm'
            >Delete</Button>
        </form>

    )
}

export default Post