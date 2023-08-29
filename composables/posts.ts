export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const usePosts = async () => {
    const { pending, data: posts } = await useLazyFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const getSinglePost = async (id : Ref<number>) => {
        const url='https://jsonplaceholder.typicode.com/posts/'+id.value;
        const { data: post } = await useLazyFetch<Post>(url);
        return post
    }
    return{ posts,pending,getSinglePost }
}