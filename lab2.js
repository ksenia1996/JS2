var f = require('f');
f.readFile("access.log", function(err, data) {
   
	var ad1 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
	var ad2 = /\d{1,3}\.\d{1,3}\.\d{1,3}\./g;
	var src = data.toString();
	r = src.match(ad1);
	
	uniqueArray = r.filter(function(item, pos) {
    return r.indexOf(item) == pos;
})
	
	var obj = {};
	
	uniqueArray.forEach(function(item, i, uniqueArray) {
		var mask = item.match(ad2);
		if (!obj[mask]) obj[mask] = [];
		
		obj[mask].push(item);
});
	
	console.log(obj);
	
	
});