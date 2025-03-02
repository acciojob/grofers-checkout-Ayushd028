const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const table = document.querySelector("table")
	const prices = document.querySelectorAll(".price");
	let sum = 0;
	let sumPrice = prices.forEach((item)=>{
			sum += parseFloat(item.textContent) || 0;
		return sum;
	})
	table.innerHTML += `<tr><td colspan = "2">Total Price: ${sumPrice}</td></tr>`
};

getSumBtn.addEventListener("click", getSum);

