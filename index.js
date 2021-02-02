import {LEVEL, OBJECT_TYPE} from './setup';

//Dom Element
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const scoreTable = document.querySelector('#start-button');

//Game constants
const POWER_PILL_TIME  = 10000;
const GLOBAL_SPEED = 80; 

//Inital Setup
let score =0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid){

}

function checkCollision(pacman, ghosts){

}

function gameLoop(pacman, ghosts){

}

function startGame(){
    
}