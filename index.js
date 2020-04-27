const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0

}
 function play(e){
     restart.style.display = 'inline-block';
     const playerChoice = e.target.id;
     const computerChoice = getComputerChoice();
     const winner = getWinner(playerChoice,computerChoice);
     showWinner(winner,computerChoice);
 }

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34){
        return 'rock';
    } else if (rand <= 0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getWinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }
  function showWinner(winner,ComputerChoice){
      if (winner === 'player') {
          scoreboard.player++;
          result.innerHTML =  `
          <h1 class="text-win">You Win</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
        `;
      } else if (winner === 'computer') {
          scoreboard.computer++;
          result.innerHTML = `
          <h1 class="text-lose">You Lose</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
        `;
      } else {
          result.innerHTML = `
          <h1>It's A Draw</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
        `;
      }
      
      score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
        `;
    
      modal.style.display = 'block';
    }
    
      
  