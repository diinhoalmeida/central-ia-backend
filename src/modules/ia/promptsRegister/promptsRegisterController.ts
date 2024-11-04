import { Request, Response } from 'express';
import { CreatePromptUseCase } from './promptsRegisterUseCase';

export class CreatePromptController {
  async handle(req: Request, res: Response): Promise<any> {
    const { userId, iaId, prompt } = req.body;

    const createPromptUseCase = new CreatePromptUseCase();

    try {
      const interaction = await createPromptUseCase.execute({ userId, iaId, prompt });
      return res.status(201).json(interaction);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
