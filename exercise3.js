function getData(){
	var secretData = "You got the data";
	return function(){
			return secretData
	}
};


getData()();



