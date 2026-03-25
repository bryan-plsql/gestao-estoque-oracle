# 🎮 Gamer Store - Full-Stack Project

Este é um projeto de e-commerce voltado para o público gamer, desenvolvido como parte do meu portfólio para processos seletivos. 
A aplicação é uma experiência **Full-Stack** completa, integrando um front-end moderno com uma infraestrutura robusta de banco de dados na nuvem.

---

## 🚀 Tecnologias Utilizadas

### Front-end
* **Next.js 14 / React:** Framework para uma interface rápida e otimizada.
* **Tailwind CSS:** Estilização moderna com foco em **Mobile-First**.
* **Vercel:** Plataforma de deploy e hospedagem.

### Back-end & Database
* **Oracle Cloud (OCI):** Hospedagem do banco de dados Autonomous Database.
* **PL/SQL:** Lógica de banco de dados para gestão de estoque e transações.
* **ORDS (Oracle REST Data Services):** Criação de APIs REST para comunicação segura entre o site e o banco.
* **Oracle APEX:** Painel administrativo customizado para gestão de produtos e inventário.

---

## 🛠️ Arquitetura do Sistema

O projeto funciona através de uma arquitetura de integração entre nuvens:

1.  **Interface do Usuário (Vercel):** O site em Next.js consome dados em tempo real.
2.  **Camada de API (ORDS):** Atua como a ponte de comunicação, transformando consultas SQL em respostas JSON.
3.  **Core de Dados (Oracle Cloud):** Processa a lógica de negócio e armazena as informações com segurança.

---

## ✨ Funcionalidades Principais

-   **Vitrine Dinâmica:** Listagem de produtos consumida diretamente via API.
-   **Design Gamer:** Interface em Dark Mode totalmente responsiva.
-   **Gestão de Estoque:** Integração com banco de dados para controle de disponibilidade de itens.
-   **Deploy Contínuo:** Configuração de CI/CD via GitHub e Vercel.

---

## 💡 Aprendizados Técnicos

Neste projeto, pude aplicar conceitos avançados que vão além da codificação básica:
-   **Segurança em Nuvem:** Configuração de ACLs (Access Control Lists) e segurança de IPs no Oracle Cloud.
-   **Consumo de APIs REST:** Integração de serviços externos no React.
-   **Experiência do Usuário:** Desenvolvimento focado em performance e usabilidade mobile.

---

## 🔗 Links

-   **Link do Site:** https://gestao-estoque-oracle-fth4.vercel.app/
-   **LinkedIn:** https://www.linkedin.com/in/bryan-daniel-pereira-b5a3241b7/
