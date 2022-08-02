export class TitleTooLongError extends Error {
    constructor(){
        super("Title is too long")
        this.name = "TitleTooLongError";
    }
}