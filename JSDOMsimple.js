let button = document.getElementById('color')
let container = document.getElementById('container')
let author = document.getElementById('author')
let pasteText = document.getElementById('pasteText')
let changeAuthor = document.getElementById('changeAuthor')
let count = document.getElementById('count')
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let number = document.getElementById('number')
let colorPalet = ["yellow", "red", "green", "blue", "black", "orange", "pink"]
button.addEventListener('click',()=>{container.style.backgroundColor = colorPalet[Math.floor(Math.random()* colorPalet.length)]})
let divs = (box,buttons) => {
    box.style.width = "300px"
    box.style.height = "200px"
    box.style.textAlign = "center"
    box.style.color = 'white'
    buttons.style.padding = '20px'
}
divs(container,button)
divs(author,changeAuthor)
divs(count,increase)
divs(count,decrease)
let authors = {
    _authors:[
        {
            firstName:'Mihai',
            lastName:'Eminescu',
            quotes:'Menirea vieții tale e să te cauți pe tine însuți.'
        },
        {
            firstName:'George',
            lastName:'Bacovia',
            quotes: 'Culegeți, voi, ce mai pot semăna gândurile mele.'

        },
        {
            firstName:'Nichita ',
            lastName:'Stănescu',
            quotes:'Sunt un om viu. Nimic din ce-i omenesc nu mi-e străin.'
        },
    ],
    get quotes(){
        this._authors
    }
}
changeAuthor.addEventListener('click',()=>{
    let arr = authors._authors[Math.floor(Math.random()* authors._authors.length)]
    pasteText.innerHTML = arr.firstName + " " + arr.lastName + " : " + arr.quotes
})

let counter = number.innerHTML
increase.addEventListener('click',()=>{
    number.innerHTML = counter++
})
decrease.addEventListener('click',()=>{
    number.innerHTML = counter--
    if(counter< 0) {
        alert("Number is less than 0")
        counter = 0
    }
})
