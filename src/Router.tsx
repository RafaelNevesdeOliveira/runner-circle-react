import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { FeedGeral } from './pages/FeedGeral'

export function Router() {
  return (
    <Routes>
      {/* encadeamento de rotas, bem parecido com o routing module */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />}></Route>
        <Route path="cadastro" element={<Cadastro />}></Route>
      </Route>
        <Route path="feed-geral" element={<FeedGeral />}></Route>
    </Routes>
  )
}
