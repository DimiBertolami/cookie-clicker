let counter=0

function addCookie(){
    let cookie = document.getElementById("counter").value;
    counter++
    document.getElementById("counter").innerHTML = counter;
    if(counter===20){
        document.getElementById("upgrade").disabled = false;
    }
}