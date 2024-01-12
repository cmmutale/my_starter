'use client'
import { Button } from '@/components/ui/button';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteTodo } from '@/actions/delete-todo';

const initialState = {
    message: null,
}

function DeleteButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            variant='destructive'
            size='sm'
            type='submit'
            aria-disabled={pending}>
            {pending ? 'Deleting...' : 'Delete'}
        </Button>
    )
}

function DeleteForm({ id, todo }: { id: string, todo: string }) {
    // @ts-ignore
    const [state, formAction] = useFormState(deleteTodo, initialState);

    return (
        <form
            action={formAction}
            className='flex justify-between'>
            <input type="hidden" name='id' value={id} />
            <input type="hidden" name='todo' value={todo} />
            <DeleteButton />
            <p aria-live='polite' className='sr-only' role='status'>
                {state?.message}
            </p>
        </form>
    )
}

export default DeleteForm