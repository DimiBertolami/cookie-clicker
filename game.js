let counter=0




document.getElementById("upgrade").addEventListener("click", function() {
    if(counter>=20){
        counter = counter - 20;
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("upgrade2").hidden = false;
    }
});

function addCookie(){
    let cookie = document.getElementById("counter").value;
    counter++
    document.getElementById("counter").innerHTML = counter;
    if(counter===20){
        document.getElementById("upgrade").disabled = false;
    }
    if (document.getElementById("upgrade").hidden === false){
        if(counter===40){
            document.getElementById("upgrade2").disabled = false;
        }
    }

}