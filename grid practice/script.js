console.log("code executed");
const grid = document.getElementsByClassName('grids');

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', function () {
        if(this.style.backgroundColor !== "red"){
            this.style.backgroundColor = "red";
        }
        else{
            alert(`This cell is already red and cannot be changed.`);
        }

        
    });
}