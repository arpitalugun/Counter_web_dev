$(function(){
        Let start = 0;
        Let end = $(".num").html();
        Let speed = 1000;

        setInterval(function(){
            if (start < end){
                start++;
            }
            $(".num").html(start);
        }, speed);
    });

    let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===1000)
            {
                clearInterval(counts);