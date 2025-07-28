# Diagrama de Caso de Uso - Sistema Vida+Fácil

Aqui está o diagrama de caso de uso para o nosso sistema:

```mermaid
%% Define o tipo de gráfico como "grafo de cima para baixo" (Top-Down)
graph TD

    %% -------------------- Definição dos Atores --------------------
    actor Paciente
    actor Secretária
    actor Médico

    %% -------------------- Delimitação do Sistema (Boundary) --------------------
    rectangle "Sistema Médico" { %% Nome do sistema conforme a imagem

        %% -------------------- Casos de Uso --------------------
        (Solicitar Consulta) as UC1
        (Solicitar Cancelamento de Consulta) as UC2
        (Marca Consulta) as UC3
        (Prescreve Medicação) as UC4
        (Realiza Consulta) as UC5
        (Solicita Realização de Exames) as UC6

        %% -------------------- Relacionamentos de Associação (Ator -> Caso de Uso) --------------------
        Paciente -- UC1
        Paciente -- UC2
        Secretária -- UC3
        Médico -- UC5

        %% -------------------- Relacionamentos de Inclusão e Extensão --------------------
        %% Solicitar Consulta <<include>> Marca Consulta
        UC1 ..> UC3 : <<include>>

        %% Marca Consulta <<extend>> Prescreve Medicação
        UC3 <.. UC4 : <<extend>>

        %% Realiza Consulta <<extend>> Solicita Realização de Exames
        UC5 <.. UC6 : <<extend>>
    }
