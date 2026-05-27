let calories = 1800;
let water = 2;
let currentWeight = 92;

let mealsCount = 0;
let completedChallenges = 0;

const initialWeight = 92;
const goalWeight = 75;

const foodsDatabase = {

    "pollo":300,
    "arroz":250,
    "huevo":80,
    "pizza":400,
    "hamburguesa":550,
    "arepa":200,
    "ensalada":100,
    "salmon":350

};

const fitnessChallenges = [

    "🔥 Camina 5.000 pasos",
    "💧 Toma 3 litros de agua",
    "🏋️ Entrena 30 minutos",
    "🥗 Come saludable hoy",
    "💪 Haz 20 flexiones"

];

const caloriesValue =
document.getElementById("caloriesValue");

const waterValue =
document.getElementById("waterValue");

const currentWeightText =
document.getElementById("currentWeight");

const progressBar =
document.getElementById("progressBar");

const waterFill =
document.getElementById("waterFill");

const mealInput =
document.getElementById("mealInput");

const mealList =
document.getElementById("mealList");

const challengeText =
document.getElementById("challengeText");

const challengeStatus =
document.getElementById("challengeStatus");

/* HERO */

const heroCalories =
document.getElementById("heroCalories");

const heroWater =
document.getElementById("heroWater");

const heroWeight =
document.getElementById("heroWeight");

/* STATS */

const mealsCountText =
document.getElementById("mealsCount");

const completedChallengesText =
document.getElementById("completedChallenges");

const waterPercent =
document.getElementById("waterPercent");

/* BUTTONS */

document
.getElementById("darkModeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

document
.getElementById("startBtn")
.addEventListener("click", () => {

    alert("🔥 Bienvenido a Q?Fit");

});

document
.getElementById("loginBtn")
.addEventListener("click", () => {

    alert("🔐 Login próximamente");

});

/* PESO */

document
.getElementById("updateWeightBtn")
.addEventListener("click", () => {

    const newWeight =
    prompt("Nuevo peso:");

    if(!newWeight) return;

    currentWeight =
    parseInt(newWeight);

    currentWeightText.innerText =
    currentWeight + " kg";

    heroWeight.innerText =
    currentWeight + "kg";

    updateProgress();

});

/* PROGRESO */

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

/* AGUA */

document
.getElementById("updateWaterBtn")
.addEventListener("click", () => {

    const value =
    document.getElementById("waterInput").value;

    if(value === "") return;

    water = parseFloat(value);

    waterValue.innerText =
    water + "L";

    heroWater.innerText =
    water + "L";

    updateWaterVisual();

});

function updateWaterVisual(){

    let percentage =
    (water / 4) * 100;

    if(percentage > 100){
        percentage = 100;
    }

    waterFill.style.height =
    percentage + "%";

    waterPercent.innerText =
    Math.floor(percentage) + "%";

}

/* CALORIAS */

document
.getElementById("resetCaloriesBtn")
.addEventListener("click", () => {

    calories = 0;

    caloriesValue.innerText =
    calories;

    heroCalories.innerText =
    calories;

});

/* COMIDAS */

document
.getElementById("saveMealBtn")
.addEventListener("click", () => {

    const meal =
    mealInput.value.toLowerCase();

    if(meal === "") return;

    let detectedCalories = 0;

    for(let food in foodsDatabase){

        if(meal.includes(food)){

            detectedCalories +=
            foodsDatabase[food];

        }

    }

    if(detectedCalories === 0){

        detectedCalories = 150;

    }

    calories += detectedCalories;

    mealsCount++;

    caloriesValue.innerText =
    calories;

    heroCalories.innerText =
    calories;

    mealsCountText.innerText =
    mealsCount;

    const li =
    document.createElement("li");

    li.innerHTML = `

        🍽️ ${meal}
        <br><br>
        🔥 ${detectedCalories} calorías

    `;

    mealList.appendChild(li);

    mealInput.value = "";

});

/* RETOS */

function generateChallenge(){

    const randomIndex =
    Math.floor(
        Math.random() *
        fitnessChallenges.length
    );

    challengeText.innerText =
    fitnessChallenges[randomIndex];

    challengeStatus.innerText =
    "Pendiente ❌";

}

document
.getElementById("completeChallengeBtn")
.addEventListener("click", () => {

    challengeStatus.innerText =
    "Completado ✅";

    completedChallenges++;

    completedChallengesText.innerText =
    completedChallenges;

});

document
.getElementById("newChallengeBtn")
.addEventListener("click", () => {

    generateChallenge();

});

/* INICIAR */

generateChallenge();

updateProgress();

updateWaterVisual();

console.log("🔥 Q?Fit Premium cargado");
