import express, { Request, Response } from 'express'
import { requestPrompt } from '../integrations/openaiClient'

export type Food = {
    foodmoods: string;
    diets: string;
    cuisines: string;
    difficulty: string;
    timeofday: string;
    persons: number;
}

export class FrontendRequestController {
    index = async (req: Request, res: Response) => {
        const food: Food = {
            foodmoods: req.body.foodmoods || ['Tasty', true],
            diets: req.body.diets || ['Fastfood', true],
            cuisines: req.body.cuisines || ['Modern', true],
            difficulty: req.body.difficulty || ['Easy', true],
            timeofday: req.body.timeofday || ['Lunch', true],
            persons: req.body.persons || 1
        }
        let responseData = await requestPrompt(food)       
        res.end(JSON.stringify(responseData));
    }
}
