# Diagrama de Caso de Uso - Sistema Vida+Fácil (Atualizado)

Este diagrama ilustra os casos de uso para o sistema Vida+Fácil, focando nos atores Paciente e Médico.
```mermaid
graph TD

actor Paciente

actor Medico

    %% -------------------- Definição dos Atores --------------------
   

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
        Paciente -- UC1 %% Paciente pode agendar consulta
        Paciente -- UC2 %% Paciente pode solicitar cancelamento
        Paciente -- UC6 %% Paciente pode registrar glicemia
        Paciente -- UC7 %% Paciente pode registrar pressão arterial
        Paciente -- UC8 %% Paciente pode consultar seu histórico

        Medico -- UC1 %% Médico pode agendar consulta
        Medico -- UC3 %% Médico realiza a consulta
        Medico -- UC4 %% Médico prescreve medicação
        Medico -- UC5 %% Médico solicita exames
        Medico -- UC6 %% Médico pode registrar glicemia (para o paciente)
        Medico -- UC7 %% Médico pode registrar pressão arterial (para o paciente)
        Medico -- UC8 %% Médico pode consultar o histórico do paciente

        %% -------------------- Relacionamentos de Extensão (Opcional) --------------------
        %% Realizar Consulta pode estender para Prescrever Medicação
        UC3 <.. UC4 : <<extend>>

        %% Realizar Consulta pode estender para Solicitar Realização de Exames
        UC3 <.. UC5 : <<extend>>
    }
```

