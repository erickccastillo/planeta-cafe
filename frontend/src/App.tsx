import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Importa tus layouts y páginas
import MainLayout from "@/layouts/MainLayout";
import NotFound from "@/pages/NotFound";
import Advice from "@/pages/Advice";
import Policy from "@/pages/Policy";

// Importa la nueva landing page tipada
import PlanetaCafeApp from "@/pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Landing Page Principal: Fuera de MainLayout porque ya tiene su propio Header/Footer */}
        <Route path="/" element={<PlanetaCafeApp />} />
        
        {/* Layout general con Header y Footer compartidos para las demás rutas */}
        <Route element={<MainLayout />}>
          {/* Nuevas rutas legales */}
          <Route path="/advice" element={<Advice />} />
          <Route path="/policy" element={<Policy />} />
        </Route>

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;