 function chaintoswitch(val){
    var answer ="";

    switch(val){

        case "bob":
            answer ="marley";
            break;
        case 42:
            answer ="the answer";
            break;
        case 1:
            answer ="There is no #1";
            break;
        case 99:
             answer ="missed me by this much!";
             break;
        case 7:
              answer ="Ate Nine";
              break;

        default:
            answer = "null";
            break;




    }

    return answer;




 }console.log(chaintoswitch(2))