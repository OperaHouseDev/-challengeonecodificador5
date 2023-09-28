const txtinput = document.querySelector(".input");
const txtoutput = document.querySelector(".output");
const container = document.querySelector(".container");
const btncopy = document.querySelector(".btn-copy");
const regex = /[A-Z]/; // solo minusculas
const regex2 = /[\u00E0-\u00FC]/; //vocales sin acentos
const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // codigos para encriptar vocales

btncopy.style.visibility= "hidden";

function validateText(){
    let txtValue = document.querySelector(".input").value;
    if (regex.test(txtValue) || regex2.test(txtValue)){ 
        return true
    }
    return false
}

function btnEncrypt(){
    if(!validateText()){
        const encryptedtxt = Encrypt(txtinput.value);
        txtinput.value = "";
        txtoutput.value = encryptedtxt;
        container.style.backgroundImage= "none";
        btncopy.style.visibility= "visible";
        return console.log("Texto valido para encriptar")
    }
    alert("ERROR! No se permite el uso de letras mayusculas, o vocales con acento")
    return console.log("Texto inválido para encriptar")
}

function btnDecrypt(){
    if(!validateText()){
        const decryptedtxt = Decrypt(txtinput.value);
        txtinput.value = "";
        txtoutput.value = decryptedtxt;
        container.style.backgroundImage= "none";
        btncopy.style.visibility= "visible";
        return console.log("Texto valido para desencriptar")
    }
    alert("ERROR! No se permite el uso de letras mayusculas, o vocales con acento")
    return console.log("Texto inválido para desencriptar")
}

function copyText(){
    txtoutput.select();
    navigator.clipboard.writeText(txtoutput.value)
    txtinput.value = "";
    txtoutput.value = "";
    container.style.backgroundImage= "url('Muñeco.png')";
}

function Encrypt(txt){
    for (let i = 0; i< keys.length; i++){
        if ( txt.includes(keys[i][0])){
            txt = txt.replaceAll(keys[i][0],keys[i][1])
        }
    }
    return txt
}

function Decrypt(txt){
    for (let i = 0; i< keys.length; i++){
        if ( txt.includes(keys[i][1])){
            txt = txt.replaceAll(keys[i][1],keys[i][0])
        }
    }
    return txt
}

document.addEventListener('keyup', function(event) {
    const key = event.key; 
    if (key === "Delete" || key === "Backspace") {
        if (txtoutput.value == ""){
            container.style.backgroundImage= "url('Muñeco.png')";
        }
    }
});