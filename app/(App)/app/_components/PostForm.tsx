'use client'
import React from 'react'
import { create } from '@/actions/create-post'
import { Button } from '@/components/ui/button'
import { useFormStatus, useFormState } from 'react-dom'
import { useRef } from 'react'

const initialState = {
    message: null
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type='submit'
            aria-disabled={pending}>
            {pending ? 'Creating...' : 'Create Post'}
        </Button>
    )
}
function PostForm() {
    // @ts-ignore
    const [state, formAction] = useFormState(create, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const onSubmit = (formData: FormData) => {
        formRef.current?.reset();
        create(initialState, formData)
        // formAction();
    }
    return (
        <form
            ref={formRef}
            action={onSubmit}
            className='flex flex-col gap-2 max-w-[500px]'>
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
            <SubmitButton />
        </form>

    )
}

export default PostForm