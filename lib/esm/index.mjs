function now() {
    return new Date();
}
export function year(time = now()) {
    return time.getFullYear();
}
export function month(time = now()) {
    return time.getMonth();
}
export function date(time = now()) {
    return time.getDate();
}
export function day(time = now()) {
    return time.getDay();
}
export default {
    year,
    month,
    date,
    day,
};
