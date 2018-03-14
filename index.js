function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector('#nested, .target')
}

function deepestChild() {
  return document.getElementById('div').querySelectorAll('grand-node')
}
