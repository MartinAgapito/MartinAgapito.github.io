import { Player } from "./player.js";
import { Ball } from './ball.js';

const canvas = document.getElementById('myCanvas');
canvas.height = 600;

const score = document.getElementById('score');
let points = 0;


const ctx = canvas.getContext('2d');
const ball = new Ball(700,100,10,10,15,'black')
const player = new Player(400, 550, 200 , 15 , 'red')


function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]    
    }
    return color;
}


animate();

function animate(){
    player.update();
    canvas.width = 800;
    ball.draw(ctx);
    player.draw(ctx);


    if (ball.x + ball.vx > player.x - player.width  / 2 && 
        ball.x + ball.vx < player.x + player.width  / 2  &&
        ball.y + ball.vy > player.y - player.height  / 2 &&
        ball.y + ball.vy < player.y + player.height  / 2
    ) {
        ball.vy = -ball.vy;
        ball.color = getRandomColor();
        player.color = getRandomColor();
        canvas.style.border = `5px solid ${getRandomColor()}`
        points++;
        score.innerHTML = points;
    
    }

    if (ball.y + ball.vy > canvas.height - 10) {
        alert('Perdiste');
        points = 0;
        score.innerHTML = points;
        ball.x = 700;
        ball.y = 100;
        ball.vx = 3;
        ball.vy = 3;
        ball.color = 'red';
        player.color = 'lightgray'
        player.x = 400;
        player.y = 550;
        canvas.style.border = `5px solid ${getRandomColor()}`
    }

    requestAnimationFrame(animate)
}