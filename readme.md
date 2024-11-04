# Projeto Backend

## Descrição
Este é um projeto backend desenvolvido em Node.js, utilizando o framework Express e o Prisma ORM para a comunicação com um banco de dados PostgreSQL. A aplicação foi projetada para gerenciar interações entre usuários e inteligências artificiais (IAs), categorizando e armazenando informações de forma eficiente.

## Estrutura de Dados
O projeto utiliza o Prisma ORM para gerenciar o banco de dados PostgreSQL. Abaixo estão as principais definições dos modelos utilizados:

### Modelos do Prisma

- **IA**: Representa as inteligências artificiais cadastradas no sistema.
  ```prisma
  model IA {
    id           Int           @id @default(autoincrement())
    name         String        @unique
    description  String
    createdAt    DateTime      @default(now())
    updatedAt    DateTime      @updatedAt
    image        String
    interactions Interaction[]

    @@map("ias")
  }
  ```

- **Category**: Representa as categorias disponíveis.
  ```prisma
  model Category {
    id   Int    @id @default(autoincrement())
    name String @unique
  }
  ```

- **User**: Representa os usuários da aplicação.
  ```prisma
  model User {
    id           Int           @id @default(autoincrement())
    firebaseId   String        @unique
    email        String        @unique
    name         String?
    credits      Int           @default(20)
    createdAt    DateTime      @default(now())
    interactions Interaction[]

    @@map("users")
  }
  ```

- **Interaction**: Armazena as interações entre usuários e IAs.
  ```prisma
  model Interaction {
    id        Int      @id @default(autoincrement())
    userId    Int
    iaId      Int
    prompt    String
    response  String
    timestamp DateTime @default(now())

    user User @relation(fields: [userId], references: [id])
    ia   IA   @relation(fields: [iaId], references: [id])

    @@index([userId], name: "user_interaction_idx")
    @@index([iaId], name: "ia_interaction_idx")
    @@map("interactions")
  }
  ```

## Dependências
As principais dependências utilizadas neste projeto incluem:

- **@prisma/client**: Cliente Prisma para comunicação com o banco de dados.
- **express**: Framework web para Node.js.
- **cors**: Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
- **morgan**: Logger HTTP para Node.js.
- **typescript**: Superset do JavaScript que adiciona tipos estáticos.

## Scripts
Os scripts configurados para rodar a aplicação são:

- **start**: Compila o código TypeScript e executa o servidor.
  ```bash
  npm run start
  ```

- **dev**: Executa o servidor em modo de desenvolvimento utilizando `ts-node`.
  ```bash
  npm run dev
  ```

## Configuração
O projeto utiliza variáveis de ambiente para configurar a URL de conexão com o banco de dados PostgreSQL. Certifique-se de criar um arquivo `.env` com as seguintes variáveis:

```env
DATABASE_URL=postgresql://usuario:senha@host:porta/banco
DIRECT_URL=postgresql://usuario:senha@host:porta/banco
```

## Instalação
1. Clone este repositório.
2. Instale as dependências com o comando:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute as migrações do Prisma para criar as tabelas no banco de dados:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura de Pastas
- `src/`: Contém o código-fonte da aplicação.
- `prisma/`: Contém o esquema do Prisma e migrações do banco de dados.

## Licença
Este projeto é licenciado sob a licença ISC.

---
Este README serve como uma visão geral do projeto e guia de configuração para desenvolvedores e contribuidores.

