flowchart TD

%% Paciente actor and its actions
subgraph Paciente
    Paciente[Paciente]
    Paciente --> CadastrarSe["Cadastrar-se"]
    Paciente --> FazerLoginPaciente["Fazer login"]
    Paciente --> AgendarConsulta["Agendar Consulta"]
    Paciente --> VisualizarHistorico["Visualizar Histórico"]
    Paciente --> RegistrarGlicemia["Registrar Glicemia"]
    Paciente --> RegistrarPressao["Registrar Pressão Arterial"]
end

%% Médico actor and its actions
subgraph Medico
    Medico[Medico]
    Medico --> FazerLoginMedico["Fazer login"]
    Medico --> VisualizarAgenda["Visualizar Agenda"]
    Medico --> VisualizarHistoricoPaciente["Visualizar Histórico Paciente"]
    Medico --> RegistrarGlicemiaMedico["Registrar Glicemia Médico"]
    Medico --> RegistrarPressaoMedico["Registrar Pressão Médico"]
    Medico --> RegistrarObservacoes["Registrar Observações"]
end

%% Consulta features handled by Médico
subgraph Consulta
    RegistrarDiagnostico["Registrar Diagnóstico"]
    PrescreverMedicamentos["Prescrever Medicamentos"]
    AnexarExames["Anexar Exames"]
    EncerrarConsulta["Encerrar Consulta"]
end
Medico --> RegistrarDiagnostico
Medico --> PrescreverMedicamentos
Medico --> AnexarExames
Medico --> EncerrarConsulta

%% Agendamento features handled by Médico
subgraph Agendamento
    ConfirmarConsulta["Confirmar Consulta"]
    CancelarAgendamento["Cancelar Agendamento"]
    NotificarPaciente["Notificar Paciente"]
end
Medico --> ConfirmarConsulta
Medico --> CancelarAgendamento
Medico --> NotificarPaciente

%% Patient Record access by Médico
subgraph RegistroDoPaciente["Registro do Paciente"]
    VisualizarRegistrosGlicemia["Visualizar Registros de Glicemia"]
    VisualizarRegistrosPressao["Visualizar Registros de Pressão"]
    ComplementarRegistros["Complementar Registros"]
end
Medico --> VisualizarRegistrosGlicemia
Medico --> VisualizarRegistrosPressao
Medico --> ComplementarRegistros

