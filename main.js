textoInferiorPantalla=document.getElementById("textoInferiorPantalla");
textoSuperiorPantalla=document.getElementById("textoSuperiorPantalla");
textoInferiorPantalla.innerHTML = [];
textoSuperiorPantalla.innerHTML = [];

const calculator = {
    provisionalNumber: [],
    number: 0,
    result: 0,
    sign: undefined,
};

const clearEntryClick = () => {
    calculator.provisionalNumber = [0];
    refreshScreens(+calculator.result, +calculator.provisionalNumber.join(''));
};
const squareClick = (sign) =>{console.table(calculator);
    defineNumber();
    getResult(calculator.sign);
    defineNumberAndSign(sign);
    getResult(sign);
    calculator.sign = undefined;
    calculator.provisionalNumber = calculator.result.toString().split('');
    refreshScreens(calculator.result, calculator.number); 
    equalClick('=')
};
const invertClick = (sign) => {
    defineNumber();
    getResult(calculator.sign);
    defineNumberAndSign(sign);
    getResult(sign);
    calculator.sign = undefined
    calculator.provisionalNumber= calculator.result.toString().split('');
    refreshScreens(calculator.result, calculator.number);
    equalClick('=')
};
const commaclick = () => {
    if (calculator.provisionalNumber.indexOf('.') === -1){
        calculator.provisionalNumber.push('.');
    };
};
const numberClick = (number) =>{
    calculator.provisionalNumber.push(number);
    refreshScreens(+calculator.result, +calculator.provisionalNumber.join(''));console.table(calculator);
};
const operatorClick = (sign) => {
    processData(sign);
    refreshScreens(calculator.result, calculator.number);
};
const equalClick = (sign) => {
    processData(sign);
    refreshScreens('=' , calculator.result);
};

const refreshScreens = (superior, inferior) =>{
    showOnSuperiorScreen(superior);
    showOnInferiorScreen(inferior);
};
const showOnSuperiorScreen = (superior) => {
    textoSuperiorPantalla.innerHTML = superior;
};
const showOnInferiorScreen = (inferior) => {
    textoInferiorPantalla.innerHTML = inferior;
};

const processData = (sign) =>{
    defineNumber();
    getResult(calculator.sign);
    defineNumberAndSign(sign);
};
const defineNumber = () =>{
    calculator.number = calculator.provisionalNumber.join('');
    calculator.provisionalNumber = [];
};
const defineNumberAndSign = (sign) => {
    calculator.sign = sign;
    defineNumber();
};

const getResult = (sign) =>{
 switch (sign){
    case '+':
        plus();
        break;
    case '-':
        minus();
        break;
    case '*':
        multiplier();
        break;
    case '/': 
        division();
        break;
    case '^':
        square();
        break;
    case 'invert':
        invert();
        break;
    case undefined:
        calculator.result = +calculator.number
        break;
    };
};

const plus = () => {
    calculator.result = ((+calculator.result) + (+calculator.number));
    fixNumber();
    return calculator.result;
};
const minus = () =>{
    calculator.result = ((+calculator.result) - (+calculator.number));
    fixNumber();
    return calculator.result;
};
const multiplier = () => {
    calculator.result = ((+calculator.result) * (+calculator.number));
    fixNumber();
    return calculator.result;
};
const division = () =>{
    calculator.result = ((+calculator.result) / (+calculator.number));
    fixNumber();
    return calculator.result;
};
const square = () => {
    ((calculator.result) *= calculator.result);
    fixNumber();
    return calculator.result;
};
const invert = () => {
    (calculator.result = 0 - calculator.result);
    fixNumber();
    return calculator.result;
};
const fixNumber = () => {
    if (!Number.isInteger(calculator.result)){
        calculator.result = (+calculator.result).toFixed(2)
    };
};
