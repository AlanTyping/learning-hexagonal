// nomenclatura: (de dónde viene) + (acción) + stub

// Un stub en programación es una implementación mínima y generalmente "falsa" de una función, método o módulo que se usa para simular el comportamiento de una dependencia real. 
// Los stubs se utilizan principalmente en pruebas unitarias y en el desarrollo incremental cuando una parte del sistema aún no está lista.

import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

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