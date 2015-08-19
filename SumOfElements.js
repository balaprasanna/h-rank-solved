function processData(input) {
    var inp = input.trim().split('\n');
    var sum = inp[1].split(' ').map(function(item){
    	return parseInt(item);
    }).reduce(function(sum,i){
    	return sum + i ;
    },0); 
    console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
