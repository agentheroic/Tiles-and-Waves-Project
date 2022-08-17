const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const containerEl = document.getElementById("container-el")

let order = 0

inputBtn.addEventListener("click", function () {
    order = inputEl.value 
    console.log(order)
    for (let i = 0; i < order; i++) {
        
        containerEl.innerHTML += `
                <tr class='flex' id='${i}'></tr>
                `
                const row = document.getElementById(`${i}`)
    console.log(typeof row)
        for (let i = 0; i < order; i++) {
            row.innerHTML += `
                <td>h</td>
            `
            
        }

    }
    console.log("order entered")
})

