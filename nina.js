const executor = (cb) => {
    let r = cb(2)
    console.log(`${executor.name} is executing...`, r)
}
executor((value) => {
    console.log(value,"cb executed")
    return value * 10
})
// HW2 : diagrama ce se intimpla sa desenam!




