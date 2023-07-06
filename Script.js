async function getData() {
    const playerName = document.getElementById('playerNameInput').value;
    const url = `https://nba-stats-db.herokuapp.com/api/playerdata/name/${encodeURIComponent(playerName)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      // fazer algo com os dados retornados
      console.log(data);
    } catch (error) {
      // lidar com erros
      console.error('Ocorreu um erro:', error);
    }
  }