const form = document.querySelector(`#form-name`)
const input = form.children[2].firstElementChild
const output = form.children[3]
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let name = input.value
    
    
//HW1: validate & sanitize the input:
//     *dont sent empty request                

    if(name == ""){
        output.innerHTML = `Introduce <strong>Name</strong> after press ENTER`
    }else{
        const xhr = new XMLHttpRequest()
        xhr.open("GET",`https://api.nationalize.io/?name=${name}`)
        xhr.send()
        xhr.onload = () => {
            let response = xhr.responseText
            let data = JSON.parse(response)
//HW2: check when empty response and show a corresponding message
            
            if(data.country.length == 0){
                output.innerHTML = `This name doesn't exist`
            }else{
                let nationality = data.country[0].country_id
                output.innerHTML = `You are probably from <strong>${nationality}</strong>`
            }
        }
    }
})

//HW1:  *remove extra space
input.addEventListener('keyup', e => {
    let space = e.target.value.replace(/\s{1,}/g, ' ').replace(/^\s/, '');
    input.value = space;
});





