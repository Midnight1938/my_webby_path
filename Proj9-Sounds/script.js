const sounds = ["Clapp", "Le Gasp", "यात्रीगण", "Victorie", "Wrong"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound // The name of the sounds
    btn.addEventListener("click", () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}