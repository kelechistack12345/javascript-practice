var mystorage = {
  "car":{
    "inside":{
        "glove box":"maps",
        "passanger seat":"crumbs"

    },
    "outside":{
        "truck":"jack"
    }

  }  

}

var gloveboxcontents= mystorage.car.inside["glove box"];

console.log(gloveboxcontents);