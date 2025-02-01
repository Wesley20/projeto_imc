import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import NavBar from "./components/NavBar";
import { Box } from "@mui/system";

function App() {
  useEffect(() => {
    // Adicionando o script do Google AdSense na página
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8402001574373191";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      // Limpeza do script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []); // O efeito só é executado uma vez, quando o componente é montado

  return (
    <Router>
      <NavBar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh", // Garante que ocupe 100% da altura da tela
          overflow: "hidden", // Impede o overflow (bar de rolagem)
        }}
      >
        {/* Lado esquerdo */}
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
          {/* <h3>Menu Lateral</h3>
          <ul>
            <li>Opção 1</li>
            <li>Opção 2</li>
          </ul> */}
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
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        {/* Lado direito */}
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
          {/* <h3>Opções Laterais</h3>
          <ul>
            <li>Opção A</li>
            <li>Opção B</li>
          </ul> */}
        </Box>
      </Box>
    </Router>
  );
}

export default App;
