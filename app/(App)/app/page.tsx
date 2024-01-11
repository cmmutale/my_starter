import { Button } from '@/components/ui/button'
import React from 'react'
import { db } from '@/server/db';
import Post from './_components/Post';
import PostForm from './_components/PostForm';

async function App() {
    const posts = await db.post.findMany();

    return (
        <div className='py-6'>
            <div>
                {
                    posts.map(post => (
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content} />
                    ))
                }
            </div>
            <PostForm />
        </div>
    )
}

export default App