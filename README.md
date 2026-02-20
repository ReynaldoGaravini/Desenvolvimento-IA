# DevAI - Plataforma de E-Micro-Commerce

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11+-E0234E?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5+-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

O **DevAI** é uma plataforma de fluxo duplo focada em resolver a falta de controle em pedidos e pagamentos que gera prejuízos diários para o microempreendedor. O projeto oferece uma vitrine digital simples para realizar pedidos (Cliente) e um painel de gestão completo (Empreendedor).

---

## 📖 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Documentação Adicional](#-documentação-adicional)
- [Status do Projeto](#-status-do-projeto)
- [Licença](#-licença)

---

## 📌 Sobre o Projeto

Os diferenciais do **DevAI** incluem:
- **Simplicidade Radical:** Adoção imediata e zero complexidade técnica.
- **Vitrine Profissional:** Credibilidade instantânea para o catálogo de produtos.
- **Controle Financeiro:** Fim da inadimplência e das perdas por esquecimento.

---

## ✨ Funcionalidades Principais

- **Vitrine de Produtos:** Visualização de produtos disponíveis em formato de catálogo para os clientes.
- **Criação e Acompanhamento de Pedidos:** Fluxo simplificado para selecionar os produtos, criar e ver histórico de pedidos.
- **Gestão de Categorias e Produtos:** Painel administrativo para cadastrar, editar, remover e lidar com a organização do catálogo.
- **Gestão de Clientes:** Solução simples e integrada para o registro dos usuários que compraram na loja.
- **Gestão de Pedidos:** Acompanhamento por status (pendentes, pagamentos, atrosos) visando controle ponta-a-ponta.
- **Dashboard:** Visão geral do desempenho de vendas, valores recebidos vs pendentes.

---

## 🛠 Stack Tecnológica

O DevAI foi arquitetado de forma modular, com backend desacoplado via APIs RESTful:

### Frontend
- **Framework:** Next.js 15+ (App Router)
- **Estilização e Componentes:** Baseado no Design System proprietário com viés radical em simplicidade

### Backend & Dados
- **Framework Backend:** NestJS 11+
- **Banco de Dados:** PostgreSQL 15+
- **ORM:** Prisma 5+

### Integrações
- **Autenticação:** Clerk (JWT Authentication via OAuth 2.0 / OpenID Connect)
- **Deployment:** Vercel (Frontend)
- **Persistência Cloud:** Supabase

---

## 📁 Estrutura do Repositório

Organizado em formato de monorepo, a estrutura atual reflete componentes com responsabilidades bem definidas:

```
.
├── docs/                 # Documentações vitais: PRD, Spec Tech, Spec UI e Design System
└── frontend/             # Aplicação Next.js contendo a vitrine e o painel de administração
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)
- Banco de dados PostgreSQL (Configurado localmente ou instanciado via Supabase)

### Passos de Instalação (Frontend)

1. **Clone o repositório**
   ```bash
   git clone https://github.com/ReynaldoGaravini/Desenvolvimento-IA.git
   cd Desenvolvimento-IA
   ```

2. **Acesse a pasta do Frontend**
   ```bash
   cd frontend
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente**
   - Crie o arquivo `.env.local` na pasta `frontend/` com as chaves necessárias (veja o guia do Clerk ou Supabase nas documentações oficiais).

5. **Inicie o Servidor de Desenvolvimento**
   ```bash
   npm run dev
   ```

6. Abra o navegador em `http://localhost:3000` para visualizar a aplicação.

---

## 📚 Documentação Adicional

Acesse as documentações detalhadas na pasta `/docs`:
- **[PRD (Definição de Requisitos)](docs/prd.md)**
- **[Especificação Técnica](docs/spec_tech.md)**
- **[Especificação de UI](docs/spec_ui.md)**
- **[Design System](docs/design_system.md)**

---

## 📊 Status do Projeto

⚠️ **Em Desenvolvimento (Fase de MVP)**
Estamos atualmente desenvolvendo o Frontend da aplicação baseando-se nos guias de UI e nas definições do produto. O escopo atual busca entregar a vitrine de produtos e o painel sem interligação com pagamentos em lotes complexos no momento (fora do escopo da versão atual).

---

## 📝 Licença

Este projeto é desenvolvido para fins privados/autorais. Consulte a documentação interna para autorizações de reprodução e distribuição.
