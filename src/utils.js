export const loadState = () => {
    try{
        const serializeState = localStorage.getItem('state');
        if(serializeState === null) return;
        return JSON.parse(serializeState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializeState = JSON.stringify(state.todos);
        return localStorage.setItem('state', serializeState);
    }catch (err){
        //some error message
    }
}

export const throttle = (fn, time) => {
    let isWaiting = false;

    return function (...args){
        if (isWaiting) return;
        fn(...args);
        isWaiting = true;
        setTimeout(() => {
            isWaiting  = false;
        }, time)
    }
}