# Weather App
#Diagrama
%% Definição do tipo de gráfico como "grafo de cima para baixo" (Top-Down) graph TD

%% -------------------- Definição dos Atores --------------------
actor Paciente
actor Médico %% Renomeado de "Profissional de Saúde"

%% -------------------- Delimitação do Sistema (Boundary) --------------------
rectangle "Sistema Vida+Fácil" {

    %% -------------------- Casos de Uso --------------------
    (Realizar Cadastro de Usuário) as UC1
    (Realizar Login) as UC2
    (Visualizar Dashboard) as UC3
    (Acessar Conteúdo Educativo) as UC9

    (Agendar Atendimento) as UC4 %% Representa o "Agendamento da Consulta"
    (Visualizar Histórico de Agendamentos) as UC6
    (Registrar Indicadores de Saúde) as UC7
    (Consultar Histórico de Glicemia e Pressão Arterial) as UC8 %% Nome mais específico
    (Confirmar/Cancelar Agendamento - Paciente) as UC11P %% Ajustado para Paciente

    (Gerenciar Disponibilidade) as UC10
    (Visualizar Agendamentos Recebidos) as UC12
    (Confirmar/Cancelar Agendamento - Médico) as UC11S %% Ajustado para Médico

    %% Casos de Uso Incluídos
    (Consultar Médicos) as UC4a %% Ajustado para Médicos
    (Visualizar Horários Livres) as UC4b

    %% -------------------- Relacionamentos de Associação (Ator -> Caso de Uso) --------------------
    Paciente -- UC1
    Médico -- UC1

    Paciente -- UC2
    Médico -- UC2

    Paciente -- UC3
    Médico -- UC3

    Paciente -- UC9

    Paciente -- UC4

    Paciente -- UC6

    Paciente -- UC7

    Paciente -- UC8

    Paciente -- UC11P

    Médico -- UC10
    Médico -- UC11S
    Médico -- UC12

    %% -------------------- Relacionamentos de Inclusão (Caso de Uso <<includes>> Outro Caso de Uso) --------------------
    UC4 ..> UC4a : <<includes>>
    UC4 ..> UC4b : <<includes>>
}
## Descrição

Este é um protótipo de um aplicativo para monitoramento climático, análise de solo e recomendações de irrigação para plantas. O aplicativo utiliza dados de clima, umidade do solo e tipo de planta para fornecer recomendações precisas de irrigação. Além disso, o aplicativo possui funcionalidades de cadastro e login de usuários.

## Estrutura das Telas

1. **Tela Inicial - Dashboard**
2. **Tela de Dados Climáticos**
3. **Tela de Análise de Solo**
4. **Tela de Perfil da Planta**
5. **Tela de Recomendações**
6. **Tela de Configurações**
7. **Tela de Cadastro**
8. **Tela de Login**

## Como Executar

1. Clone o repositório.
2. Abra o arquivo `index.html` no navegador para acessar o aplicativo.
3. Para acessar as funcionalidades de cadastro e login, abra os arquivos `register.html` e `login.html`.

## Funcionalidades Futuras

- Integração com APIs de clima.
- Suporte para sensores IoT.
- Algoritmos de aprendizado de máquina para recomendações de irrigação.
