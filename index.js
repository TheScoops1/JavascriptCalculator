// This is my CLI calulator app

// order of operations
// seperate the parthenasis
// determine operator order
// isolate two numbers with one operator
// solve the one operation thats been isolated
// replace the operation in the orginal spot
// solve all operations until left with one number
// EXAMPLE
// 5+(10^2/(5*2))-15
// 1st. 10^2=100 and 5*2=10 -> 5+(100/10)-15
// 2nd. 5+10-15
// 3rd. 0

// Write your function below here
let expression = "5+(10^2/2)*(2+5)^3-5";

function add (a, b) {
    return a + b;
}

function divide (a, b) {
    return a / b;
}

function multiply (a, b) {
    return a * b;
}

function subtract (a, b) {
    return a - b;
}

function exponets (a, i) {
    let base_number = a;
    for (j = 0; j < (i -1); j++){
        a = a * base_number;
    }
    return a;
}

function emdas(equation, multiple_operator_check) {
    let first_number = "";
    let second_number = "";

    let return_number = 0;

    let first = true;
    let operator = false;
    let operator_position = Number()


    for (let j = 0; j < equation.length; j++) {

        let number_check = Number.isNaN(parseFloat(equation[j]));

        if (number_check == false) {
        } else {
            first = false;
            operator = true;
            operator_position = j
        }
        if (first == true) {
            first_number += equation[j]
        } else if (first == false) {
            if (operator == false) {
                second_number += equation[j]
            }
            operator = false;
        }
    }

    if (equation[operator_position] == '+') {
        return_number = add(Number(first_number), Number(second_number));
    }
    if (equation[operator_position] == '-') {
        return_number = subtract(Number(first_number), Number(second_number));
    }
    if (equation[operator_position] == '/') {
        return_number = divide(Number(first_number), Number(second_number));
    }
    if (equation[operator_position] == '*') {
        return_number = multiply(Number(first_number), Number(second_number));
    }
    if (equation[operator_position] == '^') {
        return_number = exponets(Number(first_number), Number(second_number));
    }

    return return_number;
}

function multiple_operator_check(equation_to_check){
    let operator_check = false
    let multiple_operator_check = false

    for (let i = 0; i < equation_to_check.length; i++) {
        let number_check = Number.isNaN(parseFloat(equation_to_check[i]));

        if (number_check == true) {
            if (operator_check == true) {
                multiple_operator_check = true
            } else {
                operator_check = true
            }
        }
    }
    return multiple_operator_check;
}

function no_operator_check(equation_to_check) {
    let no_operator = false

    for (let i = 0; i < equation_to_check.length; i++) {
        let number_check = Number.isNaN(parseFloat(equation_to_check[i]));

        if (number_check == true) {
            no_operator = true
        }
    }
    return no_operator;
}


function multiple_operator_breakdown(equation) {
    let operator_check = false
    let operator_index = 0
    let partially_solved_equation = ""

    let full_equation = []

    for (let i = 0; i < equation.length; i++) {
        let number_check = Number.isNaN(parseFloat(equation[i]));

        if (number_check == true) {
            if (operator_check == true) {
                let first_operator_awnser = emdas(equation.slice(0, i))
                partially_solved_equation = equation.replace(equation.slice(0, i), first_operator_awnser)
                i = equation.length
            } else {
                operator_check = true
                operator_index = i
            }
        }
    }
    return partially_solved_equation
}

function order_of_operator(equation) {
    let operator_list = []
    for (let i = 0; i < equation.length; i++) {
        if (equation[i] = "^"){
            operator_list.unshift([equation[i], i])
        }
        if (equation[i] = "/" ){
            let current_operator = ""
            let next_operator = ""
            for (let j = 0; j < operator_list.length; j++) {
                current_operator = operator_list[j][0]
                next_operator = operator_list[j +1][0]
                if (next_operator != last_operator) {

                }
            }
            operator_list.push([equation[i], i])
        }
        if (equation[i] = "*"){
            operator_list.push([equation[i], i])
        }
        if (equation[i] = "^"){
            operator_list.push([equation[i], i])
        }
    }
}
function disect_parathenasis(equation_to_disecte) {
    let expression_length = equation_to_disecte.length;
    const equation_parathenasis_broken_Down = [];

    let start_index = null
    let end_index = null

    for (let i = 0; i < expression_length; i++) {
        let char = equation_to_disecte.charAt(i);
        if (char == "(") {
            start_index = i
        }
        if (char == ")") {
            end_index = i
        }
        if (start_index != null && end_index != null) {
            equation_parathenasis_broken_Down.push([equation_to_disecte.slice((start_index + 1), end_index), [start_index + 1, end_index]]);
            start_index = null;
            end_index = null;
        }
    }

    return equation_parathenasis_broken_Down
}

function calculator (expresion_to_evalulate) {
    console.log("This is the current expressions to evaluate");
    console.log(expresion_to_evalulate + "\n");

    let number_to_return = disect_parathenasis(expresion_to_evalulate);
    let finished_check = no_operator_check(number_to_return[0][0]);

    while (finished_check == false) {

    }

    for (i = 0; i < number_to_return.length; i++) {
        let multiple_check = multiple_operator_check(number_to_return[i][0]);
        if (multiple_check == true) {
            number_to_return[i][0] = multiple_operator_breakdown(number_to_return[i][0]);
        }
    }

    finished_check = no_operator_check(number_to_return[0][0])
    console.log(number_to_return);
}

calculator(expression)