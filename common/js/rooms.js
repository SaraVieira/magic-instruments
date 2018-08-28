export var currentRoom = 'main'

const changeRoom = (socket, newRoom) => {
  var $btn = document.querySelector(`[data-room='${currentRoom}']`) || ''
  if ($btn) {
    $btn.classList.remove('active')
  }
  currentRoom = newRoom
  socket.emit('room', newRoom)
  $btn = document.querySelector(`[data-room='${newRoom}']`) || ''
  if ($btn) {
    $btn.classList.add('active')
  }
}

export default socket => {
  document.querySelectorAll('[data-room]').forEach(roomButton => {
    const room = roomButton.getAttribute('data-room')
    roomButton.addEventListener('click', () => changeRoom(socket, room))
  })
  let customRoom = document.getElementById('customRoom')
  customRoom.addEventListener('change', () =>
    changeRoom(socket, customRoom.value)
  )
  customRoom.addEventListener('blur', () =>
    changeRoom(socket, customRoom.value)
  )
}
