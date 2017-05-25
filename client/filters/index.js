import moment from 'moment'

export function toTime (timestamp) {
  return moment.unix(timestamp).format('HH:mm')
}

export function addClassModifiers(base, modifiers = []) {
  if (!Array.isArray(modifiers)) {
    modifiers = modifiers.split(' ')
  }
  modifiers = modifiers.map(modifier => `${base}--${modifier}`)
  return [base, ...modifiers]
}

export function degToCompass (deg) {
  let val = Math.floor((deg / 22.5) + 0.5)
  let arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  return arr[(val % 16)]
}
