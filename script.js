function render() {
    let xhtr = new XMLHttpRequest();
    xhtr.open("GET", "Assets/data.dat");
    const bluronload = document.getElementById("bluronload")
    const spinner = document.getElementById("spinner")
    xhtr.onload = () => {
        spinner.style.display = "none"
        bluronload.style.display = "none"
        const songs_data = JSON.parse(xhtr.response);
        const songs = document.getElementById("songs")
        songs_data.map((cv, index) => {
            songs.innerHTML += `<div class="card" id="${index}" onclick="setclick(this.id)">
<div class="imgd"><img class="img" src="${cv.img}" alt="main"/></div>
<div class="title"><h3>${cv.name}</h3></div>
</div>`})
        const achived = document.getElementById("achived")
        achived.innerHTML = `Achived : ${songs_data.length}`
        const domtarget = document.getElementById("target")
        let target = 1;
        while (1) {
            if (songs_data.length > target) {
                target *= 10;
                domtarget.innerHTML = `Target : ${target}`
            }
            else {
                break;
            }
        }
    }
    xhtr.send();

}

render();
function setclick(id){
    localStorage.clear()
    localStorage.setItem("id",id)
    window.location.href = "songplay.html";
}



