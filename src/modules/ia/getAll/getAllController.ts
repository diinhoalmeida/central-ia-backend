import { Request, Response } from "express";
import { GetIAsUseCase } from "./getAllUseCase";

export class GetIAsController {
  async handle(request: Request, response: Response): Promise<any> {
    const getIAsUseCase = new GetIAsUseCase();

    try {
      const result = await getIAsUseCase.execute();
      return response.json(result);
    } catch (error) {
      console.error(error);
      return response.status(400).json({
        error: "Não foi possível realizar a operação",
      });
    }
  }
}
