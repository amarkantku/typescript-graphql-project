export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
}

export interface Query {
    users: User[];
    posts: Post[];
}

export interface Mutation {
    createUser(name: string, email: string): User;
    createPost(title: string, content: string, authorId: string): Post;
}