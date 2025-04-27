//your JS code here. If required.
const op = document.getElementById("output");
const btn = document.getElementById("btn");
btn.addEventListener("click",function () {
const number = document.getElementById("ip").value;
let num1 = parseInt(number);
	myPromise1(num1)
		.then((num1)=>{
		op.textContent = num1;
		return myPromise2(num1)
		})
		.then((num)=>{
			op.textContent = num;
			return myPromise3(num)
		})
		.then((num)=>{
			op.textContent = num;
			return myPromise4(num);
		})
		.then((num)=>{
			op.textContent = num;
			return myPromise5(num);
		})
		.then((num)=>{
			op.textContent = num;
		})
		.catch((err)=>
			console.log(err))
})

function myPromise1(num) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num);
		},2000)
	})
	
}

function myPromise2(num) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num*2);
		},2000)
	})	
}

function myPromise3(num) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num-3);
		},1000)
	})
	
}

function myPromise4(num) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num/2);
		},1000)
	})
	
}

function myPromise5(num) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num+10);
		},1000)
	})
	
}