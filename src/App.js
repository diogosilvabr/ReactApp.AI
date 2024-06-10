import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner, Card } from 'react-bootstrap';

function App() {
  const [model, setModel] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileContent, setFileContent] = useState(null);
  const [fileName, setFileName] = useState('');
  const [showInitialScreen, setShowInitialScreen] = useState(true);

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleAnalyze = async () => {
    if (model && fileContent) {
      setIsAnalyzing(true);
      const parsedData = parseCSV(fileContent);
      await analyzeData(parsedData);
    } else {
      console.error("Nenhum arquivo selecionado ou modelo não escolhido");
    }
  };

  const parseCSV = (data) => {
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const rows = lines.slice(1).filter(line => line.trim() !== '').map(line => line.split(','));
    return { headers, rows };
  };

  const analyzeData = async (data) => {
    console.log('Dados para análise:', data);

    const accuracy = (Math.random() * 100).toFixed(2); // Simula a precisão de 0 a 100%
    const numberOfExamples = data.rows.length;
    const numberOfAttributes = data.headers.length;
    const classes = [...new Set(data.rows.map(row => row[row.length - 1]))];
    const numberOfClasses = classes.length;

    let createdModel = '';
    let algorithmDetails = '';

    if (model === '1') {
      createdModel = 'Modelo de Árvore de Decisão simulado aqui.';
    } else if (model === '3') {
      algorithmDetails = 'Parâmetros do Algoritmo Genético:\n- População: 100\n- Taxa de Mutação: 0.01\n- Função de Fitness: f(x) = x^2';
    }

    setResults({
      accuracy,
      model: model === '1' ? 'Árvore de Decisão' : model === '2' ? 'KNN' : 'Algoritmo Genético',
      numberOfExamples,
      numberOfAttributes,
      numberOfClasses,
      createdModel,
      algorithmDetails
    });
    setIsAnalyzing(false);
    setShowInitialScreen(false);
  };

  const handleBack = () => {
    setResults(null);
    setFileContent(null);
    setFileName('');
    setModel('');
    setShowInitialScreen(true);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">App para análise de dados com IA</h1>
      {showInitialScreen && (
        <Card className="p-4">
          <h1 className="mb-4">Escolha o Modelo</h1>
          <Form.Group as={Row} className="mb-3" controlId="formModelSelect">
            <Form.Label column sm={2}>Modelo</Form.Label>
            <Col sm={10}>
              <Form.Select onChange={handleModelChange}>
                <option value="">Selecione...</option>
                <option value="1">1 - Árvore de Decisão</option>
                <option value="2">2 - KNN</option>
                <option value="3">3 - Algoritmo Genético</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <h1 className="mb-4">Escolha a Base a Ser Analisada</h1>
          <Form.Group as={Row} className="mb-3" controlId="formFile">
            <Form.Label column sm={2}>Arquivo CSV</Form.Label>
            <Col sm={10}>
              <Form.Control type="file" accept=".csv" onChange={handleFileChange} />
            </Col>
          </Form.Group>
          <Button variant="primary" onClick={handleAnalyze} disabled={!model || !fileContent}>
            ANÁLISE
          </Button>
        </Card>
      )}
      {isAnalyzing && (
        <Alert variant="info" className="mt-4">
          <Spinner animation="border" size="sm" /> Analisando...
        </Alert>
      )}
      {!showInitialScreen && results && (
        <Card className="mt-4 p-4">
          <h1>Resultados</h1>
          <p>Modelo: <strong>{results.model}</strong></p>
          <p>Acurácia: <strong>{results.accuracy}%</strong></p>
          <p>Base utilizada: <strong>{fileName}</strong></p>
          <p>Quantidade de Exemplos: <strong>{results.numberOfExamples}</strong></p>
          <p>Quantidade de Classes: <strong>{results.numberOfClasses}</strong></p>
          <p>Quantidade de Atributos: <strong>{results.numberOfAttributes}</strong></p>
          {results.createdModel && (
            <p>Modelo Criado: <strong>{results.createdModel}</strong></p>
          )}
          {results.algorithmDetails && (
            <p>Detalhes do Algoritmo Genético: <pre>{results.algorithmDetails}</pre></p>
          )}
          <Button variant="secondary" onClick={handleBack}>Voltar</Button>
        </Card>
      )}
    </Container>
  );
}

export default App;
