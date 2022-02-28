function countTo(){
    let from = 0;
    let to = 100;
    let step = to > from ? 1 : -10;
    let interval = 1000;


    if(from==to){
        document.querySelector("#num").textContent = from;
        return;
    }
    let counter = setInterval(function(){
        from += step;
        document.querySelector("#num").textContent = from;


        if(from == to){
            clearInterval(counter);
        }


    } , interval);
    }
    countTo();