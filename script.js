// VARIABLES

let calories = 1840;
let water = 2;
let currentWeight = 92;
const initialWeight = 92;
const goalWeight = 75;


// ELEMENTOS

const caloriesValue = document.getElementById("caloriesValue");
const waterValue = document.getElementById("waterValue");
const currentWeightText = document.getElementById("currentWeight");
const progressBar = document.getElementById("progressBar");

const mealInput = document.getElementById("mealInput");
const mealList = document.getElementById("mealList");

const chatBox = document.getElementById("chatBox");
const userQuestion = document.getElementById("userQuestion");

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    alert("Bienvenido a FitLife AI 🔥");

});
// LOGIN

document.getElementById("loginBtn")
.addEventListener("click", () => {

    alert("Sistema Login próximamente 🔐");

});


// DARK MODE

document.getElementById("darkModeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// EMPEZAR

document.getElementById("startBtn")
.addEventListener("click", () => {

    window.scrollTo({
        top:500,
        behavior:"smooth"
    });

});


// ACTUALIZAR PESO

document.getElementById("updateWeightBtn")
.addEventListener("click", () => {

    const newWeight = prompt("Ingresa tu nuevo peso:");

    if(newWeight){

        currentWeight = parseInt(newWeight);

        currentWeightText.innerText = currentWeight + " kg";

        updateProgress();

    }

});


// FUNCION PROGRESO

function updateProgress(){

    let percentage =
    ((initialWeight - currentWeight) /
    (initialWeight - goalWeight)) * 100;

    if(percentage < 0){
        percentage = 0;
    }

    if(percentage > 100){
        percentage = 100;
    }

    progressBar.style.width = percentage + "%";

}


// AGREGAR CALORIAS

document.getElementById("addCaloriesBtn")
.addEventListener("click", () => {

    const amount = prompt("¿Cuántas calorías agregar?");

    if(amount){

        calories += parseInt(amount);

        caloriesValue.innerText = calories;

    }

});


// AGREGAR AGUA

document.getElementById("addWaterBtn")
.addEventListener("click", () => {

    water++;

    waterValue.innerText = water + "L";

});


// CALORIAS INICIALES

let calories = 1800;


// ELEMENTOS

const caloriesValue =
document.getElementById("caloriesValue");

const mealInput =
document.getElementById("mealInput");

const mealList =
document.getElementById("mealList");


// BASE DE DATOS SIMPLE DE COMIDAS

const foodsDatabase = {

    "pollo": 300,
    "arroz": 250,
    "huevo": 80,
    "avena": 150,
    "pan": 120,
    "pizza": 400,
    "hamburguesa": 550,
    "manzana": 90,
    "banana": 110,
    "atun": 200,
    "carne": 350,
    "pasta": 320,
    "ensalada": 100,
    "papas": 280,
    "cafe": 20

};


// GUARDAR COMIDA

document.getElementById("saveMealBtn")
.addEventListener("click", () => {

    const meal =
    mealInput.value.toLowerCase();

    if(meal === ""){

        alert("Escribe una comida");

        return;

    }


    // CALORIAS DETECTADAS

    let detectedCalories = 0;


    // BUSCAR PALABRAS

    for(let food in foodsDatabase){

        if(meal.includes(food)){

            detectedCalories +=
            foodsDatabase[food];

        }

    }


    // SI NO DETECTA

    if(detectedCalories === 0){

        detectedCalories = 150;

    }


    // SUMAR CALORIAS

    calories += detectedCalories;

    caloriesValue.innerText = calories;


    // CREAR ELEMENTO

    const li =
    document.createElement("li");

    li.innerHTML = `
        🍽️ ${meal}
        <br>
        🔥 ${detectedCalories} calorías
    `;

    mealList.appendChild(li);


    // LIMPIAR INPUT

    mealInput.value = "";

});

// IA SIMPLE

function generateAIResponse(question){

    question = question.toLowerCase();

    if(question.includes("grasa")){

        return "Para perder grasa necesitas déficit calórico 💪";

    }

    if(question.includes("proteina")){

        return "Consume huevos, pollo y proteína whey 🍗";

    }

    if(question.includes("agua")){

        return "Debes consumir mínimo 2 litros diarios 💧";

    }

    if(question.includes("desayuno")){

        return "Un desayuno ideal es avena con huevos 🍎";

    }

    if(question.includes("musculo")){

        return "Entrena fuerza y aumenta proteína 🔥";

    }

    return "Sigue entrenando y mantén disciplina 🔥";

}


// ENVIAR MENSAJE

document.getElementById("sendQuestionBtn")
.addEventListener("click", () => {

    const question = userQuestion.value;

    if(question === ""){

        return;

    }

    // MENSAJE USUARIO

    const userDiv = document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerText = question;

    chatBox.appendChild(userDiv);


    // MENSAJE IA

    const aiDiv = document.createElement("div");

    aiDiv.classList.add("ai-message");

    aiDiv.innerText = "Escribiendo...";

    chatBox.appendChild(aiDiv);

    chatBox.scrollTop = chatBox.scrollHeight;


    setTimeout(() => {

        aiDiv.innerText =
        generateAIResponse(question);

        chatBox.scrollTop =
        chatBox.scrollHeight;

    }, 1000);

    userQuestion.value = "";

});


// ENTER PARA ENVIAR

userQuestion.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        document
        .getElementById("sendQuestionBtn")
        .click();

    }

});


// INICIAR

updateProgress();
