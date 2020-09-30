export function linearToFractal(mol, dic){
    let linearCode = [];
    let convertedCode = [];
    let fractalCode = [];

    linearCode = mol.split(' ');
    linearCode.forEach(code => {
        convertedCode.push(`_${code}`)
    });
    
    convertedCode.forEach(code => {
        dic.forEach(word => {
            if(word.name === code) {
                fractalCode.push(word.fractal)
            }
        });
    });

    return fractalCode.toString().replaceAll(',', ' ');
}

