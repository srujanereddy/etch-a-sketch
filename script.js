const container = document.querySelector(".container");
const text = document.querySelector("p");

function generateRandomColor(){
    let string = "0123456789abcdef";
    let color ="#";
    for(let i=0;i<6;i++){
        color += string[Math.floor(Math.random()*16)];
    }
    return color;
}

function createGrid(size){
    container.innerHTML="";
    if(isNaN(size) || size<=0 || size>100){
        alert("Invalid Size");
        text.textContent="Invalid size";
    }
    else{
        text.textContent=`${size}x${size}`;
        for(let i=0;i<size;i++){
            let columnDiv = document.createElement("div");
            columnDiv.setAttribute("class","column-div");
            container.appendChild(columnDiv);
            for(let j=0;j<size;j++){
                let rowDiv = document.createElement("div");
                rowDiv.setAttribute("class","row-div");
                columnDiv.appendChild(rowDiv);
                rowDiv.style.opacity=0.3;
                rowDiv.addEventListener("mouseover", () => {
                    rowDiv.style.backgroundColor=generateRandomColor();
                    let opacity = parseFloat(rowDiv.style.opacity);
                    if(opacity<1)
                        opacity+=0.1;
                    rowDiv.style.opacity=opacity;
                });
            }
        }
    }
}

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size=prompt("Enter grid size(1-100)");
    createGrid(size);
});
