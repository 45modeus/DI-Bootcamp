function test(){
    console.log(x)
    var x=1 //local variable - function scope
}

//main program
var x=999 // global var
test()
// console.log(x)
