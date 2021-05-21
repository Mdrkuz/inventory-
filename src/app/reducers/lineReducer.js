
const getId = (() => {
    let count = localStorage.getItem("counter") || 0;
    return () => {
       count++
       localStorage.setItem('counter', count)
       return count
    };
  })()

  
export const lineReducer = (state = {list: []}, action) => {
    switch(action.type) {
      case 'CREATE_LINE': 
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: getId(),
              name: action.name,
              price: action.price,
              quantity: action.quantity,
              code: Math.random(it => !it.code.includes(action.code)),
              mode: false
            }
          ],
        }
        case 'REMOVE_LINE': 
          return {
            ...state,
            list: state.list.filter(it => it !== action.line)
          }
        
        case 'INCREMENT_QUANTITY':
          return {
            ...state,
            list: state.list.map((it) => {
              if(it === action.line) {
                return {
                  ...it,
                  quantity: +it.quantity + 1
                }
              }
              else {
                return it
              }
            })
          }
        
          case 'DECREMENT_QUANTITY':
            return {
              ...state,
              list: state.list.map((it) => {
                if(it === action.line) {
                  return {
                    ...it,
                    quantity: it.quantity - 1
                  }
                }
                else {
                  return it
                }
              })
            }
          case 'FIND_PRODUCT':
            return {
              ...state,
              productName: action.productName
            }
          case 'SHOW_ALL':
            return {
              ...state,
              productName: ''
            }
          case 'SORT_BY_QUANTITY': 
            return {
              ...state,
              mode: !state.mode
            }
          default:
            return state
    }
  }