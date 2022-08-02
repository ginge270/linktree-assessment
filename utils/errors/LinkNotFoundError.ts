export class LinknotFoundError extends Error {
    constructor(){
        super("Link is not available")
        this.name = "LinkNotFoundError";
    }
}