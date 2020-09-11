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

export function changeLoop(array) {
    let copy = [...array];
    let len = copy.length;
    let start = copy.slice(0, 2);
    let end = copy.slice(len - 2, len + 1);
    let output = [];
    if (start.toString() === end.toString()) {
        output.push([...copy]);
        //remove last pair 
        let last1 = output[0].pop();
        let last0 = output[0].pop();
        //remove first pair
        let first0 = output[0].shift();
        let first1 = output[0].shift();
        //copy new first pair
        let newFirst = output[0].slice(0, 2);

        //add new first pair at end
        output.push(newFirst);
        output = output.flat();
        //insert ancient pair in second place
        output.splice(2, 0, first1);
        output.splice(2, 0, first0);
        return output;
    } else {
        return;
    }
}


export function checkMatch(array, source) {

    function shift(ar) {
        let aL = ar.length;
        let copy = [...ar];
        let copy1 = [...ar];
        let start = copy1.slice(0, 2);
        let end = copy1.slice(aL - 2, aL + 1);
        let out = [];

        if (start.toString() === end.toString()) {

            for(let k = 0; k < aL/2; k += 1) {
                //remove last pair
                let last1 = copy1.pop();
                let last0 = copy1.pop();
                
                //remove first pair
                let first0 = copy1.shift();
                let first1 = copy1.shift();
             
                //copy second pair
                let tempLast1 = copy1.pop();
                let tempLast0 = copy1.pop();
                copy1.unshift(tempLast1);
                copy1.unshift(tempLast0);
              
                //push copy second pair
                copy1.push(tempLast0);
                copy1.push(tempLast1);
                
                //insert ancient pair in second place
                copy1.splice(2, 0, first1);
                copy1.splice(2, 0, first0);
                copy1 = copy1.flat();

                out.push(copy1);

                 //invert 2nd and 3rd pairs

            }            
            
            // console.log({ out });
            return out;
        } else {
            for (let i = 0; i < aL; i += 1) {
                let last1 = copy.pop();
                let last0 = copy.pop();
                copy.unshift(last1);
                copy.unshift(last0);
                copy = copy.flat();
                out.push(copy);
            }
            out.pop();
            return out;
        }
        
    }

    let options = shift(array);

    source.forEach(arr => {
        options.forEach(option => {
            if (arr.toString().includes(option.toString())) {
                // console.log('BOOYA !', option);
                return true;
            }
        })
    })

}
