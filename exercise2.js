function nextNameClosure(){
	var count = -1
	return function(){		
		var names = ["William","Cindy","Maureen","Brenden"];
		count+=1;
		return names[count];	
	}
}

var nextname = nextNameClosure();

nextname();