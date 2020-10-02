export function linearToFractal(mol, dic){
    console.log({mol})
    let linearCode = [];
    let convertedCode = [];
    let fractalCode = [];

    linearCode = mol.split(' ');
    linearCode.forEach(code => {
        convertedCode.push(`_${code}`)
    });
    
    convertedCode.forEach(code => {
        dic.forEach(wd => {
            if(wd.name === code) {
                fractalCode.push(wd.fractal)
            }
        });
    });

    return fractalCode.toString().replaceAll(',', ' ');
}

