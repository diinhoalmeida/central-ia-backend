import { prismaClient } from "../../../database/prismaClient";

interface CreatePromptInput {
  userId: number;
  iaId: number;
  prompt: string;
}

interface Interaction {
  id: number;
  userId: number;
  iaId: number;
  prompt: string;
  timestamp: Date;
}

export class CreatePromptUseCase {
  async execute({
    userId,
    iaId,
    prompt,
  }: CreatePromptInput): Promise<Interaction> {
    try {
      const interaction = await prismaClient.interaction.create({
        data: {
          userId: 1,
          iaId: 1,
          prompt,
          response: "",
        },
      });

      return interaction;
    } catch (error) {
      console.error("Error creating prompt:", error);
      throw new Error("Failed to create prompt");
    }
  }
}
