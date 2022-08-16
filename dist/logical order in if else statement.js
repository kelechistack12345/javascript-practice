function elseiffunction(val){
    if(val < 5){
        return "value is greater than 5"
    }
    else if(val < 10){
        return "value is smaller than 10"

    }
    else{
        return "the value is between 10 and 5"
    }

}
console.log(elseiffunction(6));