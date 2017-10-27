(function outerFunc(outerArg) {
    var outerVar = 3;
  
    (function middleFunc(middleArg) {
      var middleVar = 4;
  
      (function innerFunc(innerArg) {
        var innerVar = 5;
        // EXAMPLE OF SCOPE IN CLOSURE:
        // Variables from innerFunc, middleFunc, and outerFunc,
        // as well as the global namespace, are ALL in scope here.
        console.log("outerArg="+outerArg+
                    " middleArg="+middleArg+
                    " innerArg="+innerArg+"\n"+
                    " outerVar="+outerVar+
                    " middleVar="+middleVar+
                    " innerVar="+innerVar);
        // --------------- THIS WILL LOG: ---------------
        //    outerArg=123 middleArg=456 innerArg=789
        //    outerVar=3 middleVar=4 innerVar=5
      })(789);
    })(456);
  })(123);


///////

  for(var i=0; i<5; i++){
      setTimeout(function(){
          console.log(i);
      }, i*1000);
  }

  for(var i=0; i<5; i++){
      (function(x){
          setTimeout(function(){
              console.log(x);
          }, x*1000);
      })(i);
  }