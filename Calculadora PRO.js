 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 const showOnSuperiorScreen = (source) => {
    textoSuperiorPantalla.innerHTML = Number.isInteger(source) ? source :Number.parseFloat(source).toFixed(2)
}
const showOnInferiorScreen = (source) => {
    textoInferiorPantalla.innerHTML = Number.parseFloat(source)
}

 
 
 
 let resultado = []
 let valoresIntroducidos = []
 let result = []
const calculadora = () => {
    do{
        getNumbers()
        console.log(valoresIntroducidos)
        if(result != "0" && result != "" && result != 0){
            resultado.unshift(result)
        }
        resultado != 0 ? alert('Ultimos resultados:' + resultado) : resultado
        response = confirm(`Quieres hacer otro calculo? si -> aceptar / no -> cancelar`)
    }while(response != false)
    alert('Bye!')
}
const numberClick = (number) =>{
    return number 
   }
   const singClick = () => {
   
}
   
const getNumbers = () => {
    let count = -1;
    do{
        valoresIntroducidos.push(numberClick(number));
        count++;
       if((valoresIntroducidos[count] == (null))){
                valoresIntroducidos.pop();
            if(valoresIntroducidos.length == 1){
                result.push('\nEl cuadrado de tu numero es: ' + valoresIntroducidos[0]* valoresIntroducidos[0])
            }else if(valoresIntroducidos.length == 0){
                alert('ERROR: No has introducido ningun valor');
                break;
            }else{
                result.push(operaciones())
            }
                break;
        }else if(isNaN(parseFloat(valoresIntroducidos[count]))){
            alert('ERROR: has introducido un valor invalido');
            break;
        } 
    }while (count < 100);
    return result;
}
const operaciones = () => {
    const sum = () => {
        let acc = 0;
        for (num in valoresIntroducidos) {
            (num == 0)? 
            acc = parseFloat(valoresIntroducidos[num]) :
            acc += parseFloat(valoresIntroducidos[num]);
        }
        if (!(Number.isInteger(acc))){
            acc = acc.toFixed(3)
        }
        return parseFloat(acc);
    }
    const res = () => {
        let acc = 0;
        for (num in valoresIntroducidos) {
            (num == 0)? 
            acc = parseFloat(valoresIntroducidos[num]) :
            acc -= parseFloat(valoresIntroducidos[num]);
        }
        if (!(Number.isInteger(acc))){
            acc = acc.toFixed(3)
        }
        return parseFloat(acc);
    }
    const mult = () => {
        let acc;
        for (num in valoresIntroducidos) {
            (num == 0)? 
            acc = parseFloat(valoresIntroducidos[num]) :
            acc *= parseFloat(valoresIntroducidos[num]);
        }
        if (!(Number.isInteger(acc))){
            acc = acc.toFixed(3)
        }
        return parseFloat(acc);
    }
    const div = () => {
        let acc = 0;
        for (num in valoresIntroducidos) {
            (num == 0)? 
            acc = parseFloat(valoresIntroducidos[num]) :
            acc /= parseFloat(valoresIntroducidos[num]);
        }
        if (!(Number.isInteger(acc))){
            acc = acc.toFixed(3)
        }
        return parseFloat(acc);
    }
    return '\nEl resultado de las operaciones es: ' + sum() + ', ' + res() + ', ' + mult() + ', ' +  div()
}
calculadora()
