let slidimg = Array.from(document.querySelectorAll(".slider-img img"))

let ul = document.createElement("ul")
for(let i = 0 ; i < slidimg.length ; i++){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(i + 1))
    ul.appendChild(li)
}
let snums = document.querySelector(".nums")
snums.appendChild(ul)

let lis = Array.from(document.querySelectorAll("ul li"))

var checked = 1
let next = document.querySelector(".next") 
let prev = document.querySelector(".prev")

prev.addEventListener('click' , (e) => {
    if(prev.classList.contains("disabled") !== true){
        checked -= 1
        removclass()
        addclass(checked)
    }
}) 
next.addEventListener('click' , (e) => {
    if(next.classList.contains("disabled") !== true){
        checked += 1
        removclass()
        addclass(checked)
    }
}) 



let slidnum = document.querySelector(".slide-num")



function addclass(checked){
    slidimg[checked - 1].classList.add("active")

    lis[checked - 1].classList.add("active")
    
    slidnum.textContent = `slide # ${checked}`

    if (checked == 1){
        prev.classList.add("disabled")
    }
    else {
        prev.classList.remove("disabled")
    }
    if (checked == 4) {
        next.classList.add("disabled")
    }else{
        next.classList.remove("disabled")
    }
    
}



addclass(1)
function removclass(){
    slidimg.forEach((img) => {
        img.classList.remove("active")
    })
    lis.forEach((li) => {
        li.classList.remove("active")
    })
}

lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        removclass()
        addclass(checked = e.target.textContent)
        e.target.classList.add("active")
    })
})
