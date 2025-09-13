// Simple typing app logic
const wordsBank = (`lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`.split(' ')).concat(["javascript","function","variable","const","react","node","express","github","customize","keyboard","speed","accuracy","challenge","sentence","typing","practice","monkey","type"]);


const textArea = document.getElementById('textArea');
const input = document.getElementById('input');
const startBtn = document.getElementById('startBtn');
const wpmEl = document.getElementById('wpm');
const accEl = document.getElementById('acc');
const charsEl = document.getElementById('chars');
const timeLeftEl = document.getElementById('timeLeft');
const timeSelect = document.getElementById('time');
const modeSelect = document.getElementById('mode');
const fontSize = document.getElementById('fontSize');
const soundToggle = document.getElementById('soundToggle');
const saveStatsBtn = document.getElementById('saveStats');
const resetStatsBtn = document.getElementById('resetStats');
const usernameInput = document.getElementById('username');
const historyDiv = document.getElementById('history');


let timer = null;
let totalTime = parseInt(timeSelect.value,10);
let timeLeft = totalTime;
let started=false;
let currentWords = [];
let currentIndex=0;
let correctChars = 0;
let typedChars = 0;
let mistakes = 0;


function pickWords(count=50, mode='words'){
if(mode==='sentences'){
const sentences = [
'Practice makes perfect and speed will follow',
'Write clean code and keep learning every day',
'Small consistent steps beat random bursts',
'Push to GitHub and show your work to the world'
];
return sentences.join(' ').split(' ');
}
const out=[];
for(let i=0;i<count;i++) out.push(wordsBank[Math.floor(Math.random()*wordsBank.length)]);
return out;
}


function renderWords(){
textArea.innerHTML='';
currentWords.forEach((w, i)=>{
const span = document.createElement('span');
span.className='word';
span.textContent = w + (i<currentWords.length-1? ' ':'');
textArea.appendChild(span);
});
}


function startTest(){
resetState();
totalTime = parseInt(timeSelect.value,10);
timeLeft = totalTime;
timeLeftEl.textContent = timeLeft;
currentWords = pickWords(80, modeSelect.value);
renderWords();
fontSize.dispatchEvent(new Event('input'));
