var array = new Array();
function board(board_size){  //display a blank board
    array[0] = new Array();
    for(var i=0; i<board_size; i++){
        array[0][0] = "     ";
        if((0<=i)&&(i<10)){
            array[0][i+1] = "   "+(i+1);   
        }
        else if((10<=i)&&(i<99)){
            array[0][i+1] = "  "+(i+1);   
        }
        else if((99<=i)&&(i<1000)){
            array[0][i+1] = " "+(i+1);   
        }      
        else console.log("error!");
    }
    console.log(array[0].join(""));
    
    for(var i=0; i<board_size; i++){
        array[2*i+1] = new Array();
        for(var k=0; k<board_size+1; k++){
            if((0<=i)&&(i<9)){
                array[2*i+1][0] = "  "+(i+1);
            }
            else if((9<=i)&&(i<99)){
                array[2*i+1][0] = " "+(i+1);
            }
            else if((99<=i)&&(i<999)){
                array[2*i+1][0] = i+1;
            }
            else console.log("error");
            array[2*i+1][k+1] = "   |";
        }
        console.log(array[2*i+1].join(""));
           array[2*i+2] = new Array();
        for(var j=0; j<board_size+1; j++){
 
            array[2*i+2][0] = "   ";
            array[2*i+2][j+1] = "---+";
            }
           console.log(array[2*i+2].join(""));
    } 
}

function rule(array,row,column,player,win_count,board_size,used_cell){ //This is the rule to identify is the game result is tie or somebody wins.
    var temp = 0;
    if(used_cell==board_size*board_size) console.log("Tie!!!"); //When all the array cells have been used, but still no one wins, then the game ends up as a tie.
    else{
        var m1 = 0;  //This loop is to identify if the player has bingo a line from northwest to southeast.
        var n1 =0;
        for(var i=0; i<win_count; i++){   
            if(array[row+i,column+i]==player){
                m1 = m1+1;
            }
            else break;
        }
        for(var i=0; i<win_count; i++){  
            if(arrat[row-i,column-i]==player){
                n1 = n1+1;
            }
            else break;
        }
        if ((m1+n1)>=win_count){
            console.log(player+" win!");
            return "win!";
        }
        
        else {
            var m2 = 0;  //This loop is to identify if the player has bingo a line from northeast to southwest.
            var n2 = 0;
            for(var i=0; i<win_count; i++){
                if(array[row-i,column+i]==player){
                    m2 = m2+1;
                }
                else break;
            }
            for(var i=0; i<win_count; i++){
                if(arrat[row+i,column-i]==player){
                    n2 = n2+1;
                }
                else break
            }
            if ((m2+n2)>=win_count){
                console.log(player+" win!");
                return "win!"
            }
        
            else {
                var m3 = 0;  //This loop is to identify if the player has bingo a horizontal line.
                var n3 = 0;
                for(var i=0; i<win_count; i++){
                    if(array[row-i,column]==player){
                        m3 = m3+1;
                    }
                    else break;
                }
                for(var i=0; i<win_count; i++){
                    if(arrat[row+i,column]==player){
                        n3 = n3+1;
                    }
                    else break;
                }
                if ((m3+n3)>=win_count){
                    console.log(player+" win!");
                    return "win!";
                }
        
                else {
                    var m4 = 0;  //This loop is to identify if the player has bingo a vertical line.
                    var n4 = 0;
                    for(var i=0; i<win_count; i++){
                        if(array[row,column+i]==player){
                            m4 = m4+1;
                        }
                        else break;           
                    }
                    for(var i=0; i<win_count; i++){
                        if(arrat[row,column-i]==player){
                            n4 = n4+1;
                        }
                        else break;
                    }
                    if ((m4+n4)>=win_count){
                        console.log(player+" win!");
                        return "win!";
                    }
                    else 
                        break;
                }     
            }   
        }

    }    
}

var readlineSync = require('readline-sync');
var save = readlineSync.question('You want to continue the last saved board? yes or no? :');
if(save=="yes"){
    // Sourced from https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs/
            fs = require('fs')
            fs.readFile('save.txt', 'utf8', function (err,text) {
            if (err) {
                return console.log(err);
            }
            console.log(text);
        });
    }
    else break;

var readlineSync = require('readline-sync');
var player_num = readlineSync.question('How many players? :');
console.log('the players number is ' + player_num);

var player = new Array();
if((2<=player_num)&&(player_num<=26)){
    player[0] = "X";
    player[1] = "O";
    if(player_num<=16){
        for(var i=2; i<player_num; i++){
            player[i] = String.fromCharCode(65+i-2);
        }          
    }
    else if((16<player_num)&&(player_num<=24)){
        for(var i=2; i<16; i++){
            player[i] = String.fromCharCode(65+i-2);
        }    
        for(var i=16;i<player_num; i++){
            player[i] = String.fromCharCode(65+i-1);
        }
    }
    else if(player_num==25){
        for(var i=2; i<16; i++){
            player[i] = String.fromCharCode(65+i-2);
        }    
        for(var i=16;i<24; i++){
            player[i] = String.fromCharCode(65+i-1);
        }
        player[24] = "Y";
    }
    else{
        for(var i=2; i<16; i++){
            player[i] = String.fromCharCode(65+i-2);
        }    
        for(var i=16;i<24; i++){
            player[i] = String.fromCharCode(65+i-1);
        }
        player[24] = "Y";
        player[25] = "Z";
    }
} 
else console.log("error!");

var readlineSync = require('readline-sync');
var board_size = readlineSync.question('What is the length of board line? :');
console.log('the board line length is ' + board_size);

if((3<=board_size)&&(board_size<=999)) board(board_size);
else console.log("error!");

var readlineSync = require('readline-sync');
var win_count = readlineSync.question('What is the win sequence count? :');
console.log('the win sequence count is ' + win_count);

if(win_count<=board_size) break;
else console.log("error!");

var size = board_size*board_size;
var used_cell = 0;
for(var i=0; i<Math.ceil(size/player_num); i++){
    for(var n=0; n<player_num; n++){

        var readlineSync = require('readline-sync');
        var row = readlineSync.question('What is the row number that you want to place your chess? :');
        console.log('the row number is ' + row);

        var readlineSync = require('readline-sync');
        var column = readlineSync.question('What is the column number that you want to place your chess? :');
        console.log('the column number is ' + column);

            array[2*row+1,column] = player[n];
            
            used_cell = used_cell+1;
            var result = rule(array,row,column,player[n],win_count,board_size,used_cell);
            if(result=="win!") {console.log("Game over!");break;}
            else continue;
        }
}
