import { ForRepoQuerying } from "../../ports/drivens";
import { User as RepoUser } from "../../../repository/app/schemas";
import type { AuthenticatedUser, User } from "../../app/schemas";

// Venimos a implementar el contrato establecido en el drive port.
// export interface ForRepoQuerying {
//     getUser(email: string): Promise<RepoUser>,
//     createUser(user: User, password: string): Promise<RepoUser>
// }

// Implementamos el contrato getUser y createUSer

// const permissionsMock: Permissions = {
//     admin: false,
//     user: true
// }

const repoUserMock: RepoUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@gmail.com',
}

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(email: string): Promise<RepoUser> {
        return Promise.resolve(repoUserMock);
    }

    createUser(user: User, password: string): Promise<RepoUser> {
        return Promise.resolve(repoUserMock);
    }
}