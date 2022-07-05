const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))


const sounds = ['asi-fue',  'equivocada',  'fuiste',  'inocente',  'mascared']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;
  })
}