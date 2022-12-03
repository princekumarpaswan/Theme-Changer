const colors = document.getElementsByClassName('colors');
console.log(colors)
let i;

let c1 = colors[0]
console.log(c1)

let c2 = colors[1]
let c3 = colors[2]
let c4 = colors[3]
let c5 = colors[4]
let c6 = colors[5]


function fun() {
    let xx = document.getElementById('themes').value
    if (xx == "dark") {
        let color = c1.getAttribute('data-color')
        document.documentElement.style.setProperty('--color', color)
        document.getElementById('themes').style = "border: 5px solide white"
    }
    else if (xx == "light") {
        let color = c2.getAttribute('data-color')
        document.documentElement.style.setProperty('--color', color)
    }
    else if (xx == "red") {
        let color = c3.getAttribute('data-color')
        document.documentElement.style.setProperty('--color', color)
    }
    else if (xx == "green") {
        let color = c4.getAttribute('data-color')
        document.documentElement.style.setProperty('--color', color)
    }
    else if (xx == "Yellow") {
        let color = c5.getAttribute('data-color')
        document.documentElement.style.setProperty('--color', color)
    }

    else if (xx == "random") {

        const randonColor = () => {
            let rand = "0123456789ABCDEF"
            let con = "#";
            for (let i = 0; i < 6; i++) {
                con = con + rand[Math.floor(Math.random() * 16)];
            } return con
        }
        // randonColor()
        document.documentElement.style.setProperty('--color', randonColor())
    }
}