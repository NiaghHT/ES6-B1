let arrColor = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];

let renderButton = (arr) => {
    let output = '';
    for (let index = 0; index < arr.length; index++) {
        let color = arr[index];
        output += `
        <button class="color-button ${color} " onlick="changeColor('${color}')"></button>
        `
    }
    document.querySelector('#colorContainer').innerHTML = output
}

renderButton(arrColor);

let changeColor = (color) => {
    let house = document.getElementById("house");
    house.classList.add("color");
    console.log("heloooossssssssssssssss");
}