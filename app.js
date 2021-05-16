function fromRot13() {
  str = document.getElementById("rot").value;
  //Convert into Uppercase
  str = str.toUpperCase();
   //Split into individual chunks
  let newArr = str.split(" ");
  let result = [];
  //For each chunk
  for(let i=0; i<newArr.length; i++){
    var arr1 = [];
    //For each character in the chunk
    for(let j=0; j<newArr[i].length; j++){
      var tmp = newArr[i];
      //Ignoring !, ? and .
      if( tmp[j] !== "!" && tmp[j] !== "?"
      && tmp[j] !== "."){
        //Add 13
        var cCode = tmp.charCodeAt(j)+13;
        //If it gets larger then 90 then subtract 26
        cCode = cCode>90?cCode-26 :cCode;
        //Convert the Unicode into String
        var cChar = String.fromCharCode(cCode);
        arr1.push(cChar);
      }
      else arr1.push(tmp[j]);
    }
    //Convert the array into chunk
    result.push(arr1.join(""));
  }
  //Convert the chunks into sentence
  var ans = result.join(" ");
  document.getElementById("eng").value = ans;
}

function toRot13(){
  //Split into individual chunks
  str = document.getElementById("eng").value;
  str = str.toUpperCase();
  let newArr = str.split(" ");
  let result = [];
  for(let i=0; i<newArr.length; i++){
    var arr1 = [];
    for(let j=0; j<newArr[i].length; j++){
      var tmp = newArr[i];
      if( tmp[j] !== "!" && tmp[j] !== "?"
      && tmp[j] !== "."){
        var cCode = tmp.charCodeAt(j)-13;
        cCode = cCode<65?cCode+26 :cCode;
        var cChar = String.fromCharCode(cCode);
        arr1.push(cChar);
      }
      else arr1.push(tmp[j]);
    }
    result.push(arr1.join(""));
  }
   var ans = result.join(" ");
  document.getElementById("rot").value = ans;
}