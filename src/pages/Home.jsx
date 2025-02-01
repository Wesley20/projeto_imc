import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Grid, Card, CardContent } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState("");
  const [isAdulto, setIsAdulto] = useState(true); // Para verificar se é adulto ou criança
  const [grau, setGrau] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para calcular o IMC
  const calcularIMC = () => {
    if (!peso || !altura || !idade) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const imcValor = peso / ((altura * altura) / 10000);
    
    setImc(imcValor.toFixed(2));
    console.log(imcValor);
    
    // Classificação do IMC
    let classificationText = "";
    let descriptionText = "";

    if (isAdulto) {
      if (imcValor < 18.5) {
        classificationText = "Abaixo do peso";
        descriptionText = "Você está abaixo do peso ideal. É importante manter uma alimentação equilibrada e, se necessário, consultar um médico ou nutricionista.";
        setGrau("#ffe600");
      } else if (imcValor >= 18.5 && imcValor <= 24.9) {
        classificationText = "Peso normal";
        descriptionText = "Parabéns! Seu peso está dentro da faixa considerada saudável. Continue com hábitos alimentares saudáveis e praticando atividades físicas regularmente.";
        setGrau("#13c800");
      } else if (imcValor >= 25 && imcValor <= 29.9) {
        classificationText = "Sobrepeso";
        descriptionText = "Você está com sobrepeso. Embora o risco de doenças aumente nesta faixa, mudanças no estilo de vida, como uma alimentação saudável e exercícios, podem ajudar.";
        setGrau("#ffe600");
      } else if (imcValor >= 30 && imcValor <= 34.9) {
        classificationText = "Obesidade grau 1";
        descriptionText = "A obesidade grau 1 indica que você tem um risco maior para problemas de saúde. Mudanças no estilo de vida são necessárias, incluindo uma dieta balanceada e exercícios regulares.";
        setGrau("#ffa600");
      } else if (imcValor >= 35 && imcValor <= 39.9) {
        classificationText = "Obesidade grau 2";
        descriptionText = "Obesidade grau 2 apresenta risco significativo de doenças graves, como doenças cardíacas. Consultar um médico é altamente recomendado para um plano de tratamento.";
        setGrau("#ff6f00");
      } else {
        classificationText = "Obesidade grau 3 (obesidade mórbida)";
        descriptionText = "Você está em uma condição de obesidade mórbida, com risco muito alto para diversas doenças graves. O tratamento médico urgente é necessário.";
        setGrau("#ff0000");
      }
    } else {
      if (imcValor < 14) {
        classificationText = "Abaixo do peso";
        descriptionText = "Seu IMC está abaixo do ideal. Considere consultar um pediatra ou médico para avaliar o crescimento e a saúde.";
        setGrau("#ffe600");
      } else if (imcValor >= 14 && imcValor <= 17) {
        classificationText = "Peso normal";
        descriptionText = "Peso saudável para sua faixa etária. Continue com uma alimentação balanceada e hábitos saudáveis!";
        setGrau("#1aff00");
      } else {
        classificationText = "Sobrepeso";
        descriptionText = "Cuidado, seu IMC está acima do recomendado para a sua faixa etária. Procure orientação médica e adote hábitos saudáveis.";
        setGrau("#ffe600");
      }
    }

    setClassification(classificationText);
    setDescricao(descriptionText);
  };

  return (
    <Container maxWidth="sm" style={{ padding: "14px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Calculadora IMC
      </Typography>

      <Card style={{ padding: "14px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <CardContent>
          <Grid container spacing={1}>
            {/* Campo para Peso */}
            <Grid item xs={12}>
              <TextField
                label="Peso (kg)"
                variant="outlined"
                fullWidth
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                margin="normal"
                InputProps={{ style: { fontSize: "1rem" } }}
              />
            </Grid>

            {/* Campo para Altura */}
            <Grid item xs={12}>
              <TextField
                label="Altura (m)"
                variant="outlined"
                fullWidth
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                margin="normal"
                InputProps={{ style: { fontSize: "1rem" } }}
              />
            </Grid>

            {/* Campo para Idade */}
            <Grid item xs={12}>
              <TextField
                label="Idade (anos)"
                variant="outlined"
                fullWidth
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                type="number"
                margin="normal"
                InputProps={{ style: { fontSize: "1rem" } }}
              />
            </Grid>

            {/* Seleção de Adulto ou Criança */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth margin="normal">
                <InputLabel>Tipo</InputLabel>
                <Select
                  value={isAdulto ? "adulto" : "criança"}
                  onChange={(e) => {
                    setIsAdulto(e.target.value === "adulto");
                  }}
                  label="Tipo"
                >
                  <MenuItem value="adulto">Adulto</MenuItem>
                  <MenuItem value="criança">Criança</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Seleção de Sexo */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom >Sexo</Typography>
              <FormControl component="fieldset" fullWidth margin="normal">
                <RadioGroup
                  row
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                >
                  <FormControlLabel value="masculino" control={<Radio />} label="Homem" />
                  <FormControlLabel value="feminino" control={<Radio />} label="Mulher" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Botão de Cálculo */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={calcularIMC}
                style={{ padding: "6px 0", fontSize: "1rem" }}
              >
                Calcular IMC
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Resultado */}
      {imc && (
        <Typography variant="h5" align="center" style={{ padding: "12px", backgroundColor: grau, color: "#fff" }}>
          IMC: {imc} - {classification}
        </Typography>
      )}

      {/* Descrição adicional */}
      {descricao && (
        <Typography variant="h6" align="center" style={{ padding: "12px", backgroundColor: '#e7e7e7' }}>
          {descricao}
        </Typography>
      )}
    </Container>
  );
};

export default Home;
