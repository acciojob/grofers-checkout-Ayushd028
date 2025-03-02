const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const table = document.querySelector("table")
	const prices = document.querySelectorAll(".price");
	let sum = 0;
	prices.forEach((item)=>{
	 sum += parseFloat(item.textContent) || 0;
	})
	table.innerHTML += `<tr id="ans"><td colspan = "2">Total Price: ${sum}</td></tr>`
};

getSumBtn.addEventListener("click", getSum);

