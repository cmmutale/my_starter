'use client'
import { useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom'
import { createTodo } from '@/actions/create-todo';
import { Button } from '@/components/ui/button';

const initialState = {
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            variant='outline'
            type='submit'
            aria-disabled={pending}
            className='shadow-sm hover:shadow-none'>
            {pending ? 'Adding...' : 'Add'}
        </Button>
    )
}

function AddForm() {
    // @ts-ignore
    const [state, formAction] = useFormState(createTodo, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (formData: FormData) => {
        formRef.current?.reset();
        createTodo(initialState, formData)
        // formAction();
    }

    return (
        <div
            className='bg-transparent'>
            <form
                ref={formRef}
                action={onSubmit}
                className='flex bg-white p-1 rounded-md items-center shadow-sm'>
                {/* <label htmlFor="todo">Enter task</label> */}
                <input
                    type="text"
                    id="todo"
                    name='todo'
                    placeholder='Enter task'
                    className='bg-transparent py-1 px-2 rounded-md outline-none'
                />
                <SubmitButton />
                <p aria-live='polite' className='sr-only' role='status'>
                    {state.message}
                </p>
            </form>
        </div>
    )
}

export default AddForm