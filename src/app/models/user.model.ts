import { Role } from "./role.model";

export interface User {
    id: number;
    name: String;
    username: String;
    email: String,
    password: String;
    role: Role;
}

export interface LoginUser {
    name: String,
    email: String
}
