// ===============================
// VARIABLES
// ===============================

let calories = 1800;
let water = 2;

let currentWeight = 92;

const initialWeight = 92;
const goalWeight = 75;


// ===============================
// ELEMENTOS
// ===============================

const startBtn =
document.getElementById("startBtn");

const loginBtn =
document.getElementById("loginBtn");

const darkModeBtn =
document.getElementById("darkModeBtn");

const updateWeightBtn =
document.getElementById("updateWeightBtn");

const addWaterBtn =
document.getElementById("addWaterBtn");

const resetCaloriesBtn =
document.getElementById("resetCaloriesBtn");

const saveMealBtn =
document.getElementById("saveMealBtn");

const sendQuestionBtn =
document.getElementById("sendQuestionBtn");

const caloriesValue =
document.getElementById("caloriesValue");

const waterValue =
document.getElementById("waterValue");

const currentWeightText =
document.getElementById("currentWeight");

const progressBar =
document.getElementById("progressBar");

const mealInput =
document.getElementById("mealInput");

const mealList =
document.getElementById("mealList");

const userQuestion =
document.getElementById("userQuestion");

const chatBox =
document.getElementById("chatBox");


// ===============================
// BANCO DE COMIDAS
// ===============================

const foodsDatabase = {

    "pollo":300,
    "arroz":250,
    "huevo":80,
    "avena":150,
    "pizza":400,
    "hamburguesa":550,
    "pan":120,
    "atun":200,
    "carne":350,
    "papas":280,
    "pasta":320,
    "banana":100,
    "manzana":90,
    "cafe":20,
    "ensalada":100

};


// ===============================
// BOTON EMPEZAR
// ===============================

startBtn.addEventListener("click", () => {

    alert("Bienvenido a FitLife AI 🔥");

});


// ===============================
// LOGIN
// ===============================

loginBtn.addEventListener("click", () => {

    alert("Sistema Login próximamente 🔐");

});


// ===============================
// DARK MODE
// ===============================

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// ===============================
// ACTUALIZAR PESO
// ===============================

updateWeightBtn.addEventListener("click", () => {

    const newWeight =
    prompt("Ingresa tu nuevo peso");

    if(!newWeight) return;

    currentWeight =
    parseInt(newWeight);

    currentWeightText.innerText =
    currentWeight + " kg";

    updateProgress();

});


// ===============================
// FUNCION PROGRESO
// ===============================

function updateProgress(){

    let percentage =

    ((initialWeight - currentWeight)
    /
    (initialWeight - goalWeight))

    * 100;

    if(percentage < 0){
        percentage = 0;
    }

    if(percentage > 100){
        percentage = 100;
    }

    progressBar.style.width =
    percentage + "%";

}


// ===============================
// AGREGAR AGUA
// ===============================

addWaterBtn.addEventListener("click", () => {

    water++;

    waterValue.innerText =
    water + "L";

});


// ===============================
// REINICIAR CALORIAS
// ===============================

resetCaloriesBtn.addEventListener("click", () => {

    calories = 0;

    caloriesValue.innerText =
    calories;

});


// ===============================
// GUARDAR COMIDA
// ===============================

saveMealBtn.addEventListener("click", () => {

    const meal =
    mealInput.value.toLowerCase();

    if(meal === ""){

        alert("Escribe una comida");

        return;

    }

    let detectedCalories = 0;


    // DETECTAR COMIDAS

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

    caloriesValue.innerText =
    calories;


    // CREAR ELEMENTO

    const li =
    document.createElement("li");

    li.innerHTML = `
        🍽️ ${meal}
        <br>
        🔥 ${detectedCalories} calorías
    `;

    mealList.appendChild(li);

    mealInput.value = "";

});


// ===============================
// GEMINI IA
// ===============================

sendQuestionBtn.addEventListener("click", async () => {

    const question =
    userQuestion.value;

    if(question === "") return;


    // MENSAJE USUARIO

    const userDiv =
    document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerText = question;

    chatBox.appendChild(userDiv);


    // MENSAJE IA

    const aiDiv =
    document.createElement("div");

    aiDiv.classList.add("ai-message");

    aiDiv.innerText = "Pensando...";

    chatBox.appendChild(aiDiv);

    chatBox.scrollTop =
    chatBox.scrollHeight;


    try{

        const response =
        await fetch(

        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=TU_API_KEY",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                contents:[

                    {

                        parts:[

                            {

                                text:
                                `
                                Eres un coach fitness profesional.

                                Responde corto,
                                claro y útil.

                                Usuario:
                                ${question}
                                `

                            }

                        ]

                    }

                ]

            })

        }

        );


        const data =
        await response.json();


        const aiText =
        data.candidates[0]
        .content.parts[0]
        .text;


        aiDiv.innerText =
        aiText;


    }catch(error){

        aiDiv.innerText =
        "Error conectando con Gemini ❌";

        console.log(error);

    }


    userQuestion.value = "";

    chatBox.scrollTop =
    chatBox.scrollHeight;

});


// ===============================
// ENTER PARA ENVIAR
// ===============================

userQuestion.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        sendQuestionBtn.click();

    }

});


// ===============================
// INICIAR
// ===============================

updateProgress();

console.log("FitLife AI cargado correctamente 🔥");
