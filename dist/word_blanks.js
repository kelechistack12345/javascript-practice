function wordblanks(mynoun, myadjective,myverb,myadverb){

        var result =""
        result += "the " + myadjective + mynoun + myverb +"to the store " + myadverb


        return result;

}


console.log(wordblanks("dog ","big ","ran ","quickly "));
console.log(wordblanks("bike ","slow ","flew ","slowly "));