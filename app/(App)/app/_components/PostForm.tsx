import React from 'react'
import { create } from '@/actions/create-post'
import { Button } from '@/components/ui/button'

function PostForm() {
    return (
        <form action={create} className='flex flex-col gap-2 max-w-[500px]'>
            <input
                className='border rounded-lg p-2'
                type="text"
                id='title'
                name='title'
                placeholder='Post Title' />
            <textarea
                className='border rounded-lg p-2'
                id='content'
                name='content'
                placeholder='Post Content'
            />
            <Button>
                Create Post
            </Button>
        </form>

    )
}

export default PostForm