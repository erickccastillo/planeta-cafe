

// Importa las nuevas páginas legales
import Advice from "@/pages/Advice";
import Policy from "@/pages/Policy";

const queryClient = new QueryClient();

const App = () => (

      <BrowserRouter>
        <Routes>
          {/*  Layout con Header (y ahora Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
                   
            {/* Nuevas rutas legales */}
            <Route path="/advice" element={<Advice />} />
            <Route path="/policy" element={<Policy />} />
          </Route>

          {/*  404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

);

export default App;