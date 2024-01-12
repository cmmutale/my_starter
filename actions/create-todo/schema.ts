import { z } from 'zod'

export const CreateTodo = z.object({
    todo: z.string({
        required_error: 'Todo is required',
        invalid_type_error: 'Todo must be a string',
    }).min(1, {
        message: 'Please type in something',
    }),
})