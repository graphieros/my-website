export function linearToFractal(mol, dic){

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

export function buildActiveFractal(glyphs, dic){

    let linearCode = [];
    let convertedCode = [];
    let fractalCode = [];

    linearCode = glyphs.split(' ');
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