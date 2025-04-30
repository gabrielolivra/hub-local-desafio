# Hub Local Desafio

Este é o repositório do projeto **Hub Local Desafio**, desenvolvido com **Next.js**, **TypeScript**, **TailwindCSS** e outras tecnologias modernas.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão >= 20.0.0)
- **pnpm** (versão >= 9.0.0)

### Instalação do `pnpm`

Se você ainda não possui o `pnpm` instalado, execute o seguinte comando:

```bash
npm install -g pnpm
```

## Configuração do ambiente

1. Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`:

```bash
cp .env.example .env
```

2. Preencha as variáveis de ambiente no arquivo `.env` com os valores necessários.

## Instalação das dependências

Para instalar as dependências do projeto, execute:

```bash
pnpm install
```

## Scripts disponíveis

### Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
pnpm dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

### Build de produção

Para gerar o build de produção, execute:

```bash
pnpm build
```

### Linting

Para verificar e corrigir problemas de linting no código, execute:

```bash
pnpm lint
```

## Tecnologias utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS**: Framework CSS utilitário para estilização.
- **React Hook Form**: Gerenciamento de formulários no React.
- **React Toastify**: Exibição de notificações.

