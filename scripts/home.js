/* --------------------------------------------MENU-------------------------------------------- */
/* ------------------------------STARTERS------------------------------ */
let starters = [];

starters.push({
    name: "Starter 1",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "3.00$"
});

starters.push({
    name: "Starter 2",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "5.00$"
});

starters.push({
    name: "Starter 3",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "6.00$"
});

starters.push({
    name: "Starter 4",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "8.00$"
});

starters.push({
    name: "Starter 5",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "12.00$"
});

/* ----------------------------MAIN COURSES---------------------------- */
let mainCourses = [];

mainCourses.push({
    name: "Main Course 1",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "10.00$"
});

mainCourses.push({
    name: "Main Course 2",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "11.00$"
});

mainCourses.push({
    name: "Main Course 3",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "12.00$"
});

mainCourses.push({
    name: "Main Course 4",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "15.00$"
});

mainCourses.push({
    name: "Main Course 5",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "13.00$"
});

mainCourses.push({
    name: "Main Course 6",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "17.00$"
});

mainCourses.push({
    name: "Main Course 7",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "17.00$"
});

mainCourses.push({
    name: "Main Course 8",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "15.00$"
});

mainCourses.push({
    name: "Main Course 9",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "18.00$"
});

mainCourses.push({
    name: "Main Course 10",
    composition: "ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient",
    cost: "22.00$"
});

/* ------------------------------DESSERTS------------------------------ */
let desserts = [];

desserts.push({
    name: "Dessert 1",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "7.00$"
});

desserts.push({
    name: "Dessert 2",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "8.00$"
});

desserts.push({
    name: "Dessert 3",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "8.00$"
});

desserts.push({
    name: "Dessert 4",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "12.00$"
});

desserts.push({
    name: "Dessert 5",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "15.00$"
});

/* -------------------------------DRINKS------------------------------- */
let drinks = [];

drinks.push({
    name: "Drink 1",
    composition: "ingredient, ingredient, ingredient",
    cost: "2.00$"
});

drinks.push({
    name: "Drink 2",
    composition: "ingredient, ingredient, ingredient",
    cost: "2.00$"
});

drinks.push({
    name: "Drink 3",
    composition: "ingredient, ingredient, ingredient",
    cost: "3.00$"
});

drinks.push({
    name: "Drink 4",
    composition: "ingredient, ingredient, ingredient",
    cost: "3.00$"
});

drinks.push({
    name: "Drink 5",
    composition: "ingredient, ingredient, ingredient",
    cost: "4.00$"
});

drinks.push({
    name: "Drink 6",
    composition: "ingredient, ingredient, ingredient",
    cost: "5.00$"
});

/* ------------------------------ALCOHOLS------------------------------ */
let alcohols = [];

alcohols.push({
    name: "Alcohol 1",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "7.00$"
});

alcohols.push({
    name: "Alcohol 2",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "7.00$"
});

alcohols.push({
    name: "Alcohol 3",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "7.00$"
});

alcohols.push({
    name: "Alcohol 4",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "8.00$"
});

alcohols.push({
    name: "Alcohol 5",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "8.00$"
});

alcohols.push({
    name: "Alcohol 6",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "10.00$"
});

alcohols.push({
    name: "Alcohol 7",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "15.00$"
});

alcohols.push({
    name: "Alcohol 8",
    composition: "ingredient, ingredient, ingredient, ingredient",
    cost: "25.00$"
});

/* -------------------------------------------REVIEWS------------------------------------------ */
let reviews = [];

reviews.push({
    name: "Name 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageURL: "./images/person1.jpg"
    /* Photo by https://unsplash.com/@vhladynets */
});

reviews.push({
    name: "Name 2",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    imageURL: "./images/person2.jpg"
    /* Photo by https://unsplash.com/@cikstefan */
});

reviews.push({
    name: "Name 3",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    imageURL: "./images/person3.jpg"
    /* Photo by https://unsplash.com/@juricakoletic */
});

/* --------------------------------------------MENU-------------------------------------------- */
/* -------------------------SHOW ITEMS IN MENU------------------------- */
function updateMenuList(choosenMenu) {
    const menuListBox = document.getElementsByClassName("menu-list-box").item(0);
    while (menuListBox.children[1]) {
        menuListBox.removeChild(menuListBox.children[1]);
    }

    choosenMenu.forEach(element => {
        const holder = document.createElement('div');
        holder.classList.add('menu-item');
        const item = "<div class=\"data\"><span class=\"name\">" + element.name + "</span><span class=\"composition\">" + element.composition + "</span></div><div class=\"cost\"><span>" + element.cost + "</span></div>";
        holder.innerHTML = item;
        menuListBox.appendChild(holder);
    });
}

updateMenuList(mainCourses);
    
const menuOptions = document.getElementsByClassName('menu-list-box').item(0);
const startersBtn = document.getElementById('starters');
const maincoursesBtn = document.getElementById('maincourses');
const dessertsBtn = document.getElementById('desserts');
const drinksBtn = document.getElementById('drinks');
const alcoholsBtn = document.getElementById('alcohols');
const menuImage = document.getElementsByClassName('preview').item(0);

let activeBtn = maincoursesBtn;
activeBtn.classList.add('active');
    
startersBtn.addEventListener('click', (event) => {
    activeBtn.classList.remove('active');
    activeBtn = startersBtn;
    activeBtn.classList.add('active');
    menuImage.style.backgroundImage = "url('./images/starters.jpg')";
    /* Photo by https://unsplash.com/@shootdelicious */
    updateMenuList(starters);
});
    
maincoursesBtn.addEventListener('click', (event) => {
    activeBtn.classList.remove('active');
    activeBtn = maincoursesBtn;
    activeBtn.classList.add('active');
    menuImage.style.backgroundImage = "url('./images/maincourses.jpg')";
    /* Photo by https://unsplash.com/@dcocciardi */
    updateMenuList(mainCourses);
});

dessertsBtn.addEventListener('click', (event) => {
    activeBtn.classList.remove('active');
    activeBtn = dessertsBtn;
    activeBtn.classList.add('active');
    menuImage.style.backgroundImage = "url('./images/desserts.jpg')";
    /* Photo by https://unsplash.com/@emilembunzama */
    updateMenuList(desserts);
});

drinksBtn.addEventListener('click', (event) => {
    activeBtn.classList.remove('active');
    activeBtn = drinksBtn;
    activeBtn.classList.add('active');
    menuImage.style.backgroundImage = "url('./images/drinks.jpg')";
    /* Photo by https://unsplash.com/@abhishek_hajare */
    updateMenuList(drinks);
});

alcoholsBtn.addEventListener('click', (event) => {
    activeBtn.classList.remove('active');
    activeBtn = alcoholsBtn;
    activeBtn.classList.add('active');
    menuImage.style.backgroundImage = "url('./images/alcohols.jpg')";
    /* Photo by https://unsplash.com/@kikesalazarn */
    updateMenuList(alcohols);
});

/* -------------------------------------------REVIEWS------------------------------------------ */
let actualPerson = 0;
const opinionName = document.getElementsByClassName('opinion').item(0).getElementsByClassName('name').item(0);
const opinionText = document.getElementsByClassName('opinion').item(0).getElementsByClassName('text').item(0)
const opinionImage = document.getElementsByClassName('person').item(0);

function updateReview() {
    opinionName.innerHTML = reviews[actualPerson].name;
    opinionText.innerHTML = reviews[actualPerson].text;
    opinionImage.style.backgroundImage = "url(" + reviews[actualPerson].imageURL + ")";
    if (actualPerson + 1 < reviews.length) {
        actualPerson++;
    } else {
        actualPerson = 0;
    }
    setTimeout(updateReview, 10000);
}

updateReview();