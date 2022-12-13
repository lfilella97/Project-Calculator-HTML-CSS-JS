textoInferiorPantalla=document.querySelector(".textoInferiorPantalla");
textoSuperiorPantalla=document.querySelector(".textoSuperiorPantalla");
textoInferiorPantalla.innerHTML = [0];
textoSuperiorPantalla.innerHTML = [0];

const clearEntryButton = document.querySelector(".CE");
clearEntryButton.addEventListener("click", () => {
    calculator.provisionalNumber = [0];
    refreshScreens(+calculator.result, +calculator.provisionalNumber.join(''));
});
const commaButton = document.querySelector(".comma");
commaButton.addEventListener("click", () => {
    if (calculator.provisionalNumber.indexOf('.') === -1){
        calculator.provisionalNumber.push('.');
        showOnInferiorScreen(calculator.provisionalNumber.join(''));
    };
});
const numberButtonNine = document.querySelector(".nine");
numberButtonNine.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(event)
    getNumber(numberButtonNine.innerHTML)
});
const numberButtonEigth = document.querySelector(".eight");
numberButtonEigth.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonEigth.innerHTML)
});
const numberButtonSeven = document.querySelector(".seven");
numberButtonSeven.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonSeven.innerHTML)
});
const numberButtonSix = document.querySelector(".six");
numberButtonSix.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonSix.innerHTML)
});
const numberButtonFive = document.querySelector(".five");
numberButtonFive.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonFive.innerHTML)
});
const numberButtonFour = document.querySelector(".four");
numberButtonFour.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonFour.innerHTML)
});
const numberButtonThree = document.querySelector(".three");
numberButtonThree.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonThree.innerHTML)
});
const numberButtonTwo = document.querySelector(".two");
numberButtonTwo.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonTwo.innerHTML)
});
const numberButtonOne = document.querySelector(".one");
numberButtonOne.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonOne.innerHTML)
});
const numberButtonZero = document.querySelector(".zero");
numberButtonZero.addEventListener("click",(event)=>{
    event.preventDefault();
    getNumber(numberButtonZero.innerHTML)
});
const squareButton = document.querySelector(".square");
squareButton.addEventListener("click",(event)=>{
    event.preventDefault();
    squareClick('^')
});
const invertButton = document.querySelector(".invert");
invertButton.addEventListener("click",(event)=>{
    event.preventDefault();
    invertClick('invert')
});
const plusButton = document.querySelector(".plus");
plusButton.addEventListener("click",(event)=>{
    event.preventDefault();
    operatorClick('+')
});
const minusButton = document.querySelector(".minus");
minusButton.addEventListener("click",(event)=>{
    event.preventDefault();
    operatorClick('-')
});
const multiplicationButton = document.querySelector(".multiplication");
multiplicationButton.addEventListener("click",(event)=>{
    event.preventDefault();
    operatorClick('*')
});
const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click",(event)=>{
    event.preventDefault();
    operatorClick('/')
});
const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click",(event)=>{
    event.preventDefault();
    equalClick('=')
});

const calculator = {
    provisionalNumber: [],
    number: 0,
    result: 0,
    sign: undefined,
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

const getNumber = (number) =>{
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
const fixNumber = () => {
    if (!Number.isInteger(calculator.result)){
        calculator.result = (+calculator.result).toFixed(2)
    };
};

const refreshScreens = (superior, inferior) =>{
    showOnSuperiorScreen(superior);
    showOnInferiorScreen(inferior);
};
const showOnSuperiorScreen = (superior) => {
    if(Number.isFinite){
        if(superior.toString().split('').length > 16){
            superior = superior.toString().split('')[0] + "x10^" + superior.toString().split('').length
        };
       };
    textoSuperiorPantalla.innerHTML = superior;
};
const showOnInferiorScreen = (inferior) => {
   if(Number.isFinite){
    if(inferior.toString().split('').length > 11){
        inferior = inferior.toString().split('')[0] + "x10^" + inferior.toString().split('').length
    };
   };
    textoInferiorPantalla.innerHTML = inferior;
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