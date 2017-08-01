boxes = [[],[],[]]
var player1 = true
var num = 1
var won = false
for(var i = 0; i < 3; i ++){
    for(var j = 0; j < 3; j ++){
    boxes[i][j] = document.getElementById("box" + num)
    boxes[i][j].addEventListener("click", function(){
        console.log(this.getAttribute("clicked"))
        if(this.getAttribute("clicked")!="true"){
        if(player1){
            this.setAttribute("color", "blue")
        }
        else{
            this.setAttribute("color", "tomato")
        }
        this.setAttribute("clicked", "true")
        checkwin()
        player1 = !player1
        }
    })
    num++
    }
}
    var blue = 0;
    var red = 0;
    var cblue = 0;
    var cred = 0;
    var d1blue = 0;
    var d1red = 0;
    var d2blue = 0;
    var d2red = 0;
function checkwin(){
if(!won){
    for(var k = 0; k < 3; k ++){
        for(var m = 0; m <3; m ++){
            //check rows
            if(boxes[k][m].getAttribute("color")=="tomato"){
                red++
            }
            else if(boxes[k][m].getAttribute("color")=="blue"){
                blue++
            }
            //check cols
            if(boxes[m][k].getAttribute("color")=="tomato"){
                cred++
            }
            else if(boxes[m][k].getAttribute("color")=="blue"){
                cblue++
            }
            
        }
        if(boxes[k][k].getAttribute("color")=="tomato"){
            d1red++
        }
        else if(boxes[k][k].getAttribute("color")=="blue"){
           d1blue++
        }
        if(boxes[2-k][k].getAttribute("color")=="tomato"){
            d2red++
        }
        else if(boxes[2-k][k].getAttribute("color")=="blue"){
           d2blue++
        }
        if(blue==3 ||cblue==3 || d1blue ==3|| d2blue ==3){
            document.getElementById("win").setAttribute("value", "Player 1 Won")
            won = true
        }
        else if(red==3||cred==3||d1red == 3||d2red == 3){
            document.getElementById("win").setAttribute("value", "Player 2 Won")
            won = true
        }
        else{
            red = 0
            blue = 0
            cred = 0
            cblue = 0
        }

    }
    d1red = 0;
    d1blue = 0;
    d2red = 0;
    d2blue = 0;
    
}
}