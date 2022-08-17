const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const containerEl = document.getElementById("container-el")

let order = 0

inputBtn.addEventListener("click", function () {
    order = inputEl.value 
    console.log(order)
    for (let i = 0; i < order; i++) {
        for (let i = 0; i < order; i++) {
            containerEl.innerHTML += `
                <div>D</div>
            `
        }
    }
    console.log("order entered")
})

