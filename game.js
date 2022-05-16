let counter=0

document.getElementById("upgrade").addEventListener("click", function() {
    if(counter>=20 && document.getElementById("upgrade2").hidden === true){
            counter = counter - 20;
            document.getElementById("counter").innerHTML = counter;
            document.getElementById("upgrade2").hidden = false;
    } else {
        document.getElementById("upgrade").disabled = true;
    }
});

document.getElementById("upgrade2").addEventListener("click", function() {
    if(counter>=40){
        counter = counter - 40;
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("upgrade3").disabled = false;
        document.getElementById("upgrade").disabled = true;
    } else {
        document.getElementById("upgrade").disabled = true;
    }
});

document.getElementById("upgrade3").addEventListener("click", function() {
    if(counter>=60){
        counter = counter - 60;
        document.getElementById("counter").innerHTML = counter;
    } else {
        document.getElementById("upgrade").disabled = true;
    }
});

function addCookie(){
    let cookie = document.getElementById("counter").value;
    counter++
    document.getElementById("counter").innerHTML = counter;
    if(counter===20){
        document.getElementById("upgrade").disabled = false;
    }
    if (document.getElementById("upgrade2").hidden === false){
        if(counter===40){
            document.getElementById("upgrade2").disabled = false;
            document.getElementById("upgrade").disabled = true;
            document.getElementById("upgrade3").hidden  = false;
        }
    }
    if (document.getElementById("upgrade3").hidden === false){
        if(counter===60){
            document.getElementById("upgrade").disabled = false;
            document.getElementById("upgrade2").disabled = false;
            document.getElementById("upgrade3").disabled  = false;
        }
    }
}