export function debounce(func, delay) {
    let timeout;
    return function (...args) { // event
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args); // changeSearchInput(event)
        }, delay);
    };
}