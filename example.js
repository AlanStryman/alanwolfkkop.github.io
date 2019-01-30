while(true){
    var user = prompt("剪刀!石頭!!石頭!!!(X 布!!!");
    var computer = Math.random();

    if (computer < 0.33) {
        computer = "剪刀";
    }
    else if (computer <= 0.67) {
        computer = "石頭";
    }
    else {
        computer = "布";
    }
    
    if (user == computer){
        alert("電腦出" + computer + "，所以平手!");
    }
    else if (user == "剪刀") {
        if (computer == "布") {
            alert("電腦出" + computer + "，所以玩家獲勝");
        }
        else {
            alert("電腦出" + computer + "，所以電腦獲勝");
        }
    }
    else if (user == "石頭") {
        if (computer == "剪刀"){
            alert("電腦出" + computer + "，所以玩家獲勝");
        }
        else {
            alert("電腦出" + computer + "，所以電腦獲勝");
        }
    }
    else {
        if (computer == "剪刀") {
            alert("電腦出" + computer + "，所以電腦獲勝");
        }
        else {
            alert("電腦出" + computer + "，所以玩家獲勝");
        }
    }
}