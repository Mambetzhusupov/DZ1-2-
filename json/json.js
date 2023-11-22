const cards = document.querySelector(".cards")
const adilet = ()=>{
    const request = new XMLHttpRequest()
    request.open ("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener("load", ()=>{
        const userses=JSON.parse(request.response)
        userses.forEach (users =>{
            const user = document.createElement('div')
            user.setAttribute("class","userGap")
            user.innerHTML =
                `<img src=${ users.img} alt="img">
                <h4>NAME:${users.name}</h4>
                <span>AGE:${users.animal}</span>`
            cards.append(user)
        })
    })


}
adilet()
const newRequest = new XMLHttpRequest()
newRequest.open ("GET","data.json")
newRequest.setRequestHeader("Content-type","application/json")
newRequest.send()
newRequest.addEventListener("load", ()=> {
    const info = JSON.parse(newRequest.response)
    console.log(info)
})