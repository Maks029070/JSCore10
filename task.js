function show(data) {
	console.log(data);
}

var array = [];

array[array.length] = {
	name: "Edward",
	sex: "male",
	age: 19};

array[array.length] = {
	name: "George",
	sex: "male",
	age: 22};

array[array.length] = {
	name: "Sarah",
	sex: "female",
	age: 18};

array[array.length] = {
	name: "Megan",
	sex: "female",
	age: 19};

array[array.length] = {
	name: "Christopher",
	sex: "male",
	age: 20};

array.forEach(show);
show('\n');

var filtered = array.filter(function(element) {
    if(element.age < 21) {
        return element.sex == "male";
    }
});
filtered.forEach(show);
show('\n');

filtered = filtered.map(function(element) {
	element.yearsUnderAge = 21 - element.age;
	return element;
	}
);

filtered.forEach(show);
show('\n');

sorted = array.sort(function(obj1, obj2){
	if (obj1.age == obj2.age) {
		var obj1Name = obj1.name.toLowerCase();
		var obj2Name = obj2.name.toLowerCase();

		if (obj1Name > obj2Name) {
			return 1;
		}
		else if (obj2Name > obj1Name) {
			return -1;
		}

		else if (obj1Name == obj2Name) {
			return obj1.sex - obj2.sex;
		}

		else {
			return 0;
		}
	}

	else {
		return obj1.age - obj2.age;
	}
});
sorted.forEach(show);