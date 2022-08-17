const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const containerEl = document.getElementById("container-el")

let order = 0

inputBtn.addEventListener("click", function () {
    order = inputEl.value
    if (order > 17) {

    }
    console.log(order)
    for (let i = 0; i < order; i++) {

        containerEl.innerHTML += `
                <tr class='flex' id='${i}'></tr>
                `
        const row = document.getElementById(`${i}`)
        console.log(typeof row)
        if (order <= 17) {
            for (let i = 0; i < order; i++) {
                row.innerHTML += `
                <td class='w-8 h-8 m-0.5 text-center'></td>
            `
            }
        }
        else if(order <= 34){
            for (let i = 0; i < order; i++) {
                row.innerHTML += `
                <td class='w-4 h-4 m-px text-center'></td>
            `
            }
        }
        else {
            for (let i = 0; i < order; i++) {
                row.innerHTML += `
                <td class='w-2 h-2 m-px text-center'></td>
            `
            }
        }
        console.log("order entered")
    }})

