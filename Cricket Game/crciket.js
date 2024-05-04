let showresult;
    let mychoice ; 
    let computerChoice ;
    function randomChoice() {
    let random = Math.random() * 3 ;
    if(random<1 && random>0) { computerChoice = 'bat'; }
else if (random>1 && random <2) { computerChoice = 'ball';}
else {
    computerChoice = 'stump';
}
   
console.log(`comppputer has taken  ` + computerChoice)}

let score = {
    win:0,
    lose:0,
    tied:0 
}

function engine()
{
if (computerChoice =='bat' && mychoice =='ball') {  showresult=`U lose`;score.lose++}
else if (computerChoice =='bat' && mychoice =='stump')  {showresult=`U win`;score.win++}
else if (computerChoice =='ball' && mychoice =='bat')  {showresult=`U win`; score.win++}
else if (computerChoice =='ball' && mychoice =='stump')  { showresult=`U lose` ;score.lose++}
else if (computerChoice =='stump' && mychoice =='ball')  { showresult=`U win`;score.win++}
else if (computerChoice =='stump' && mychoice =='bat')  {showresult=`U lose`;  score.lose++}

else  showresult=`u have tied`;score.tied++;
} 
function result() {
 localStorage.setItem('Score',JSON.stringify(score)) ;
 document.querySelector('#compCh').innerText = `Computer has choosen  ${computerChoice}`;
 document.querySelector('#MYmove').innerText = `U have  choosen  ${mychoice}`;   
 document.querySelector('#Result').innerText = `SO ${showresult} `
 document.querySelector('#Score').innerText = `Won:${score.win}   Lose:${score.lose}   Tied:${score.tied}`

}

function reset() {
  localStorage.clear ;
  score.win = 0;
  score.lose = 0;
  score.tied = 0;
  document.querySelector('#compCh').innerText = ``;
 document.querySelector('#MYmove').innerText = ``;   
 document.querySelector('#Result').innerText = ` `;
 document.querySelector('#Score').innerText = `Won:${score.win}   Lose:${score.lose}   Tied:${score.tied}`
}