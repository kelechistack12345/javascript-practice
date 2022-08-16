function switchcases(val){
    var answer = "";
    switch(val) {
        case "a":
          answer = "apple"
          break;
        case "b":
          answer = "banana"
          break;
        case "c":
          answer = "cat"
          break;
        case "d":
            answer = "dog"
            break;
        default:
        answer = "stuff"
        break;
      }
    
      return answer;
    }
    
    
    console.log(switchcases(1));