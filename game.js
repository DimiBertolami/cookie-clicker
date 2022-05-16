let counter=0;
let multiplier = 0;
let alerted = false;
document.getElementById("upgrade").addEventListener("click", function() {
    if(counter>=20 && document.getElementById("upgrade2").hidden === true){
        counter = counter - 20;
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("upgrade2").hidden = false;
        document.getElementById("multiplierID").textContent = "cookie (x2)";
        multiplier = 2;
    } else {
        // document.getElementById("upgrade").disabled = true;
    }
    if(document.getElementById("multiplierID").textContent === "cookie (x10)"){
        multiplier = 100;
        document.getElementById("upgrade").disabled = true;
        document.getElementById("multiplierID").textContent = "cookie (x100)"
    }
});

document.getElementById("upgrade2").addEventListener("click", function() {
    if(counter>=40){
        counter = counter - 40;
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("upgrade3").disabled = false;
        document.getElementById("upgrade").disabled = false;
        document.getElementById("multiplierID").textContent = "cookie (x4)";
        multiplier = 4;
    } else {
        // document.getElementById("upgrade2").disabled = true;
    }
});

document.getElementById("upgrade3").addEventListener("click", function() {
    if(counter>=60){
        counter = counter - 60;
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("upgrade").disabled = false
        document.getElementById("upgrade2").disabled = false;
        document.getElementById("multiplierID").textContent = "cookie (x10)";
        multiplier = 10;
    } else {
        // document.getElementById("upgrade3").disabled = true;
    }
});

function addCookie(){
    let cookie = document.getElementById("counter").value;
    if(multiplier===0){
        counter++;
    } else if(multiplier===2){
        counter=counter+2;
    } else if(multiplier===4){
        counter=counter+4;
    } else if(multiplier===10){
        counter=counter+10;
    } else if(multiplier===100){
        counter=counter+100;
    }
    document.getElementById("counter").innerHTML = counter;
    if(counter===20){
        document.getElementById("upgrade").disabled = false;
    }
    if (document.getElementById("upgrade2").hidden === false){
        if(counter===40){
            document.getElementById("upgrade2").disabled = false;
            document.getElementById("upgrade").disabled = false;
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
    if(document.getElementById("multiplierID").textContent === "cookie (x10)"){
        if(alerted===false){alert("Level 2 boosters ready for deployment");alerted=true;};
        document.getElementById("Booster1").textContent = "1000";
        document.getElementById("Booster2").textContent = "10000";
        document.getElementById("Booster3").textContent = "100000";
    }
}