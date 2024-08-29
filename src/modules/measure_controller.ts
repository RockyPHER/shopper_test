import { NextFunction, Request, Response } from "express";
import { measureSchema } from "../schemas/measure_schema";
import { RequestAPI } from "../api";
import { InputMeasure } from "./measure_model";

export async function ValidateMeasure(req: Request, res: Response, next: NextFunction) {
    try {
        const input: InputMeasure = await measureSchema.validateAsync(req.body);

        const api_response = await RequestAPI(input.image);
        console.log(api_response)

        res.status(200);
    } catch (error) {
        res.status(400).json(error);
    }
}


