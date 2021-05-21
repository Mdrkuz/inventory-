export const createLine = (name, price, quantity) => ({
  type: 'CREATE_LINE',
  name,
  price,
  quantity
})

export const removeLine = line => ({
  type: 'REMOVE_LINE',
  line
})

export const incrementQuantity =  line => ({
  type: 'INCREMENT_QUANTITY',
  line
})

export const decrementQuantity =  line => ({
  type: 'DECREMENT_QUANTITY',
  line
})

export const findProduct = productName => ({
  type: 'FIND_PRODUCT',
  productName
})

export const showAll = () => ({
  type: 'SHOW_ALL'
})

export const sortByQuantity = ( ) => ({
  type: 'SORT_BY_QUANTITY',

  
})