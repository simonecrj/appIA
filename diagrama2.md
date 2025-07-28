```mermaid

%% Define o tipo de gráfico como "grafo de cima para baixo" (Top-Down)


graph TD


    %% -------------------- Definição dos Atores --------------------

Paciente((Paciente))
Medico((Medico)

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
    Paciente --> A[Agendar Consulta]
    Paciente --> B[Consultar Histórico de Saúde]
    Paciente --> C[Solicitar Cancelamento de Consulta]
    Paciente --> D[Registrar Resultados de Glicemia]
    Paciente --> E[Registrar Resultados de Pressão Arterial]
    Paciente --> F[Consultar Histórico de Saúde]

    Medico --> A
    Medico --> G[Visualizar Histórico de Paciente]
    Medico --> C
    Medico --> D
    Medico --> E
    Medico --> F

    E --> B

    %% Notas (simuladas com texto)
    subgraph Notas
        NoteP["Paciente:\n- Agenda consultas\n- Visualiza e registra saúde"]
        NoteM["Médico:\n- Agenda para pacientes\n- Visualiza históricos\n- Registra resultados"]
    end

    Paciente --> NoteP
    Medico --> NoteM
    C <.. D : <<extend>>
    C <.. E : <<extend>>

    }
```
