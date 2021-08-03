// Completed on 08/02/2021
function digital_root(n) {
    if (String(n).length === 1) {
        return n;
    } else {
        return Number(String(n)[0]) + digital_root(Number(String(n).slice(1)))
    }
}