export function debounce(fnc, delay){
    let timer = null
    return function(...arg) {
        if(timer) {
            clearTimeout(timer)
        }
        setTimeout(() => {
            fnc.apply(this, arg)
        }, delay)
    }
}