function processData(input) {
    var inp = input.split('\n');
    var N = parseInt(inp[0]);
    var array = inp[1].split(' ').map(function(num){
    	return parseInt(num);
    });
    var obj = {
    	'positive':0,
    	'negative':0,
    	'zero':0
    };
    var r = array.reduce(function(result,item){

    	if(item > 0){
    		result["positive"] +=  1;
    	}else if(item < 0){
			result["negative"] +=  1;
    	}else
    	{
    		result["zero"] += 1;
    	}
    	return result;
    },obj);
 	
 	
 	console.log((r.positive / N));
 	console.log((r.negative / N));
 	console.log((r.zero / N));
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