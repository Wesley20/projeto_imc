import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import NavBar from "./components/NavBar";
import { Box } from "@mui/system";
import AdSense from 'react-adsense';

function App() {
  return (
    <Router>
      <NavBar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh", // Garante que ocupe 100% da altura da tela
          overflow: "hidden", // Impede o overflow (barra de rolagem)
        }}
      >
        {/* Lado esquerdo com anúncio */}
        <Box
          sx={{
            width: 250, // Largura fixa
            backgroundColor: "#9c9c9c",
            borderRight: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            padding: 2,
            overflowY: "auto", // Permite rolar o conteúdo dentro do lado esquerdo se necessário
          }}
        >
          <AdSense.Google
            client="ca-pub-8402001574373191"
            slot="9337946346"
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
          />
        </Box>

        {/* Meio - Conteúdo Principal */}
        <Box
          sx={{
            flexGrow: 1, // Ocupa o espaço restante
            backgroundColor: "#c9c9c9",
            overflowY: "auto", // Permite rolar o conteúdo dentro do centro se necessário
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        {/* Lado direito com anúncio */}
        <Box
          sx={{
            width: 250, // Largura fixa
            backgroundColor: "#9c9c9c",
            borderLeft: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            padding: 2,
            overflowY: "auto", // Permite rolar o conteúdo dentro do lado direito se necessário
          }}
        >
            <AdSense.Google
            client="ca-pub-8402001574373191"
            slot="9337946346"
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
            />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
