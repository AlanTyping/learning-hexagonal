import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { ForAuthenticating } from "../ports/drivers";
import { AuthenticatedUser, User } from "./schemas";

export class Api implements ForAuthenticating {
    constructor (
        private readonly controlAuthenticator: ForControlAuthenticating,
        private readonly repoQuerying: ForRepoQuerying,
    ) {}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);
        const permissions = await this.controlAuthenticator.getPermissions(email, password);
        const user = await this.repoQuerying.getUser(email);

        const result = {
            ...user,
            ...permissions,
            ...authDetails
        }

        console.log("LOGIN: " + result);

        return result
    }

    async register(user: User, password: string): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerying.createUser(user, password);
        const authDetails = await this.controlAuthenticator.getAuthDetails(user.email, password);
        const permissions = await this.controlAuthenticator.getPermissions(user.email, password);
        
        const result = {
            ...newUser,
            ...permissions,
            ...authDetails
        }

        console.log("REGISTER: " + result);

        return result
    }
}