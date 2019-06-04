function findout() {
    var val1 = parseInt(document.getElementById("sideA").value);
    var val2 = parseInt(document.getElementById("sideB").value);
    var val3 = parseInt(document.getElementById("sideC").value);

    if (val1 == " " || val2 == " " || val3 == " ") {
        alert("Can't form a triangle");
        return
    }
     else if(val1 <= 0 || val2 <= 0 || val3 <= 0){
         alert("Can't form a Triangle");
         return
    }

    
    if(val1 === val2 && val2 === val3 && val3 === val1) {
        alert("This is an Equilateral Triangle");
    }
    else if(val1 === val2 || val3 === val2 || val3 === val1) {
        alert("This is an Isosceles Triangle");
    }
    else if(val1 !== val2 && val2 !== val3 && val3 !== val1){
        alert("This is a Scalene Triangle");
    }
    else{
        alert("This is not a Triangle!!");
    }
    
}