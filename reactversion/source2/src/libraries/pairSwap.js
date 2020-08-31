function pairSwap(array) {
    let aL = array.length;
    let copy = [...array];
    let out = [];

    for (let i = 0; i < aL / 2; i += 1) {
        let pop1 = copy.pop();
        let pop2 = copy.pop();
        out.push(pop2, pop1);
    }
    return out;
}

export default pairSwap;