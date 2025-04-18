export class DatabaseException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseException';
        Object.setPrototypeOf(this, DatabaseException.prototype);
    }
}