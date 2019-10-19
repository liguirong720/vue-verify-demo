export function addClass (el, className) {
  if (hasClass(el, className)) { // 该DOM对象有这个类名时，什么都不做
    return
  }
  let newClass = el.className.split('') // 获取类名
  newClass.push(className)
  el.className = newClass.join('')
}
export function hasClass (el, className) { // 是否存在该类名
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)') // (\\s| 空白字符)
  return reg.test(el.className) // el.className 获取class
}
