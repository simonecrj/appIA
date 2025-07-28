# Diagrama de Caso de Uso - Sistema Vida+Fácil

Aqui está o diagrama de caso de uso para o nosso sistema:

```mermaid
graph TD;

    actor Paciente
    actor Medico

    rectangle "Sistema Medico" {

        (Solicitar Consulta) as UC1
        (Solicitar Cancelamento de Consulta) as UC2
        (Marca Consulta) as UC2
        (Prescreve Medicação) as UC4
        (Realiza Consulta) as UC5
        (Solicita Realização de Exames) as UC6

        Paciente -- UC1
        Paciente -- UC2
      
        Medico -- UC5

        UC1 ..> UC2 : <<include>>

        UC2 <.. UC4 : <<extend>>

        UC5 <.. UC6 : <<extend>>
    }
  
