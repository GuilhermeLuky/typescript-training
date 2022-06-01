import { Request, Response } from 'express'
import CreateCouserService from './CreateCouserService'

export function createCourse(request: Request, response: Response){
 
    CreateCouserService.execute("NodeJS", 10, "Guilherme");

    return response.send();
}