export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

export interface AuthRequest {
    username: string;
    password: string;
}