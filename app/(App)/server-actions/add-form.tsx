'use client'
import { Button } from '@/components/ui/button';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
// import { createTodo } from '@/actions/create-todo';
import { useRef } from 'react';
import { createTodo } from '@/actions/create-todo';
import { useAction } from '@/hooks/use-action';

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
            Add
        </Button>
    )
}

function AddForm() {
    // @ts-ignore
    // const [state, formAction] = useFormState(createTodo, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const {execute, fieldErrors} = useAction(createTodo, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error);
        }
    })
    const onSubmit = (formData: FormData) => {
        const todo = formData.get('todo') as string;
        formRef.current?.reset();
        execute({todo});
    }

    return (
        <div
            className='bg-transparent'>
            <form
                ref={formRef}
                action={
                    onSubmit
                }
                className='flex bg-white py-1 px-2 rounded-md items-center shadow-sm'>
                {/* <label htmlFor="todo">Enter task</label> */}
                <input
                    type="text"
                    id="todo"
                    name='todo'
                    placeholder='Enter task'
                    className='bg-transparent py-1 px-2 rounded-md outline-none'
                    />
                <SubmitButton />
                <p aria-live='polite' className='' role='status'>
                    {fieldErrors?.todo}
                </p>
            </form>
        </div>
    )
}

export default AddForm