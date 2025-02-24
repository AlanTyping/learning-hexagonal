import { Permissions } from "./auth";

export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
    permissions: Permissions;
}

// usamos "type" para emplear los Helpers de typescript
export type User = Pick<AuthenticatedUser, 'email' | 'name'>; 
