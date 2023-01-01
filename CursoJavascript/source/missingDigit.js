function MissingDigit(str) { 




    let split = str.split(" ")
    
    console.log(split)
    
    let operand = split[0]
    let operator = split[1]
    let operandTwo = split[2]
    let result = split[-1]
    let resp = ''
    
    console.log(str)
    if(str.includes("x")){
        x = result
        if(operand.includes("1x0")){
            operand = 0
        }else{
           operand = parseInt(operand)
        }
        operandTwo = parseInt(operandTwo)
    
        if(operator == '+'){
            resp = operand + operandTwo
        }else if(operator == '-'){
            resp = operand - operandTwo
        }else if(operator == '*'){
            resp = operand * operandTwo
        }else{
            resp = operand / operandTwo
        }
    }else{
        result = parseInt(result)
        if(operand.includes("1x0")){
            x = operand
            operandTwo = parseInt(operandTwo)
    
            if(operator == '+'){
                resp = result - operandTwo
            }else if(operator == '-'){
                resp = result + operandTwo
            }else if(operator == '*'){
                resp = result / operandTwo
            }else{
                resp = result * operandTwo
            }
        }else{
            x = operandTwo
            operand = parseInt(operand)
    
            if(operator == '+'){
                resp = result - operand
            }else if(operator == '-'){
                resp = operand - result
            }else if(operator == '*'){
                resp = result / operand
            }else{
                resp = result / operandTwo
            }
    
        }
    }
    
    resp = resp.toString()
    const key = 0
    const i = 1
    for (i in x) {
        if (i == 'x') {
             str = resp[key];
        }else{
            key = key + 1
        }
    }
    
    return resp
     
    
    }
       
       
    // keep this function call here 
    console.log(MissingDigit('1x0 * 12 = 1200'));