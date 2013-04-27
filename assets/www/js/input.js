function consoleOut(){
	console.log("html open");

	console.log("script entry");
	var arrSize = 6;
	arr = new Array(arrSize);
	console.log("before loop");
	for(i=0;i<arrSize;i++){
		arr[i]=i*100;
	}
	console.log("after loop");
}