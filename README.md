# 💰 API de Transações Financeiras

Uma API REST robusta e moderna para controle de transações financeiras, desenvolvida com Node.js, Fastify e TypeScript. Oferece funcionalidades completas para gerenciamento de receitas e despesas com sistema de sessões baseado em cookies.

[![Node.js](https://img.shields.io/badge/Node.js->=22-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.4+-lightgrey.svg)](https://fastify.io/)
[![Database](https://img.shields.io/badge/Database-SQLite%20%7C%20PostgreSQL-orange.svg)]()
[![Tests](https://img.shields.io/badge/Tests-Vitest-yellow.svg)](https://vitest.dev/)

## 🚀 Deploy

A aplicação está disponível online no Render: **[Acesse a API](https://sua-url-do-render.com)**

## ✨ Características

- **🏗️ Arquitetura Moderna**: Construída com Fastify para alta performance
- **🔒 Sistema de Sessões**: Controle de acesso baseado em cookies
- **💾 Multi-Database**: Suporte a SQLite (desenvolvimento) e PostgreSQL (produção)
- **🧪 Testes Automatizados**: Cobertura completa com Vitest e Supertest
- **📊 Migrations**: Controle de versão do banco de dados com Knex.js
- **⚡ TypeScript**: Tipagem estática para maior segurança e produtividade
- **🎯 Validação**: Schemas robustos com Zod
- **🔄 Hot Reload**: Desenvolvimento ágil com tsx watch

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** (>=22) - Runtime JavaScript
- **Fastify** - Framework web de alta performance
- **TypeScript** - Superset JavaScript com tipagem estática
- **Knex.js** - Query builder e migrations
- **Zod** - Validação de schemas TypeScript-first

### Database
- **SQLite** - Desenvolvimento e testes
- **PostgreSQL** - Produção

### Testes
- **Vitest** - Framework de testes moderno
- **Supertest** - Testes de API HTTP

### Ferramentas
- **Biome** - Linter e formatter
- **tsx** - Execução TypeScript
- **tsup** - Bundler TypeScript

## 📋 Funcionalidades

### Transações
- ✅ Criar nova transação (receita/despesa)
- ✅ Listar todas as transações do usuário
- ✅ Buscar transação específica por ID
- ✅ Obter resumo financeiro (saldo total)

### Segurança
- 🔐 Sistema de sessões automático
- 🍪 Gerenciamento de cookies
- 🛡️ Middleware de autenticação
- 🔒 Isolamento de dados por sessão

## 🏗️ Estrutura do Projeto

```
src/
├── @types/           # Definições de tipos TypeScript
├── env/             # Configuração de variáveis de ambiente
├── middlewares/     # Middlewares customizados
├── routes/          # Definição das rotas da API
├── app.ts          # Configuração principal do Fastify
├── database.ts     # Configuração do banco de dados
└── server.ts       # Servidor HTTP

db/
└── migrations/     # Migrations do banco de dados

test/
└── *.spec.ts      # Arquivos de teste
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 22
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd 02-api-rest-nodejs
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o ambiente**
```bash
cp .env.exemple .env
cp .env.test.example .env.test
```

4. **Execute as migrations**
```bash
npm run knex migrate:latest
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

### Cobertura de Testes
- ✅ Criação de transações
- ✅ Listagem de transações
- ✅ Busca por ID
- ✅ Cálculo de resumo financeiro
- ✅ Sistema de sessões
- ✅ Validações de entrada

## 🏭 Build e Deploy

```bash
# Build para produção
npm run build

# O build será gerado na pasta ./build
```

### Variáveis de Ambiente

#### Desenvolvimento (.env)
```env
NODE_ENV=development
DATABASE_CLIENT=sqlite
DATABASE_URL="./db/app.db"
PORT=3333
```

#### Produção
```env
NODE_ENV=production
DATABASE_CLIENT=pg
DATABASE_URL="postgresql://user:password@host:port/database"
PORT=3333
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm test` - Executa os testes
- `npm run knex` - Executa comandos do Knex.js

## 📈 Performance

- **Framework**: Fastify oferece uma das melhores performances entre frameworks Node.js
- **Database**: Queries otimizadas com Knex.js
- **TypeScript**: Compilação eficiente com tsx
- **Cookies**: Sistema de sessão leve e seguro

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Pedro Carvalho**

---

⭐ Não esqueça de dar uma estrela!

> 💡 **Desenvolvido com foco em**: Clean Code, Testes Automatizados, Performance e Boas Práticas de Desenvolvimento