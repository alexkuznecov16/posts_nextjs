import Link from 'next/link';
import { FC } from 'react';

interface PostProps {
    post: {
        id: number;
        authorName: string;
        title: string;
        userId: number;
        text: string;
    },
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <>
            <Link href={'/posts/'}>Back</Link>
            <div className='post'>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <strong>Author: {post.authorName}</strong>
            </div>
        </>
    );
};

export default Post;
