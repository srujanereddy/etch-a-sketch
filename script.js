const container = document.querySelector(".container");
const text = document.querySelector("p");

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

                rowDiv.addEventListener("mouseover", () => {
                    rowDiv.style.backgroundColor="#00B4D8";
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
