import DIRECTORY_DATA from './directory.data'
const INITIAL__STATE = {
    sections: DIRECTORY_DATA
}

const directoryReducer = (state = INITIAL__STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer