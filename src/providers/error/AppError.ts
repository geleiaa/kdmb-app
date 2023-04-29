export class AppError extends Error {
    constructor(message: string, statusCode: number){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}