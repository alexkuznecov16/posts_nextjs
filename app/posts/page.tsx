import Posts from '@/app/components/Posts'

async function fetchData() {
    const res = await fetch('http://localhost:3000/api/data');
    const result = await res.json();
    return result;
}

export default async function PagePosts() {
    const posts = await fetchData();

    return (
        <>
            <h1 className='page__title'>Posts page</h1>
            <div className='posts__block'>
              <Posts posts={posts} />
            </div>
        </>
    );
}
