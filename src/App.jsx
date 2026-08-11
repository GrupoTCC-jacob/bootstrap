import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import FormPage from './FormPage.jsx'
import TablePage from './TablePage.jsx'

function App() {
  const [alunos, setAlunos] = useState([])
  const [professores, setProfessores] = useState([])
  const [coordenadores, setCoordenadores] = useState([])
  const [diretor, setDiretor] = useState([])

  const handleSave = (role, name) => {
    if (role === 'aluno') {
      setAlunos((current) => [...current, name])
      return
    }

    if (role === 'professor') {
      setProfessores((current) => [...current, name])
      return
    }

    if (role === 'coordenador') {
      setCoordenadores((current) => [...current, name])
      return
    }

    if (role === 'diretor') {
      setDiretor((current) => [...current, name])
      return
    }
  }

  return (
    <BrowserRouter>
      <header className="mb-4 shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
          <div className="container-fluid px-4">
            <Link className="navbar-brand fw-bold" to="/">
              FelipeBootstrap
            </Link>
            <div className="navbar-nav ms-auto gap-2">
              <Link className="nav-link text-white" to="/">
                Cadastrar
              </Link>
              <Link className="nav-link text-white" to="/alunos">
                Alunos
              </Link>
              <Link className="nav-link text-white" to="/professores">
                Professores
              </Link>
              <Link className="nav-link text-white" to="/coordenadores">
                Coordenadores
              </Link>
              <Link className="nav-link text-white" to="/diretor">
                Diretor
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<FormPage onSave={handleSave} />} />
        <Route
          path="/alunos"
          element={<TablePage title="Alunos" items={alunos} />}
        />
        <Route
          path="/professores"
          element={<TablePage title="Professores" items={professores} />}
        />
        <Route
          path="/coordenadores"
          element={<TablePage title="Coordenadores" items={coordenadores} />}
        />
        <Route path="/diretor" element={<TablePage title="Diretor" items={diretor} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
