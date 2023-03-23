import { NextFunction, Request, Response} from 'express';
import bcryptjs from 'bcryptjs';
import signJWT from '../functions/signJWT';
import { Connect, Query } from '../config/psql';
import IUser from '../interfaces/user';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    console.log("User authorized");

    return res.status(200).json({
        message: "Authorized"
    });
}

const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            });
        }

        // @TODO: insert user into DB

        // let query = `INSERT INTO users (username, password) VALUES ("${username}", "${hash}")`;
        // let result = Query(query);        
    });
}

const login = (req: Request, res: Response, next: NextFunction) => {
    
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    
}

export default { validateToken, register, login, getAllUsers };