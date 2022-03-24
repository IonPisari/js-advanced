const callbacks = []; 
// HW3 : gasitit o solutie in js prin care sa blocati schimbarea array
// hint : -mai intii un obiect literal 

callbacks.push(()=> {
    console.log('first function');
})
callbacks.push(()=> {
    console.log('second function');
})
// callbacks[0]()

callbacks.forEach(item => {
    item()
})



const object1 = {
    firstName: "ion",
    lastName: "Pisari",
    age: "24"
}


