let counter = 0;

function addCount(){
    counter += 1;
    document.getElementById("result").innerHTML = counter.toString();
}

function minusCount(){
    if(counter > 0){
        counter -= 1;
        document.getElementById("result").innerHTML = counter.toString();
    }
}

function resetCounter(){
    if(counter > 0){
        counter = 0;
        document.getElementById("result").innerHTML = counter.toString();
    }
}