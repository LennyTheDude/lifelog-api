import { NextFunction, Request, Response} from 'express';
import bcryptjs from 'bcryptjs';
import signJWT from '../functions/signJWT';
import { Connect, Query } from '../config/psql';
import IUser from '../interfaces/user';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    // @TODO: validate a token coming in request

    console.log("Token validated.");

    return res.status(200).json({
        message: "Authorized"
    });
}

const register = (req: Request, res: Response, next: NextFunction) => {
    console.log('req.body', req.body);

    const { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(401).json({
                message: hashError.message,
                error: hashError
            });
        }

        // @TODO: insert user into DB

        const query = `INSERT INTO users (username, password)
                        VALUES ('${username}', '${hash}')
                        RETURNING _id;`;

        Query(query)
            .then(result => {
                console.log('RESULT:' + result);

                // @TODO: create JWT Tokens & send with response? or redirect to login?

                return res.status(201).json({ id: result.rows[0]._id });
            })
            .catch(error => {
                console.log(`Login: ${error.message, error}`)

                return res.status(500).json({
                    message: error.message,
                    error
                });
            });
    });
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    
    let { username, password } = req.body;

    let query = `SELECT * FROM users WHERE username = '${username}'`;

    Query(query)
        .then(async result => {
            const passMatch = await bcryptjs.compare(password, result.rows[0].password);

            if (passMatch) {
                console.log("Login: passwords match");

                // @TODO: create JWT Tokens & send with response

                return res.status(201).json({ 
                    message: "Login successful",
                    id: result.rows[0]._id
                });
            } else {
                console.error("Login: Incorrect password");

                return res.status(401).json({
                    message: "Incorrect password",
                });
            }
        })
        .catch(error => {
            console.log(`Login: ${error.message, error}`)

            return res.status(500).json({
                message: error.message,
                error
            });
        });
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    Query("SELECT * FROM users")
        .then(result => {
            console.log('Retrieved users from database.', result.rows)

            return res.status(201).json(result.rows);
        })
        .catch(error => {
            console.error(`Get All Users: ${error.message, error}`)

            return res.status(500).json({
                message: error.message,
                error
            });
        });
}

export default { validateToken, register, login, getAllUsers };