# Laboratorio de Programacao Projects

## Introdução

Este projeto é um sistema de matrículas que visa facilitar o gerenciamento acadêmico. Nele, os alunos realizam o login para acessar informações sobre suas mensalidades, enquanto os professores podem visualizar as matrículas das disciplinas que ministram. O sistema foi desenvolvido para promover uma administração eficiente e intuitiva do ambiente escolar, proporcionando uma experiência amigável tanto para alunos quanto para professores.

## Estrutura de Pastas

A estrutura de pastas foi organizada para separar as responsabilidades entre backend e frontend, seguindo o padrão MVC para o lado do servidor e uma arquitetura de componentes para o lado do cliente:


meu-projeto/                                                                                                                                                                              
├── backend/                                                                                                                                                                              
│   ├── app/                                                                                                                                                                              
│   │   ├── controllers/       # Lógica de controle (ex.: LoginController, MatriculaController)                                                                                            
│   │   ├── models/            # Modelos de dados (ex.: Aluno, Professor, Matricula)                                                                                                      
│   │   ├── views/             # Views do lado do servidor (se aplicável)                                                                                                                  
│   │   └── routes/            # Rotas do sistema                                                                                                                                          
│   ├── config/                # Configurações gerais (banco de dados, rotas, etc.)                                                                                                        
│   ├── database/              # Migrations, seeds e scripts de banco de dados                                                                                                             
│   ├── public/                # Arquivos públicos (imagens, CSS, JS para acesso externo)                                                                                                  
│   └── tests/                 # Testes unitários e de integração
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── Auth/          # Componentes de autenticação (Login, Cadastro)
│   │   │   ├── Professor/     # Componentes específicos para professores (ex.: Lista de Matrículas)
│   │   │   └── Aluno/         # Componentes específicos para alunos (ex.: Histórico de Mensalidades)
│   │   │
│   │   ├── pages/             # Páginas principais do sistema (Dashboard, Home, Perfil, etc.)
│   │   ├── assets/            # Arquivos estáticos (imagens, fontes, ícones)
│   │   │   ├── images/
│   │   │   └── styles/        # CSS/SCSS e estilos globais
│   │   ├── services/          # Consumo de APIs e serviços auxiliares
│   │   ├── utils/             # Funções utilitárias e helpers
│   │   └── App.js             # Arquivo principal da aplicação
│   ├── public/                # Arquivos públicos do front (index.html, favicon, etc.)
│   └── tests/                 # Testes de componentes e integração
│
└── README.md                  # Documentação do projeto

