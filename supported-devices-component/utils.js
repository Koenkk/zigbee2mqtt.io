export function debounce_leadingTrailing(func, timeout = 300) {
    let timer;
    let trailing = false;
    return (...args) => {
        if (!timer) {
            func.apply(this, args);
            timer = setTimeout(() => {
                timer = undefined;
                if (trailing) {
                    func.apply(this, args);
                }
                trailing = false;
            }, timeout);
        } else {
            trailing = true;
        }
    };
}
