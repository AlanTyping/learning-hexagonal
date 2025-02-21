import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { Api } from "./api";

// So, in this "compositionMock()" we are implementing the mocks to make it all work.

const compositionMock = () => {
    // Establecemos dos instancias para acceder a sus métodos en ApiMock.
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const dashboardApiMock = new RepoQuerierStub();
    
    const ApiMock = new Api(controlAuthenticatorStub, dashboardApiMock);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(ApiMock);

    return {
        authenticatorProxyAdapter
    };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {name: 'bananolo', email: 'asd@gmail.com'}

authenticatorProxyAdapter.login('banana@gmail.com', 'wismichu');
authenticatorProxyAdapter.register(registerMock, 'wismichu');