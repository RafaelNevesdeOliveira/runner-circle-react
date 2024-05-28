import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Login } from "./pages/Login";
import { Publicar } from "./pages/Publicar";
import { FeedGeral } from "./pages/FeedGeral";
import { Menu } from "./components/Menu";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<Menu />}>
        <Route path="feed" element={<FeedGeral />} />
        <Route path="criar" element={<Publicar />} />
      </Route>
    </Routes>
  );
}
