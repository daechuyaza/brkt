import { Nullable } from "../../../../common/utils/TypeUtils";

export enum UserRole {
    ADMIN,
    USER
}

export interface User {
    id: number,
    nickname: string,
    email: string,
    password: string,
    introduction: string,
    profileImage: Nullable<string>,
    role: UserRole,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Nullable<Date>,
}
