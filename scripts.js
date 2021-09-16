var currentp = null
var player_x = "x"
var player_o = "o"

var score = 0;

var btnElement1 = document.getElementById("1")
var btnElement2 = document.getElementById("2")
var btnElement3 = document.getElementById("3")
var btnElement4 = document.getElementById("4")
var btnElement5 = document.getElementById("5")
var btnElement6 = document.getElementById("6")
var btnElement7 = document.getElementById("7")
var btnElement8 = document.getElementById("8")
var btnElement9 = document.getElementById("9")

function Start()
{
    let starttext = document.getElementById("start-text").style
    let starttable = document.getElementById("start-table").style
    starttext.display = "none";
    starttable.display = "none";
    return PSelect();
}

function Select()
{
    let selection = document.getElementById("sel-table").style
    let seltext = document.getElementById("sel-text").style

    selection.display = "table";
    seltext.display = "table";
}

function Game()
{
    let gamehidden = document.getElementById("table-btn").style
    let selection = document.getElementById("sel-table").style
    let seltext = document.getElementById("sel-text").style
    let gametext = document.getElementById("game-text").style
    let playertext = document.getElementById("player-text").style
    let rrbtn = document.getElementById("rr-btn").style

    gamehidden.display = "table";
    selection.display = "none";
    seltext.display = "none";
    gametext.display = "table";
    playertext.display = "table";
    rrbtn.display = "table";
}

function PSelect(player)
{
    currentp = player;
    let selp = document.getElementById("player-text")
    selp.innerHTML = "Current Player: " + player;
    return currentp;
}

function Draw(box)
{
    document.getElementById(box).innerHTML = currentp;
    document.getElementById(box).style.cursor = "no-drop";
    document.getElementById(box).style.backgroundColor = "grey";

    document.getElementById(box).disabled = true;
}

function Row()
{
    let btn1 = document.getElementById("1").innerHTML;
    let btn2 = document.getElementById("2").innerHTML;
    let btn3 = document.getElementById("3").innerHTML;
    let btn4 = document.getElementById("4").innerHTML;
    let btn5 = document.getElementById("5").innerHTML;
    let btn6 = document.getElementById("6").innerHTML;
    let btn7 = document.getElementById("7").innerHTML;
    let btn8 = document.getElementById("8").innerHTML;
    let btn9 = document.getElementById("9").innerHTML;

    if (btn1 == currentp && btn1 == btn2 && btn3 == btn1 && btn1 != "" || 
        btn4 == currentp && btn4 == btn5 && btn6 == btn4 && btn4 != "" || 
        btn7 == currentp && btn7 == btn8 && btn9 == btn7 && btn7 != "" ||
        btn1 == currentp && btn1 == btn4 && btn7 == btn1 && btn1 != "" || 
        btn2 == currentp && btn2 == btn5 && btn8 == btn5 && btn2 != "" || 
        btn3 == currentp && btn3 == btn6 && btn9 == btn3 && btn3 != "" || 
        btn1 == currentp && btn1 == btn5 && btn9 == btn1 && btn1 != "" || 
        btn3 == currentp && btn3 == btn5 && btn7 == btn3 && btn3 != "")
        {

        document.getElementById("game-text").innerHTML = "Winner: " + currentp.toUpperCase();
        document.getElementById("player-text").style.color = "transparent";
        
        Score(currentp);
        DisableBtn();
    }
}

function rr_Restart()
{
    EnableBtn();
}

function rr_Reset()
{
    window.location.reload();
}

function DisableBtn()
{
    btnElement1.disabled = true;      btnElement1.style.cursor = "no-drop";      btnElement1.style.backgroundColor = "grey";
    btnElement2.disabled = true;      btnElement2.style.cursor = "no-drop";      btnElement2.style.backgroundColor = "grey";
    btnElement3.disabled = true;      btnElement3.style.cursor = "no-drop";      btnElement3.style.backgroundColor = "grey";
    btnElement4.disabled = true;      btnElement4.style.cursor = "no-drop";      btnElement4.style.backgroundColor = "grey";
    btnElement5.disabled = true;      btnElement5.style.cursor = "no-drop";      btnElement5.style.backgroundColor = "grey";
    btnElement6.disabled = true;      btnElement6.style.cursor = "no-drop";      btnElement6.style.backgroundColor = "grey";
    btnElement7.disabled = true;      btnElement7.style.cursor = "no-drop";      btnElement7.style.backgroundColor = "grey";
    btnElement8.disabled = true;      btnElement8.style.cursor = "no-drop";      btnElement8.style.backgroundColor = "grey";
    btnElement9.disabled = true;      btnElement9.style.cursor = "no-drop";      btnElement9.style.backgroundColor = "grey";
}

function EnableBtn()
{
    btnElement1.disabled = false;      btnElement1.style.cursor = "";      btnElement1.style.backgroundColor = "transparent";      btnElement1.innerHTML = "";
    btnElement2.disabled = false;      btnElement2.style.cursor = "";      btnElement2.style.backgroundColor = "transparent";      btnElement2.innerHTML = "";
    btnElement3.disabled = false;      btnElement3.style.cursor = "";      btnElement3.style.backgroundColor = "transparent";      btnElement3.innerHTML = "";
    btnElement4.disabled = false;      btnElement4.style.cursor = "";      btnElement4.style.backgroundColor = "transparent";      btnElement4.innerHTML = "";
    btnElement5.disabled = false;      btnElement5.style.cursor = "";      btnElement5.style.backgroundColor = "transparent";      btnElement5.innerHTML = "";
    btnElement6.disabled = false;      btnElement6.style.cursor = "";      btnElement6.style.backgroundColor = "transparent";      btnElement6.innerHTML = "";
    btnElement7.disabled = false;      btnElement7.style.cursor = "";      btnElement7.style.backgroundColor = "transparent";      btnElement7.innerHTML = "";
    btnElement8.disabled = false;      btnElement8.style.cursor = "";      btnElement8.style.backgroundColor = "transparent";      btnElement8.innerHTML = "";
    btnElement9.disabled = false;      btnElement9.style.cursor = "";      btnElement9.style.backgroundColor = "transparent";      btnElement9.innerHTML = "";

    document.getElementById("game-text").innerHTML = "Tic Tac Toe";
    document.getElementById("player-text").style.color = "white";
}

function Score(player)
{
    return;
}

function ChangePlayer()
{
    if (currentp == player_x)
    {
        currentp = player_o;
        document.getElementById("player-text").innerHTML = "Current Player: " + currentp;
        return currentp;
    }

    else if (currentp == player_o)
    {
        currentp = player_x;
        document.getElementById("player-text").innerHTML = "Current Player: " + currentp;
        return currentp;
    }
}