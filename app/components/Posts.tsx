import Link from 'next/link';
import { FC } from 'react';

interface Post {
    title: string;
    body: string;
    userId: number;
}

interface PostsProps {
    posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
    return (
        <>
            {posts.map((item: any) => (
                <div id={item.id} key={item.id} className='post'>
                    <strong>Post title: {item.title}</strong>
                    <p>{item.text}</p>
                    <span>Author: {item.authorName}</span>
                    <Link href={`posts/${item.id}`}>More info</Link>
                </div>
            ))}
        </>
    );
};

export default Posts;
