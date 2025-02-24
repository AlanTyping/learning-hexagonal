import { describe, expect, it } from 'vitest';
import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/drivens';
import { Api } from './api';
import { AuthenticatedUser } from './schemas';


describe("api", () => {
       const controlAuthenticatorStub = new ControlAuthenticatorStub();
        const dashboardApiMock = new RepoQuerierStub();
        const ApiMock = new Api(controlAuthenticatorStub, dashboardApiMock);


        const expectedResult: AuthenticatedUser = {
            id: '1',
            name: 'John Doe',
            email: 'john@gmail.com',
            token: "token",
            refreshToken: "refreshToken",
            permissions: {
                admin: true,
                user: true,
            }
        }

        it.concurrent("should login", async () => {
            // GIVEN
            const mockedParams = {
                email: 'banana@gmail.com', 
                password: 'wismichu'
            }
            
            // WHEN 
            const result = await ApiMock.login(mockedParams.email, mockedParams.password);

            expect(result).toEqual(expectedResult);
        })
},)