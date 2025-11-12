export default function TreinamentosLista({ treinamentos }) {
    // Objeto para controlar os status dos treinamentos
    const Status = {
        "Pendente": ["warning", "fa-question-circle"],
        "Em andamento": ["warning", "fa-cogs"],
        "Concluido": ["success", "fa-check"],
        "Cancelado": ["danger", "fa-xmark"],
    }

    const formatTime = (createdAt) => {
        const diff = Date.now() - new Date(createdAt).getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        if (minutes === 0) return "Agora";
        if (minutes < 60) return `Há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `Há ${hours} hora${hours > 1 ? "s" : ""}`;
        const days = Math.floor(hours / 24);
        return `Há ${days} dia${days > 1 ? "s" : ""}`;
    };

    return <div className="col-12 col-lg-8">
        <div className="card border-0 shadow-sm p-3">
            {/* Titulo */}
            <div className="card-header bg-white border-0 px-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fs-5">Treinamentos recentes</h5>
                </div>
            </div>

            {/* Lista */}
            <div className="card-body border rounded overflow-y-scroll" style={{height:'500px'}}>
                {treinamentos.length > 0 ? (
                    treinamentos.map((tr) => (
                        <div key={tr.id} className="d-flex align-items-center border-bottom mb-2 pb-2">

                            <div className={`flex-shrink-0 bg-${Status[tr.estado][0]} bg-opacity-10 rounded d-flex justify-content-center align-items-center`} style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className={`fas ${Status[tr.estado][1]} text-${Status[tr.estado][0]}`} />
                            </div>

                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">{tr.nome}</h6>
                                <p className="text-muted small mb-0">{formatTime(tr.data_criacao)}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-muted">Carregando atividades...</p>
                )}
            </div>
        </div>
    </div>
}