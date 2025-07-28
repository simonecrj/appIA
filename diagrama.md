```mermaid
graph TD
    Paciente((Paciente))
    Medico((Médico))

    Paciente --> A[Agendar Consulta]
    Paciente --> B[Consultar Histórico de Saúde]
    Paciente --> C[Registrar Resultados de Glicemia]
    Paciente --> D[Registrar Resultados de Pressão Arterial]

    Medico --> A
    Medico --> E[Visualizar Histórico de Paciente]
    Medico --> C
    Medico --> D

    E --> B

    %% Notas (simuladas com texto)
    subgraph Notas
        NoteP["Paciente:\n- Agenda consultas\n- Visualiza e registra saúde"]
        NoteM["Médico:\n- Agenda para pacientes\n- Visualiza históricos\n- Registra resultados"]
    end

    Paciente --> NoteP
    Medico --> NoteM
```
### Atores

**Paciente:**  
Utiliza o sistema para agendar consultas, visualizar seu histórico de saúde e registrar informações sobre glicemia e pressão arterial.

**Médico:**  
Utiliza o sistema para agendar consultas, visualizar o histórico de saúde do paciente e registrar informações sobre glicemia e pressão arterial.

### Casos de Uso

- **Agendar Consulta:**  
  O paciente ou médico pode agendar uma consulta, especificando data, hora e motivo.

- **Consultar Histórico de Saúde:**  
  O paciente pode visualizar seu próprio histórico completo; o médico pode usar essa função ao acessar o histórico de um paciente.

- **Registrar Resultados de Glicemia:**  
  O paciente ou médico pode registrar os níveis de glicemia.

- **Registrar Resultados de Pressão Arterial:**  
  O paciente ou médico pode registrar os níveis de pressão arterial.

- **Visualizar Histórico de Paciente:**  
  O médico pode acessar o histórico completo do paciente, incluindo glicemia e pressão arterial, para apoio no diagnóstico e tratamento.
