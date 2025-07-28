```mermaid

%% Define o tipo de gráfico como "grafo de cima para baixo" (Top-Down)


graph TD


    %% -------------------- Definição dos Atores --------------------

Paciente((Paciente))
Medico((Medico))
 
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

    }
```
