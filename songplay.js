function render() {
    let xhtr = new XMLHttpRequest();
    xhtr.open("GET", "Assets/data.dat");
    const bluronload = document.getElementById("bluronload")
    const spinner = document.getElementById("spinner")
    xhtr.onload = () => {
        let songid = localStorage.getItem("id");
        spinner.style.display = "none"
        bluronload.style.display = "none"
        const songs_data = JSON.parse(xhtr.response);
        const backbox = document.getElementById("backbox")
        backbox.addEventListener("click", () => {
            window.location.href = "index.html";
        })
            const card = document.getElementById("card")
            card.innerHTML = `<div id="img">
            <img src="${songs_data[songid].img}" alt="song_image">
        </div>
        <div id="title">${songs_data[songid].name}</div>
        <div id="download"><a href="${songs_data[songid].audio}"><img width="20" src="Assets/icons/download.gif" alt="download"></a></div>
        <div id="controls">
            <div id="previous"><img src="Assets/icons/previous.png" alt="previous"></div>
            <div id="play"><img src="Assets/icons/paush.png" alt="play"></div>
            <div id="next"><img src="Assets/icons/next.png" alt="next"></div>
        </div>`
        let next = document.getElementById("next")
        let audio = new Audio(songs_data[songid].audio)
        audio.play()
        let check = true;
        next.addEventListener("click", () => {
            ++songid;
           localStorage.setItem("id",songid)
           audio.pause();
           render();
        })
        let previous=document.getElementById("previous");
        previous.addEventListener("click", () => {
            --songid;
           localStorage.setItem("id",songid)
           audio.pause();
           render();
        })
        let play = document.getElementById("play")
        play.addEventListener("click", () => {
            if (check) {
                audio.pause();
                play.childNodes[0].setAttribute("src", "Assets/icons/play.png");
                check = false;
            }
            else {
                audio.play();
                play.childNodes[0].setAttribute("src", "Assets/icons/paush.png");
                check = true;
            }
        })
    }
    xhtr.send();
}
render();