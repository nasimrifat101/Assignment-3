import { Request, Response, NextFunction } from 'express';


export const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Route not found",
    })
}