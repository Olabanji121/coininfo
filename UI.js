class UI {
	constructor() {
		this.profileUI = Array.from(document.querySelectorAll(".profile"));
		console.log(this.profileUI);
		this.search = Array.from(document.querySelectorAll(".result"));
		console.log(this.search);
	}

	showOnDomLoad({
		rank,
		name,
		priceUsd,
		supply,
		maxSupply,
		symbol,
		volumeUsd24Hr,
		index
	}) {
		this.profileUI[index].innerHTML = `
		
			
				<tr class="table-info">
					<th scope="row">${rank}</th>
					<td>${name}</td>
					<td>$${parseFloat(priceUsd)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>${parseFloat(supply)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>${parseFloat(maxSupply)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>${symbol}</td>
					<td>$${parseFloat(volumeUsd24Hr)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
				</tr>
				
			
		
		`;
	}

	showProfile({
		rank,
		name,
		priceUsd,
		supply,
		maxSupply,
		symbol,
		volumeUsd24Hr,
		index
	}) {
		this.search[index].innerHTML = `<tr class="table-info">
					<th scope="row">${rank}</th>
					<td>${name}</td>
					<td>$${parseFloat(priceUsd)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>${parseFloat(supply)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>${parseFloat(maxSupply)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>${symbol}</td>
					<td>$${parseFloat(volumeUsd24Hr)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
				</tr> `;
	}
}
