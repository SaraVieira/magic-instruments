import tweens from './tweens'

export default () => {
  document.querySelectorAll('[data-key]').forEach(el => {
    const note = el.getAttribute('data-note')

    const handler = () => {
      tweens[note].restart()
      tweens[note].play()
    }

    el.addEventListener('touchstart', handler)
    el.addEventListener('click', handler)
  })
}
