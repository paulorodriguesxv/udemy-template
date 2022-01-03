const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const getDiscountedPrice = (value, discount) => {
  return formatter.format(value * (1 - discount));
};

export { formatter, getDiscountedPrice };
