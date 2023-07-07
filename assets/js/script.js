const e = element => document.querySelector(element);
const allE = allElement => document.querySelectorAll(allElement);

//Functions
function readJson(){
    fetch('http://127.0.0.1:5500/assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        showResult(data)
    })
    .catch(error => {
        console.error("Erro:",error);
    })
}

function showResult(value){
    // Sumary
    allScore = 0;

    allE(".text--result").forEach((item, index) => {
        item.innerText = value[index].score;
        allE(".img--description img").forEach((item, index) => {
            item.setAttribute("src", value[index].icon)
        });
        allScore += value[index].score;
    });

    e(".left--side span").innerText = Math.floor((allScore/400)*100)
}

//Events
readJson()