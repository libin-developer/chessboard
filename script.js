let chessboard=document.getElementById("chessboard");

for(i=0;i<8;i++){
    for(j=0;j<8;j++){
    let square=document.createElement('div')
        if((i+j)%2==0){
            square.className="whitebox"
        }else{
            square.className="blackbox"
        }
        chessboard.appendChild(square);
    }
}
