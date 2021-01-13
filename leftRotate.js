function rotLeft(a, d) {
    let rotateBy = d
    if (d> a.length) {
        d = d%a.length
    }

    const x = a.splice(d);
    return x.concat(a)
}
