// console.log("connected");

//restart game button

var restart =document.querySelector("#b")

//grabs all the squares

var squares = document.querySelectorAll('td')

//clear all the squares

function clearBoard(){
    for(var i=0;i<squares.length;i++)
    squares[i].textContent = '';
}

restart.addEventListener('click',clearBoard)

//check the square marker
var ans='';
function changeMarker(){
    
    if(ans==='')
    {this.textContent='X';ans='X';}
    else if(ans==='X')
    {this.textContent='O';ans='O'}
    else if(ans==='O'){
        this.textContent='X';
        ans='X';
    }
}


//for loop to add event listeners to each square
for( var i=0;i<squares.length;i++)
squares[i].addEventListener('click',changeMarker)





