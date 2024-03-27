const INITIAL_STATE={
user:{}
};



export const userReduser=(state=INITIAL_STATE,action)=>{

    switch(action.type){
    case 'SET_USER' : return {user:action.payloud} ;
    default: return state.user;
}
}