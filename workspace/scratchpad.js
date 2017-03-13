 
 console.log("working");
 function fib(number, parentDiv){
     var currentDiv = document.createElement("div");
     var firstvalue = 0;
     var secondvalue = 0;
     if(number>0){
        firstvalue = fib(number-1);
        secondvalue = fib(number-2);
     }
     var returnvalue = firstvalue + secondvalue;
     currentDiv.innerHTML(returnvalue);
     parentDiv.appendChild(currentDiv);
 }
 function pell(number, parentDiv){
     var currentDiv = document.createElement("div");
     var firstvalue = 0;
     var secondvalue = 0;
     if(number>0){
        firstvalue = pell(number-1);
        secondvalue = pell(number-2);
     }
     var returnvalue = (2*firstvalue)+secondvalue;
     currentDiv.innerHTML(returnvalue);
     parentDiv.appendChild(currentDiv);
     return returnvalue;
 }
 function trib(number, parentDiv){
     var currentDiv = document.createElement("div");
     var firstvalue = 0;
     var secondvalue = 0;
     var thirdvalue = 0;
     if(number>0){
        firstvalue = trib(number-1);
        secondvalue = trib(number-2);
        thirdvalue = trib(number-3);
     }
     var returnvalue = firstvalue+secondvalue+thirdvalue;
     currentDiv.innerHTML(returnvalue);
     parentDiv.appendChild(currentDiv);
     return returnvalue;
 }
  document.addEventListener("DOMContentLoaded", function(){
     document.head.setAttribute("title","Sequences");
     var body = document.getElementsByName("body");
     var fibLink = document.createElement("a");
     var pellLink = document.createElement("a");
     var tribLink = document.createElement("a");
     fibLink.href = "https://oeis.org/A000045";
     fibLink.innerHTML = "Fibonacci Sequence Explaination";
     pellLink.href = "https://oeis.org/A000129";
     fibLink.innerHTML = "Pell Sequence Explaination";
     tribLink.href = "https://oeis.org/A000073";
     fibLink.innerHTML = "Tribonacci Sequence Explaination";
     body.appendChild(fibLink);
     fib(11,body);
     body.appendChild(pellLink);
     pell(11, body);
     body.appendChild(tribLink);
     trib(11, body);
 });