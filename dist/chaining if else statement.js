function testsize(num){
    if (num <5){
        return "tiny"
    }
    else if(num < 10){
        return "small"

    }
    else if(num < 15){
        return "meduim"

    }
    else if(num < 20){
        return "large"

    }
    else{
        return "huge"

    }
  
}

console.log(testsize(25));

