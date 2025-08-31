
export default (state, action) => {
    switch(action.type) {
        case 'deleteTransaction':
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        default:
            return state
    }
}