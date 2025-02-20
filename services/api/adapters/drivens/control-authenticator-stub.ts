// nomenclatura: (de dónde viene) + (acción) + stub

import { AuthDetails, ForControlAuthenticating, Permissions } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
    token: 'askddk3k4k3kksdasd',
    refreshToken: 'askddk3k4k3kksdasd',
}

const permissionsMock: Permissions = {
    admin: false,
    user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(_email:string, _password: string): Promise<AuthDetails>{
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(_email:string, _password: string): Promise<Permissions>{
        return Promise.resolve(permissionsMock);
    }
}