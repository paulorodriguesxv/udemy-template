
const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2})

const getDiscountedPrice = (value, discount) => {
  return formatter.format(value * (1 - discount))
}


export {formatter, getDiscountedPrice}