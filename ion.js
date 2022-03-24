class Button {
    constructor(color, text) {
        this.color= color
        this.text = text
    }
    setColor(changeColor){
        this.color = changeColor
    }
    render(){
        document.querySelector("#root").innerHTML +=`<button style="color:${this.color}" >${this.text}</button>`
    }
}

let buttons = [new Button ( "red", "unu"), new Button ( "black", "doi"), new Button ( "blue", "trei")]
buttons.forEach((item) => {
    item.render()
})
let buttonColor = [new Button ( "pink", "patru"), new Button ( "green", "cinci"), new Button ( "purple", "sase")]
buttonColor.forEach((item) => {
    item.render()
})



// HW1: `cu ajutorl forEach() sa se afiseze toate butoanele intrun div
// HW*:sa se afiseze doar butoanele care sunt de o anumita culoare 