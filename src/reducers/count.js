
let initState={count:0};
const moneyApp = (state = initState, action) => {
    switch (action.type) {
      case 'M_PLUS':
        return {
            count:1
        }
      case 'M_MINUS':
        return {
            count:-1
        }
      default:
        return state
    }
  }
  
  export default moneyApp