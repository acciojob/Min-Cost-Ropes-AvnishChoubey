function mincost(arr)
{ 
	//write your code here
	let totalCost = 0;
	while(arr.length > 1) {
		arr.sort();
		let a = arr.shift();
		let b = arr.shift();
		totalCost += (a + b);
		arr.push(a + b);
	}

	return totalCost;
}

module.exports=mincost;
