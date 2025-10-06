function mincost(arr)
{ 
	//write your code here
	const heap = new MinPriorityQueue();
    arr.forEach(length => heap.enqueue(length));
  
    let totalCost = 0;
  
    while (heap.size() > 1) 
	{
        const rope1 = heap.dequeue().element;
        const rope2 = heap.dequeue().element;
      
        const cost = rope1 + rope2;
        totalCost += cost;
		
        heap.enqueue(cost);
    }

    return totalCost;
}

module.exports=mincost;
