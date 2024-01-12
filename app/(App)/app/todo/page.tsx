import React from 'react'
import { db } from '@/server/db'
import AddForm from './add-form'
import DeleteForm from './delete-form'

async function ServerActions() {
    let todos = await db.todoItem.findMany()
    // console.log(todos)
    return (
        <div className='w-full h-full flex justify-center pt-6'>
            <div className='wrapper'>
                <div
                    className='bg-accent p-2 rounded-lg'>
                    <AddForm />
                    <div
                        className='TodoList pt-6 bg-accent'>
                        {
                            todos.map((todo) =>
                                <div
                                    key={todo.id}
                                    className='flex justify-between items-center py-2 
                                    hover:shadow-md rounded-md px-3 hover:-translate-y-1
                                    transition-all duration-300'>
                                    <p>{todo.title}</p>
                                    <DeleteForm id={todo.id} todo={todo.title} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServerActions