import { Elastic, Expo } from 'gsap/all'
import TimelineMax from 'gsap/TimelineMax'

const $ = id => document.getElementById(id)
const crashCymbol = $('Crash-Cymbol')
const leftTomDrumAll = $('Tom-Left-All')
const leftTomDrum = $('Tom-Left-Drum')
const rightTomDrumAll = $('Tom-Right-All')
const rightTomDrum = $('Tom-Right-Drum')
const floorTomDrumAll = $('Floor-Tom')
const snareDrum = $('Snare-Drum')
const kickDrumAll = $('Kick')
const hiHatTop = $('Hi-Hat-Top')
const hiHatBottom = $('Hi-Hat-Bottom')

var crash = new TimelineMax({
  paused: true
})

crash
  .to(crashCymbol, 0.1, { rotation: 8, transformOrigin: '50% 50%' })
  .to(crashCymbol, 1.5, {
    rotation: 0,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.config(2.5, 0.3)
  })

var rightTom = new TimelineMax({
  paused: true
})

var leftTom = new TimelineMax({
  paused: true
})
leftTom
  .to(leftTomDrum, 0.1, {
    scaleX: 1.04,
    transformOrigin: '50% 50%',
    ease: Expo.easeOut
  })
  .to(
    leftTomDrum,
    0.1,
    { scaleY: 0.95, transformOrigin: '50% 50%', ease: Expo.easeOut },
    '0'
  )
  .to(
    leftTomDrumAll,
    0.1,
    { rotation: -2.5, transformOrigin: '100% 50%', ease: Elastic.easeOut },
    '0'
  )
  .to(leftTomDrum, 0.4, {
    scale: 1,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut
  })
  .to(
    leftTomDrumAll,
    0.6,
    { rotation: 0, transformOrigin: '100% 50%', ease: Elastic.easeOut },
    '-=0.4'
  )

rightTom
  .to(rightTomDrum, 0.1, {
    scaleX: 1.04,
    transformOrigin: '50% 50%',
    ease: Expo.easeOut
  })
  .to(
    rightTomDrum,
    0.1,
    { scaleY: 0.95, transformOrigin: '50% 50%', ease: Expo.easeOut },
    '0'
  )
  .to(
    rightTomDrumAll,
    0.1,
    { rotation: 2.5, transformOrigin: '0 50%', ease: Elastic.easeOut },
    '0'
  )
  .to(rightTomDrum, 0.4, {
    scale: 1,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut
  })
  .to(
    rightTomDrumAll,
    0.6,
    { rotation: 0, transformOrigin: '0 50%', ease: Elastic.easeOut },
    '-=0.4'
  )

var floorTom = new TimelineMax({
  paused: true
})
floorTom
  .to(floorTomDrumAll, 0.1, {
    scaleX: 1.02,
    transformOrigin: '50% 50%',
    ease: Expo.easeOut
  })
  .to(
    floorTomDrumAll,
    0.1,
    { scaleY: 0.95, transformOrigin: '50% 100%', ease: Expo.easeOut },
    '0'
  )
  .to(floorTomDrumAll, 0.4, {
    scale: 1,
    transformOrigin: '50% 100%',
    ease: Elastic.easeOut
  })

var snare = new TimelineMax({
  paused: true
})
snare
  .to(snareDrum, 0.1, {
    scaleX: 1.04,
    transformOrigin: '50% 50%',
    ease: Expo.easeOut
  })
  .to(
    snareDrum,
    0.1,
    { scaleY: 0.9, transformOrigin: '50% 100%', ease: Expo.easeOut },
    '0'
  )
  .to(snareDrum, 0.4, {
    scale: 1,
    transformOrigin: '50% 100%',
    ease: Elastic.easeOut
  })

var kick = new TimelineMax({
  paused: true
})
kick
  .to(kickDrumAll, 0.1, {
    scale: 1.02,
    transformOrigin: '50% 100%',
    ease: Expo.easeOut
  })
  .to(kickDrumAll, 0.4, {
    scale: 1,
    transformOrigin: '50% 100%',
    ease: Elastic.easeOut
  })

var hiHat = new TimelineMax({
  paused: true
})
hiHat
  .to([hiHatTop, hiHatBottom], 0.1, {
    rotation: -4,
    transformOrigin: '50% 50%'
  })
  .to([hiHatTop, hiHatBottom], 0.6, {
    rotation: 0,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.config(1.5, 0.2)
  })

export default {
  hiHat,
  snare,
  kick,
  crash,
  leftTom,
  rightTom,
  floorTom
}
