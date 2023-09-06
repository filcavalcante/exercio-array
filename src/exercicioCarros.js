import cars from './carros.js';

export function createTable(message, headers, data) {
  const outputDiv = document.getElementById("output");
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "40%";

  const caption = table.createCaption();
  caption.textContent = message;
  caption.style.fontSize = "26px";
  caption.style.marginBottom = "15px";
  caption.style.marginTop = "30px";

  const thead = table.createTHead();
  const headerRow = thead.insertRow();

  headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  const tbody = table.createTBody();

  data.forEach(rowData => {
    const row = tbody.insertRow();
    rowData.forEach(cellData => {
      const cell = row.insertCell();
      cell.textContent = cellData;
      cell.style.border = "1px solid #000";
      cell.style.padding = "5px";
      cell.style.textAlign = "center";
    });
  });

  outputDiv.appendChild(table);
}

// Função para gerar a tabela de carros que utilizam apenas gasolina
export function generateCarrosGasolinaTable() {
  const carrosGasolina = cars.filter(carro => carro.combustivel.includes('gasolina') && !carro.combustivel.includes('etanol'));
  return createTableString('Carros que utilizam apenas gasolina:', ["Marca", "Modelo", "Ano", "Combustível", "Cor", "KM", "ID"], 
    carrosGasolina.map(car => [car.marca, car.modelo, car.ano, car.combustivel.join(" e "), car.cor, car.km, car.id]));
}

// Função para gerar a tabela de carros que utilizam apenas etanol
export function generateCarrosEtanolTable() {
  const carrosEtanol = cars.filter(carro => carro.combustivel.includes('etanol') && !carro.combustivel.includes('gasolina'));
  return createTableString('Carros que utilizam apenas etanol:', ["Marca", "Modelo", "Ano", "Combustível", "Cor", "KM", "ID"], 
    carrosEtanol.map(car => [car.marca, car.modelo, car.ano, car.combustivel.join(" e "), car.cor, car.km, car.id]));
}

// Função para gerar a tabela de carros que utilizam ambos combustíveis
export function generateCarrosAmbosTable() {
  const carrosAmbos = cars.filter(carro => carro.combustivel.includes('gasolina') && carro.combustivel.includes('etanol'));
  return createTableString('Carros que utilizam ambos:', ["Marca", "Modelo", "Ano", "Combustível", "Cor", "KM", "ID"], 
    carrosAmbos.map(car => [car.marca, car.modelo, car.ano, car.combustivel.join(" e "), car.cor, car.km, car.id]));
}

// Função para gerar a tabela de carros preto/branco com menos de 5000 km
export function generateCarrosPretoBrancoKmMenor5000Table() {
  const carrosPretoBrancoKmMenor5000 = cars.filter(carro => (carro.cor === 'preto' || carro.cor === 'branco') && carro.km < 5000);
  return createTableString('Carros preto/branco com menos de 5000 km:', ["Marca", "Modelo", "Ano", "Combustível", "Cor", "KM", "ID"], 
    carrosPretoBrancoKmMenor5000.map(car => [car.marca, car.modelo, car.ano, car.combustivel.join(" e "), car.cor, car.km, car.id]));
}

// Função para gerar a tabela de carros ordenados por km crescente e ano decrescente
export function generateCarrosOrdenadosTable() {
  const carrosOrdenados = cars.slice().sort((a, b) => {
    if (a.km === b.km) {
      return b.ano - a.ano;
    }
    // Verifica se a propriedade 'combustível' está definida antes de acessá-la
    const combustivelA = a.combustivel?.join(" e ") || '';
    const combustivelB = b.combustivel?.join(" e ") || '';
    return combustivelA.localeCompare(combustivelB);
  });
  return createTableString('Carros ordenados por km crescente e ano decrescente:', ["Marca", "Modelo", "Ano", "Combustível", "Cor", "KM", "ID"], 
    carrosOrdenados.map(car => [car.marca, car.modelo, car.ano, car.combustivel?.join(" e ") || '', car.cor, car.km, car.id]));
}

// Função para gerar a tabela de carros ordenados por ID em ordem crescente
export function generateCarrosOrdenadosPorIDTable() {
  const carrosOrdenadosPorID = [...cars];
  
  // Certifique-se de que a propriedade 'id' está definida e é um número inteiro
  carrosOrdenadosPorID.forEach(carro => {
    carro.id = parseInt(carro.id) || 0; // Definir como 0 se 'id' não for um número
  });

  carrosOrdenadosPorID.sort((a, b) => a.id - b.id);

  return createTableString('Carros ordenados por ID (Crescente):', ["ID", "Marca", "Modelo", "Ano", "Combustível", "Cor", "KM"], 
    carrosOrdenadosPorID.map(car => [car.id, car.marca, car.modelo, car.ano, car.combustivel?.join(" e ") || '', car.cor, car.km]));
}

// Função para gerar a tabela de anos de fabricação dos carros em ordem decrescente
export function generateAnosDosCarrosTable() {
  const anosDosCarros = cars.map(car => [car.ano, car.marca, car.modelo]);
  anosDosCarros.sort((a, b) => b[0] - a[0]);
  return createTableString('Ano de Fabricação dos Carros:', ["Ano", "Marca", "Modelo"], anosDosCarros);
}

// Função para calcular a soma de KM de todos os carros
export function generateSomaKMDosCarrosTable() {
  const somaKM = cars.reduce((acc, car) => acc + car.km, 0);
  return createTableString('Soma de KM de Todos os Carros:', ["Total de KM"], [[somaKM]]);
}

// Função para criar uma tabela HTML e retorná-la como string
export function createTableString(message, headers, data) {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "40%";

  const caption = table.createCaption();
  caption.textContent = message;
  caption.style.fontSize = "26px";
  caption.style.marginBottom = "15px";
  caption.style.marginTop = "30px";

  const thead = table.createTHead();
  const headerRow = thead.insertRow();

  headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  const tbody = table.createTBody();

  data.forEach(rowData => {
    const row = tbody.insertRow();
    rowData.forEach(cellData => {
      const cell = row.insertCell();
      cell.textContent = cellData;
      cell.style.border = "1px solid #000";
      cell.style.padding = "5px";
      cell.style.textAlign = "center";
    });
  });

  return table.outerHTML;
}

new Vue({
  el: '#app',
  data: {
    tabelas: '', // Armazenará as tabelas geradas
  },
  created() {
    // Chame as funções para gerar as tabelas aqui e adicione os resultados à variável 'tabelas'
    this.tabelas += generateCarrosGasolinaTable();
    this.tabelas += generateCarrosEtanolTable();
    this.tabelas += generateCarrosAmbosTable();
    this.tabelas += generateCarrosPretoBrancoKmMenor5000Table();
    this.tabelas += generateCarrosOrdenadosTable();
    this.tabelas += generateCarrosOrdenadosPorIDTable();
    this.tabelas += generateAnosDosCarrosTable();
    this.tabelas += generateSomaKMDosCarrosTable();
  }
});