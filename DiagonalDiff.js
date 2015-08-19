function processData(input) {
    var inp = input.trim().split('\n');
    var N = parseInt(inp[0]);
    var inp = inp.splice(1)
    inp = inp.map(function(row){    	
    	return row.split(' ').map(function(num){
    		return parseInt(num);
    	})
    });
    
    var sum = 0;
    for (var i = 0; i <= inp.length-1; i++) {	
    	sum = sum + (inp[i][i] - inp[i][(inp.length-1) -i]);
    };

    console.log(Math.abs(sum));
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

