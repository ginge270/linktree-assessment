export class AuthenticationError extends Error {
    constructor(){
        super("Unable to Authenticate")
        this.name = "AuthenticationError";
    }
}