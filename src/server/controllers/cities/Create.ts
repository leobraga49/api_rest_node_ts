/* eslint-disable prefer-const */
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICity {
    name: string;
    state: string;
}

const bodyValidation: yup.ObjectSchema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required(),
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    let validatedData: ICity | undefined = undefined;

    try {
        await bodyValidation.validate(req.body, { abortEarly: false });

    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (!error.path) return;

            errors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }

    console.log(validatedData);

    return res.send('Create!');
};