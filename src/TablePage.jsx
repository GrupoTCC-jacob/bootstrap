function TablePage({ title, items }) {
  return (
    <div className="container py-5">
      <div className="card card-custom shadow-sm mx-auto">
        <div className="card-body">
          <div className="page-header">
            <h1 className="h2">{title}</h1>
            <p className="text-muted mb-0">Lista de {title.toLowerCase()} cadastrados.</p>
          </div>

          {items.length === 0 ? (
            <div className="alert alert-info mb-0" role="alert">
              Nenhum {title.toLowerCase()} cadastrado.
            </div>
          ) : (
            <div className="table-responsive table-card">
              <table className="table table-striped table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="py-3">#</th>
                    <th className="py-3">Nome</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={`${item}-${index}`}>
                      <td>{index + 1}</td>
                      <td>{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TablePage
