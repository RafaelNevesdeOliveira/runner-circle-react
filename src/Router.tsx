import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
// import { Home } from './pages/Home'
// import { History } from './pages/History'
// import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      {/* encadeamento de rotas, bem parecido com o routing module */}
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="history" element={<History />}></Route> */}
      </Route>
    </Routes>
  )
}
