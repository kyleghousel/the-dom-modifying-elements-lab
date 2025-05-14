const mainNode = document.getElementById('main')
mainNode.remove()

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
const myName = 'Kyle'
newHeader.textContent = `${myName} is the champion`
