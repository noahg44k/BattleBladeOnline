let inventoryName = document.getElementById("inventoryName");
let inventoryClass = document.getElementById("inventoryClass");

function setInfo(){
    inventoryName.textContent = localStorage.getItem("name");
    inventoryClass.textContent = localStorage.getItem("role");
    console.log("loaded", inventoryName, inventoryClass);
}

document.addEventListener('DOMContentLoaded', setInfo, false);