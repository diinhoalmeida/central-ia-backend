import { prismaClient } from "../../../database/prismaClient";

interface GetIAsResponse {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class GetIAsUseCase {
  async execute(): Promise<GetIAsResponse[]> {
    const ias = await prismaClient.iA.findMany({
      orderBy: {
        name: "asc",
      },
    });

    if (!ias) {
      throw new Error("Nenhuma IA encontrada");
    }

    return ias;
  }
}
