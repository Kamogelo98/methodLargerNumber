function larger_number(num1,num2=1){
    if(num1>num2){
        return num1;
    }else if (num2>num1){
        return num2
    }
    else{
        return "They are equal";
    }
}
console.log(larger_number(1));