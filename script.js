const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const containerEl = document.getElementById("container-el")
const inpDiv = document.getElementById("inp")
var audio = [new Audio("1do.wav"), new Audio("2re.wav"), new Audio("3mi.wav"), new Audio("4fa.wav"), new Audio("5so.wav"), new Audio("6la.wav"), new Audio("7si.wav"), new Audio("8do.wav")];
let order = 0

let a = 0
let currIndex=Math.floor((Math.random() * 8));
function play() {
    // let a=0;
    a=currIndex;
    setInterval(() => {
        if(a==8)
        {
            a=0;
        }
        audio[a].play();
        a++;
    }, 1000);
}


function stop(){

    currIndex=a;
    a=9;
}
      

// var audio = [new Audio("1do.wav"), new Audio("b.mp3"), new Audio("c.mp3"), new Audio("d.mp3"), new Audio("e.mp3"), new Audio("f.mp3"), new Audio("g.mp3"), new Audio("h.mp3")];
// let x = Math.floor((Math.random() * 8));
// function test(){
// audio[0].play();
// }


// function stop(){
//     a=9;
// }
      
// var audio = [new Audio("1do.wav"), new Audio("b.mp3"), new Audio("c.mp3"), new Audio("d.mp3"), new Audio("e.mp3"), new Audio("f.mp3"), new Audio("g.mp3"), new Audio("h.mp3")];
// let x = Math.floor((Math.random() * 8));
// function test(){
// audio[0].play();
// }
inputBtn.addEventListener("click", function () {
    order = inputEl.value
    inpDiv.classList.add("hidden")
    let j = 1
    for (let i = 0; i < order; i++) {

        containerEl.innerHTML += `
                <tr class='flex' id='tr${i}'></tr>
                `
        const row = document.getElementById(`tr${i}`)

        console.log(typeof row)
        if (order <= 10) {
            for (let i = 0; i < order; i++) {
                row.innerHTML += `

                <td id='${j++}' class='w-20 h-14 m-0.5 text-center' onmouseover="play()" onmouseout="stop()"></td>
            `
            }
        }
        else if (order <= 17) {
            for (let i = 0; i < order; i++) {
                row.innerHTML += `

                <td id='${j++}' class='w-12 h-8 m-0.5 text-center' onmouseover="play()" onmouseout="stop()"></td>
            `
            }
        }
        else if(order <= 34){
            for (let i = 0; i < order; i++) {
                row.innerHTML += `

                <td id='${j++}' class='w-6 h-4 m-px text-center' onmouseover="play()" onmouseout="stop()"></td>
            `
            }
        }
        else {
            for (let i = 0; i < order; i++) {
                row.innerHTML += `

                <td id='${j++}' class='w-4 h-2 m-px text-center' onmouseover="play()" onmouseout="stop()"></td>
            `
            }
        }
        console.log("order entered")
    }})

//         for (let i = 0; i < order; i++) {
//             row.innerHTML += `
//                 <td>h</td>
//             `

//         }

//     }
//     console.log("order entered")

// }

// )


