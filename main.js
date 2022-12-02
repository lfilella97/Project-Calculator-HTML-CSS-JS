
textoInferiorPantalla=document.getElementById("textoInferiorPantalla")
textoSuperiorPantalla=document.getElementById("textoSuperiorPantalla")
textoInferiorPantalla.innerHTML = [0]
textoSuperiorPantalla.innerHTML = [0]

const calculator = {
    provisionalNumber: [],
    firstNumber: 0,
    secondNumber: 0,
    previusSing: undefined,
    normalSing: undefined,
    firstImput: false,
}
const numberClick = (number) =>{
    calculator.provisionalNumber.push(number);
    showOnInferiorScreen(+calculator.provisionalNumber.join(''));
};
const singClick = (sing) => {debugger
    if(sing === 'CE'){
        resetProvisionalNumber()
        return;
    };
    if(firstImput()){
        defineFirstNumber();
        refreshScreens(calculator.firstNumber,sing);
        trySquare(sing);
        if(!(typeOfSing(sing))){
            switch (sing){
                case '=':
                refreshScreens(0,calculator.firstNumber)
                break;
                case 'invert':
                    calculator.firstNumber = 0 - calculator.firstNumber
                    refreshScreens(calculator.firstNumber,0)
                break;
            };
        };
    }else if(typeOfSing(sing)){
        defineSecondNumber()
        operations(sing)  
    }else{
        defineSecondNumber()
        switch (sing){
            case '=':
            refreshScreens(0,calculator.firstNumber)
            break;
            case 'invert':
                calculator.firstNumber = 0 - calculator.firstNumber
                refreshScreens(0,calculator.firstNumber)
            break;
        };
        operations(calculator.previusSing)
    };
};
const resetProvisionalNumber = (sing) =>{
    calculator.provisionalNumber = [];
    refreshScreens(calculator.firstNumber,calculator.provisionalNumber);
};
const firstImput = () =>{ 
    return calculator.firstNumber === 0 ? calculator.firstImput = true : calculator.firstImput = false;
};
const defineFirstNumber = () => {
    calculator.firstNumber = +calculator.provisionalNumber.join('')
    calculator.provisionalNumber = []
    return calculator.firstNumber
};
const trySquare = (sing) => {
    if(sing=== '^'){
        square()
    };
};
const typeOfSing = (sing) => {
    switch (sing){
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
            calculator.previusSing = sing
            calculator.normalSing = true;
            break;
        case 'invert':
        case '=':
            calculator.normalSing = false;
            break;
    }
    return calculator.normalSing
};
const refreshScreens = (superior, inferior) =>{
    showOnSuperiorScreen(superior);
    showOnInferiorScreen(inferior);
};
const showOnSuperiorScreen = (superior) => {
    textoSuperiorPantalla.innerHTML = superior
};
const showOnInferiorScreen = (inferior) => {
    textoInferiorPantalla.innerHTML = inferior
};
const operations = (sing) => {
        switch (sing){
            case '+':
                calculator.firstNumber +=calculator.secondNumber
                calculator.provisionalNumber = [];
                refreshScreens(calculator.firstNumber,calculator.previusSing);
            break;
            case '-':
                calculator.firstNumber -=calculator.secondNumber
                calculator.provisionalNumber = [];
                refreshScreens(calculator.firstNumber,calculator.previusSing)
            break;
            case '*':
                calculator.firstNumber *=calculator.secondNumber
                calculator.provisionalNumber = [];
                calculator.secondNumber=[1]

                refreshScreens(calculator.firstNumber,calculator.previusSing)
            break;
            case '/':
                if(calculator.secondNumber===[0]) { 
                    calculator.secondNumber =[1] 
                }
                calculator.firstNumber /= calculator.secondNumber
                calculator.provisionalNumber = [];
                refreshScreens(calculator.firstNumber,calculator.previusSing)
                
            break;
            case '^':
                square()
            break;
            case 'invert':
                calculator.firstNumber = (0-calculator.firstNumber)
                
            break;
        };
};
const defineSecondNumber = () =>{
    calculator.secondNumber = +calculator.provisionalNumber.join('')
}

const square = () => {
        calculator.firstNumber *= calculator.firstNumber
        calculator.provisionalNumber = [];
        refreshScreens(calculator.firstNumber,calculator.previusSing);
        calculator.firstNumber = 0
}
