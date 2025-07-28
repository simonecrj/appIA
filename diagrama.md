## Diagrama de Caso de Uso — Sistema Vida Mais Fácil

```mermaid
usecaseDiagram
    actor Paciente
    actor Medico

    Paciente --> (Agendar Consulta)
    Paciente --> (Consultar Histórico de Saúde)
    Paciente --> (Registrar Resultados de Glicemia)
    Paciente --> (Registrar Resultados de Pressão Arterial)

    Medico --> (Agendar Consulta)
    Medico --> (Visualizar Histórico de Paciente)
    Medico --> (Registrar Resultados de Glicemia)
    Medico --> (Registrar Resultados de Pressão Arterial)

    (Visualizar Histórico de Paciente) --|> (Consultar Histórico de Saúde) : inclui

    note right of Paciente
      - Agenda consultas para si
      - Visualiza e registra seus dados de saúde
    end

    note left of Medico
      - Agenda consultas para pacientes
      - Visualiza o histórico de todos os pacientes
      - Registra resultados dos pacientes
    end
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
