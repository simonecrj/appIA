```mermaid

%% Define o tipo de gráfico como "grafo de cima para baixo" (Top-Down)


graph TD


    %% -------------------- Definição dos Atores --------------------
    actor Paciente
    actor Médico

    %% -------------------- Delimitação do Sistema (Boundary) --------------------
    rectangle "Sistema Vida+Fácil" {

        %% -------------------- Casos de Uso --------------------
        (Agendar Consulta) as UC1
        (Solicitar Cancelamento de Consulta) as UC2
        (Realizar Consulta) as UC3
        (Prescrever Medicação) as UC4
        (Solicitar Realização de Exames) as UC5
        (Registrar Resultados de Glicemia) as UC6
        (Registrar Resultados de Pressão Arterial) as UC7
        (Consultar Histórico de Saúde) as UC8

        %% -------------------- Relacionamentos de Associação (Ator -> Caso de Uso) --------------------
        Paciente -- UC1
        Paciente -- UC2
        Paciente -- UC6
        Paciente -- UC7
        Paciente -- UC8

        Médico -- UC1
        Médico -- UC3
        Médico -- UC4
        Médico -- UC5
        Médico -- UC6
        Médico -- UC7
        Médico -- UC8

        %% -------------------- Relacionamentos de Extensão (Opcional) --------------------
        UC3 <.. UC4 : <<extend>>
        UC3 <.. UC5 : <<extend>>
    }
```
