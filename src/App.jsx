import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import NavBar from "./components/NavBar";
import { Box } from "@mui/system";

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
          {/* Bloco de Anúncio no lado esquerdo */}
          <ins
            className="adsbygoogle"
            style={{ display: "block", marginBottom: "20px" }}
            data-ad-client="ca-pub-8402001574373191"
            data-ad-slot="9337946346"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
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
          {/* Bloco de Anúncio no lado direito */}
          <ins
            className="adsbygoogle"
            style={{ display: "block", marginBottom: "20px" }}
            data-ad-client="ca-pub-8402001574373191"
            data-ad-slot="9337946346"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
