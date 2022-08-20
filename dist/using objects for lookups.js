function phoneticlookup(val){
    var result = "";

    var lookup = {
        "name": "sammy",
        "age":12,
        "college":"imsu",
        "degree":"bsc"

    }

    result = lookup[val];

    return result;


}
console.log(phoneticlookup("name"));