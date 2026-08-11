import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const routeMap = {
  aluno: 'alunos',
  professor: 'professores',
  coordenador: 'coordenadores',
  diretor: 'diretor',
}

function FormPage({ onSave }) {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSave = (role) => {
    const trimmedName = name.trim()
    if (!trimmedName) return

    onSave(role, trimmedName)
    setName('')
    navigate(`/${routeMap[role]}`)
  }

  return (
    <div className="container py-5">
      <div className="card card-custom mx-auto shadow-sm">
        <div className="card-body">
          <div className="page-header">
            <h1 className="h2">Cadastro</h1>
            <p className="text-muted mb-0">Preencha o nome e selecione o tipo de cadastro.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="personName" className="form-label fw-semibold">
                Nome
              </label>
              <input
                id="personName"
                type="text"
                className="form-control form-control-lg custom-input"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Digite um nome"
              />
            </div>

            <div className="d-grid gap-3 d-sm-flex flex-wrap">
              <button
                type="button"
                className="btn btn-primary btn-lg w-100 w-sm-auto btn-custom"
                onClick={() => handleSave('aluno')}
              >
                Salvar Aluno
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg w-100 w-sm-auto btn-custom"
                onClick={() => handleSave('professor')}
              >
                Salvar Professor
              </button>
              <button
                type="button"
                className="btn btn-outline-success btn-lg w-100 w-sm-auto btn-custom"
                onClick={() => handleSave('coordenador')}
              >
                Salvar Coordenador
              </button>
              <button
                type="button"
                className="btn btn-outline-warning text-dark btn-lg w-100 w-sm-auto btn-custom"
                onClick={() => handleSave('diretor')}
              >
                Salvar Diretor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormPage
