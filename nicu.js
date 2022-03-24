const words = [{value:'bunu'}, {value:'adoi'}, {value:'ztrei'}];
words.sort((item1, item2) => {
    // return item1 < item2
    if(item1.value < item2.value){
        return -1
    }
    if(item1.value > item2.value){
        return 1
    }
    return 0 
}).filter(({value}) => value.charAt(0) === "a" || value.charAt(0) === "b")
words.forEach(({value}) => console.log(value))