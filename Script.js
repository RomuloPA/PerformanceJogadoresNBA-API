async function getData() {
    const playerName = document.getElementById('playerNameInput').value;
    const url = `https://nba-stats-db.herokuapp.com/api/playerdata/name/${encodeURIComponent(playerName)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Converter os dados em um array usando Object.values()
      const dataArray = Object.values(data);
  
      // Verificar se o array de temporadas existe
      if (Array.isArray(dataArray[3])) {
        const seasons = dataArray[3];
  
        seasons.forEach(seasonData => {
          const season = seasonData.season;
          const age = seasonData.age;
          const team = seasonData.team;
          const AST = seasonData.AST;
          const TRB = seasonData.TRB;
          const PTS = seasonData.PTS;
          const ft_percent = seasonData.ft_percent;
          const two_percent = seasonData.two_percent;
          const three_percent = seasonData.three_percent;
          const games = seasonData.games;
  
          // elemento <p> para exibir a temporada
          const seasonParagraph = document.createElement('p');
          seasonParagraph.textContent = `Temporada: ${season}`;

          // elemento <p> para exibir a idade
          const ageParagraph = document.createElement('p');
          ageParagraph.textContent = `Idade: ${age}`;

          // elemento <p> para exibir a sigla do time
          const teamParagraph = document.createElement('p');
          teamParagraph.textContent = `Time: ${team}`;

          // elemento <p> para exibir o total de assistências
          const astParagraph = document.createElement('p');
          astParagraph.textContent = `Assistências: ${AST}`;

          // elemento <p> para exibir o total de rebotes
          const trbParagraph = document.createElement('p');
          trbParagraph.textContent = `Rebotes: ${TRB}`;

          // elemento <p> para exibir o total de pontos
          const ptsParagraph = document.createElement('p');
          ptsParagraph.textContent = `Pontos: ${PTS}`

          // elemento <p> para exibir o % acerto lances livres
          const ft_percentParagraph = document.createElement('p');
          ft_percentParagraph.textContent = `% acerto lances livres: ${ft_percent}`

          // elemento <p> para exibir o % acerto lances de 2 pontos
          const two_percentParagraph = document.createElement('p');
          two_percentParagraph.textContent = `% acerto lances de 2 pontos: ${two_percent}`

          // elemento <p> para exibir o % acerto lances de 3 pontos
          const three_percentParagraph = document.createElement('p');
          three_percentParagraph.textContent = `% acerto lances de 3 pontos: ${three_percent}`
  
          // elemento <p> para exibir o número de jogos
          const gamesParagraph = document.createElement('p');
          gamesParagraph.textContent = `Número de jogos: ${games}`;
  
          // Adicionar os elementos ao container no documento HTML
          const container = document.getElementById('container-data');
          container.appendChild(seasonParagraph);
          container.appendChild(ageParagraph);
          container.appendChild(teamParagraph);
          container.appendChild(astParagraph);
          container.appendChild(trbParagraph);
          container.appendChild(ptsParagraph);
          container.appendChild(ft_percentParagraph);
          container.appendChild(two_percentParagraph);
          container.appendChild(three_percentParagraph);
          container.appendChild(gamesParagraph);

          // ...
        });
      } else {
        console.log('Array de temporadas não encontrado');
      }
  
    } catch (error) {
      console.error('Ocorreu um erro:', error);
    }
  }