// action = {
//     type: 'Обратись к банкиру',
//     payload: какие то данные
// }

export default function profileReducer(state, action) {
    if (action.type === 'allowEditing') {
        return { ...state, isEditing: true }
    }
    if (action.type === 'disableEditing') {
        return { ...state, isEditing: false }
    }
    if (action.type === 'resetForm') {
        return { ...state, isEditing: false, username: action.payload.username, email: action.payload.email  }
    }
    if (action.type === 'changeUsername') {
        return { ...state, username: action.payload } // username: 'fsfdsfs'
    }
    if (action.type === 'changeEmail') {
        return { ...state, email: action.payload } // email: 'fsfdsfs@gmail.com'
    }
    if (action.type === 'setError') {
        return { ...state, error: action.payload } // error: 'Error when editing profile!'
    }
    if (action.type === 'setIsLoading') {
        return { ...state, isLoading: action.payload } // isLoading: true/false
    }
}