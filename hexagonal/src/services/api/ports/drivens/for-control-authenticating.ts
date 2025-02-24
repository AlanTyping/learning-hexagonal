// For + A cuál hexágono nos vamos a comunicar + propósito

import { AuthDetails, Permissions } from "../../app/schemas";

// En este caso, vamos a authenticar, probablemente a un usuario ya creado, porque lo contrario no tiene sentido.

// the response we have for the user is the fact of actually authenticating its account, but also manage the permissions of its account.
// so, we determine the logic interface for it, and based on that, we can communicate with, in this case the control plane.

// But, this are the contracts that the adapter will actually follow. The adapter will actually take care of the raw implementation of this aspects.


export interface ForControlAuthenticating {
    getAuthDetails(email: string, password: string): Promise<AuthDetails>;
    getPermissions(email: string, password: string): Promise<Permissions>;
}