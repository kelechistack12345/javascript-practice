function abtest(a,b){
    if (a < 0 || b < 0){
        return undefined;
    }
    
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b), 2 ));
}

console.log(abtest(-2,2)); 