let colourary = ["red" , "aqua" , "purple" , "green" , "cadetblue","khaki" ];

setInterval(() => {
        let firstcolur = colourary.pop();
        colourary.unshift(firstcolur);
    document.getElementById("first").style.backgroundColor=colourary[0];
    document.getElementById("second").style.backgroundColor=colourary[1];
    document.getElementById("third").style.backgroundColor=colourary[2];
    document.getElementById("fourth").style.backgroundColor=colourary[3];
    document.getElementById("fifth").style.backgroundColor=colourary[4];
    document.getElementById("sixth").style.backgroundColor=colourary[5];

} ,1000);