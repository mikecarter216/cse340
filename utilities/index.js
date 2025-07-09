async function getNav() {
  return `
  <nav>
    <a href='/'>Home</a>
    <a href='/inv/type/custom'>Custom</a>
    <a href='/inv/type/sedan'>Sedan</a>
    <a href='/inv/type/suv'>SUV</a>
    <a href='/inv/type/truck'>Truck</a>
    <a href='/account'>My Account</a>
  </nav>`
}
module.exports = { getNav }
