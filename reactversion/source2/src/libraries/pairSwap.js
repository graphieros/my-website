export function pairSwap(array) {
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

export function changeLoop(array){

    let copy = [...array];
    let len = copy.length;
    let start = copy.slice(0,2);
    let end = copy.slice(len-2, len+1);

    let output = [];

    if(start.toString() === end.toString()){

        output.push([...copy]);
        //remove last pair 
        let last1 = output[0].pop();
        let last0 = output[0].pop();

        //remove first pair
        let first0 = output[0].shift();
        let first1 = output[0].shift();

        //copy new first pair
        let newFirst = output[0].slice(0,2);
        
        //add new first pair at end
        output.push(newFirst);
        output = output.flat();

        //insert ancient pair in second place
        output.splice(2,0, first1);
        output.splice(2,0, first0);

        return output;
    } else {
        return;
    }

}