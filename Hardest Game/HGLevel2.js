// const cvn1 = document.getElementById('board1');// const ctx1 = cvn1.getContext('2d');//// const box = 60;//// let playerX = 1;//coll.// let playerY = 2;//row////// let enemy1 = {//     x : 4,//     y : 1,//     velocity : -0.5,// };// let enemy3 = {//     x : 4,//     y : 3,//     velocity : -0.5,//// };// let enemy2 = {//     x : 13,//     y : 2,//     velocity : 0.5,// };//// let enemy4 = {//     x : 13,//     y : 4,//     velocity : 0.5,//// };//// //3 - green , 2 - grey , 1 - white , 0 - empty//// const gameBoard = [//     [3,3,3,0,0,0,0,0,0,0,0,0,0,2,1,3,3,3],//     [3,3,3,0,2,1,2,1,2,1,2,1,2,1,0,3,3,3],//     [3,3,3,0,1,2,1,2,1,2,1,2,1,2,0,3,3,3],//     [3,3,3,0,2,1,2,1,2,1,2,1,2,1,0,3,3,3],//     [3,3,3,0,1,2,1,2,1,2,1,2,1,2,0,3,3,3],//     [3,3,3,1,2,0,0,0,0,0,0,0,0,0,0,3,3,3],// ];// function square(x , y , color) {//     ctx.fillStyle = color;//     ctx.fillRect(x*box , y*box , box , box);////     ctx.strokeStyle = 'black';//     ctx.strokeRect(x*box , y*box , box , box);// }//// function board() {//     let color;//     for (let r = 0; r < 6 ; r++) {//         for (let c = 0; c < 18; c++) {//             if(gameBoard[r][c] === 3 ){//                 color = '#14E144';//                 square(c , r , color);//             }else if(gameBoard[r][c] === 2){//                 color = 'grey';//                 square(c , r , color);//             }else if(gameBoard[r][c] === 1){//                 color = 'white';//                 square(c , r , color);//             }//         }//     }// }// function drawEnemy(x ,y ){//     ctx.fillStyle = 'blue';//     ctx.beginPath();//     ctx.arc(x*box + box/2 , y*box +box/2, 20 , 0 , Math.PI*2 , true);//     ctx.fill();////     ctx.fillStyle = 'darkblue';//     ctx.arc(x*box + box/2 , y*box +box/2, 20 , 0 , Math.PI*2 , true);//     ctx.stroke();//     // enemy1.num += 1;//     // console.log(enemy1.num);// }//// function draw() {//     board();//     if(playerX >=15 ){//         alert('You win!!');//         playerX = 1;//         playerY = 2;//         cvn.classList.replace('active' , 'passive');//     }else if((playerY === enemy4.y && playerX === enemy4.x) || (playerY === enemy3.y && playerX === enemy3.x) || (playerY === enemy2.y && playerX === enemy2.x) || (playerY === enemy1.y && playerX === enemy1.x)){//         playerX = 1;//         playerY = 2;//     }else{//         square(playerX , playerY , 'red');//     }////     enemyMove();//     drawEnemy(enemy1.x , enemy1.y);//     drawEnemy(enemy2.x , enemy2.y);//     drawEnemy(enemy3.x , enemy3.y);//     drawEnemy(enemy4.x , enemy4.y);// }// function enemyMove(){//     if(enemy3.x === 13){//         enemy3.velocity = -enemy3.velocity;//         enemy3.x +=enemy3.velocity;////     }else if(enemy3.x === 4){//         enemy3.velocity = -enemy3.velocity;//         enemy3.x += enemy3.velocity;////     }else{//         enemy3.x += enemy3.velocity;//     }//     if(enemy1.x === 13){//         enemy1.velocity = -enemy1.velocity;//         enemy1.x +=enemy1.velocity;////     }else if(enemy1.x === 4){//         enemy1.velocity = -enemy1.velocity;//         enemy1.x += enemy1.velocity;////     }else{//         enemy1.x += enemy1.velocity;//     }//     if(enemy2.x === 13){//         enemy2.velocity = -enemy2.velocity;//         enemy2.x +=enemy2.velocity;////     }else if(enemy2.x === 4){//         enemy2.velocity = -enemy2.velocity;//         enemy2.x += enemy2.velocity;//     }else{//         enemy2.x += enemy2.velocity;//     }//     if(enemy4.x === 13){//         enemy4.velocity = -enemy4.velocity;//         enemy4.x +=enemy4.velocity;////     }else if(enemy4.x === 4){//         enemy4.velocity = -enemy4.velocity;//         enemy4.x += enemy4.velocity;////     }else{//         enemy4.x += enemy4.velocity;//     }// }//////////// document.addEventListener('keydown' , control);// function control(event) {//     let key = event.keyCode;//     if(key === 37 ){//         if(gameBoard[playerY][playerX-1] !== 0 && playerX-1 >= 0 ) {//             playerX--;//             draw();//         }//     }else if (key === 38 ){//         if(gameBoard[playerY-1][playerX] !== 0 && playerY-1 >= 0 ) {//             playerY--;//             draw();//         }//     }else if(key === 39 ){//         if(gameBoard[playerY][playerX+1] !== 0 && playerX < 18){//             playerX++;//             draw();//         }////     }else if(key === 40 ){//         if(gameBoard[playerY+1][playerX] !== 0 && playerY < 6) {//             playerY++;//             draw();//         }//     }// }//// let game = setInterval(draw , 100);// const cvn = document.getElementById('board1');// const ctx = cvn.getContext('2d');//// const box = 60;// document.write('fdfcvbnmbvcsdfbndgfbvsdfbgffgb ');