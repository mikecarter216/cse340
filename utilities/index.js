async function getNav() {
  // Return navigation HTML (this is a placeholder)
  return `<nav>
    <a href="/">Home</a> |
    <a href="/inv/type/Custom">Custom</a> |
    <a href="/inv/type/SUV">SUV</a> |
    <a href="/inv/type/Truck">Truck</a>
    <a href="/inv/type/Sport">Sport</a> |
    <a href="/inv/type/Sedan">Sedan</a>
  </nav>`
}

module.exports = {
  getNav
}