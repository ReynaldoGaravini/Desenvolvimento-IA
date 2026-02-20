# Diretrizes para Agentes de IA (AGENTS.md)

Este documento orienta Agentes de Inteligência Artificial sobre as regras de negócio, limites da arquitetura e padrões predefinidos para este repositório. O contexto utilizado baseia-se exclusivamente nas referências listadas abaixo:

- Requisitos do Produto: `docs/prd.md`
- Especificação Técnica: `docs/spec_tech.md`
- Especificação de Interfaces: `docs/spec_ui.md`
- Todo o desenvolvimento de interfaces ocorre no diretório `./frontend`.

---

## 1. Visão Geral do Produto (DevAI)

O DevAI é um e-micro-commerce de fluxo duplo projetado para priorizar **simplicidade radical**. 
- **Lado Cliente:** Uma vitrine de produtos orientada ao autoatendimento. Permite adicionar produtos ao carrinho sem login (autenticação exigida apenas no fechamento).
- **Lado Admin:** Painel completo para gestão de Categorias, Produtos, Pedidos, Clientes e acompanhamento financeiro (Dashboard).

---

## 2. Padrões Arquiteturais e Stack (`docs/spec_tech.md`)

Ao atuar no desenvolvimento da plataforma, respeite as definições do stack base:

- **Frontend:** Next.js 16+ (usando App Router). Localizado no diretório `./frontend`.
- **Backend:** NestJS 11+ (API RESTful), seguindo padrões do Nest (controllers, services, repositories, DTOs).
- **Banco de Dados:** PostgreSQL 15+ utilizando Prisma 5+ como ORM (Integrado ao Supabase).
- **Autenticação:** Baseada em OIDC/OAuth 2.0 via Clerk, usando tokens JWT em HttpOnly cookies.
- **Tenancy:** O projeto nasce como um MVP operando sob um único schema compartilhado (mono-tenant). Ainda assim, toda a arquitetura de banco e código base (entidades) já devem prever e carregar a referência de um `tenant_id`.

## 3. Diretrizes de Interface e Frontend (`docs/spec_ui.md` e `./frontend`)

Todo o código de interface do cliente e painel administrativo rodará em `./frontend`. As principais obrigações do agente ao lidar com a UI são:

1. **Design System Estrito:** Utilize apenas componentes e tokens semânticos do Design System. **Nunca** utilize valores visuais fixos (cores ou espaçamentos _hardcoded_ soltos). Crie componentes reutilizáveis.
2. **Acessibilidade e UX:**
   - Adicione estados de carregamento (_loading_) e vazios (_empty states_) em todas as tabelas/listas.
   - Adicione validação em tempo real aos formulários.
   - Force a confirmação explícita de qualquer ação destrutiva via modal.
   - Implemente e preserve a navegação funcional via teclado.
3. **Mapeamento Semântico de Badges (Status dos Pedidos):**
   Exiba sempre o status do pedido utilizando Badges específicos. A associação de tons visuais deve ser:
   - `neutral`: Status `Novo`.
   - `success`: Status `Pago` e `Entregue`.
   - `info`: Status `Preparação`, `Faturado` e `Despachado`.
   - `error`: Status `Cancelado`.

## 4. Diretrizes de API e Backend (`docs/spec_tech.md`)

Se a atuação abranger o backend de aplicação, atente-se a:

1. **Padrão REST e Clean Architecture:** As APIs seguirão restritamente a especificação OpenAPI (Swagger). Siga princípios SOLID. O versionamento da API será via URI path (ex. `/v1/products`).
2. **Segurança de Operação:** 
   - Ações que cruzam várias entidades do banco de dados (Ex: "Fechamento de um pedido", alterando itens e status) devem invariavelmente utilizar **Transactions**.
   - Rotas de administração não são públicas. Endpoints protegidos dependem de _Guards_ validados pelas funções de acesso por roles (Admin vs Cliente).
3. **Rastreabilidade e Auditoria:**
   - O schema de todas as tabelas precisará comportar *timestamps* (criado em, atualizado em).
   - Registre as atualizações na base de dados referenciando usuário, objeto, ação, data e hora.

## 5. Regras de Negócio Invioláveis (`docs/prd.md`)

- **Exclusões Seguras (Soft Delete):** Clientes vinculados a um histórico de pedidos preexistente não podem sofrer exclusão física (DELETE) do banco; eles devem ser marcados como inativos.
- **Controle da Vitrine:** O cliente final nunca poderá ver produtos marcados com flag "inativo". Produtos catalogados mas sem estoque devem aparecer, porém em estado *desabilitado*.
- **Cálculos:** Qualquer mutação no carrinho (alteração de quantidade) aciona o recálculo do valor total do pedido pela aplicação.
