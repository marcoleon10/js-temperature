function login(){
    //console.log("Hello");

    let userDB = "marco.leon11@uabc.edu.mx";
    let passwordDB = "123456789";

    //let user = prompt("Enter your username:");
    //let password = prompt("Enter your password:");

    let user = document.getElementById("txtUserName").value;
    let password = document.getElementById("txtPassword").value;

    if(user == userDB && password == passwordDB){
        //console.log("Welcome to the system");
        document.getElementById("notifications").innerHTML = `
        Welcome to the system ${user}
        `;
    }else{
        //console.log("Invalid credentials")
        document.getElementById("notifications").innerHTML = `
        Invalid credentials
        `;
    }

    //console.log(user,password);
}

function addStudent(){
    let student = document.getElementById("newStudent").value;
    document.getElementById("listStudents").innerHTML += `
    <li>${student}</li>   
        `;
}


function convertTemperatureButton(scale){
    //console.log(start, scale);
    if(scale == "C"){
        document.getElementById("btnConvert").innerHTML = `Convert to Fahrenheit`;
        //result = (start - 32) * 5/9; //convert into Fahrenheit
    }else{
        document.getElementById("btnConvert").innerHTML = `Convert to Celsius`;
        //result = (start * 9/5) + 32; //convert into Celsius
    }
    return result;
}

function convertTo(){
    let start = document.getElementById("start").value;
    let scale = document.getElementById("scale").value;

    if(scale == "C"){
        result = (start * 9/5) + 32; //convert into Fahrenheit
        document.getElementById("results").innerHTML =
         `${result} Fahrenheit`;
        console.log(result);
    }else{
        result = (start - 32) * 5/9; //convert into Celsius
        document.getElementById("results").innerHTML =
         `${result} Celsius`;
         console.log(result);
    }
    return result;
}