import Post from '@/app/components/Post';

interface Post {
    title: string;
    body: string;
    userId: number;
}

async function fetchData(id: number) {
    const res = await fetch(`http://localhost:3000/api/data`); // Включаем id в URL запроса
    const result = await res.json();
    return result;
}

export default async function PagePost({ params }: { params: { id: number } }) {
    const id = params.id;
    const post = await fetchData(id);

    return (
        <div className='post__block'>
            {isNaN(id) || id > 10 || id < 1 ? <div>Error: post is not found.</div> : <Post post={post[id-1]}/>}
        </div>
    );
    
}
