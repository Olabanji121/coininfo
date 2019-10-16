// init coininfo and UI
const coinInfo = new Coininfo();
const ui = new UI();
init();
// const searchPic = document.getElementById("btnSearch");
const keyup = document.querySelector(".form-control");
// const btn = document.getElementById("search");
const update = document.getElementById("update");
const onLoadTable = document.getElementById("onLoadTable");
const searchTable = document.getElementById("search-table");
const loading = document.getElementById("loading");
loading.style.display = "none";

function init() {
	document.addEventListener("DOMContentLoaded", onDomLoad);
}

update.addEventListener("click", () => {
    loading.style.display = "block";
	location.reload();
});

keyup.addEventListener("keyup", e => {
	e.preventDefault();
	dataFromAPI();
});



const dataFromAPI = () => {
	let userText = keyup.value.trim();
	if (userText !== "") {
		onLoadTable.style.display = "none";
		searchTable.style.display = "block";
		coinInfo
			.getUser(userText)
			.then(asset => {
				const show = asset.data.map((dat1, index) => {
					console.log(dat1);
					const {
						rank,
						name,
						priceUsd,
						supply,
						maxSupply,
						symbol,
						volumeUsd24Hr
					} = dat1;
					ui.showProfile({
						rank,
						priceUsd,
						supply,
						symbol,
						maxSupply,
						volumeUsd24Hr,
						name,
						index
					});
					console.log(priceUsd, symbol, name);
				});

				return show;
			})
			.catch(err => console.log(err));
	} else {
		searchTable.style.display = "none";
		onLoadTable.style.display = "block";
	}
	// btn.value = " ";
};

function onDomLoad() {
    
	coinInfo
		.getData()
		.then(result => {
			result.data.forEach((dat, index) => {
				const {
					rank,
					name,
					priceUsd,
					supply,
					maxSupply,
					symbol,
					volumeUsd24Hr
				} = dat;

				ui.showOnDomLoad({
					name,
					priceUsd,
					supply,
					symbol,
					volumeUsd24Hr,
					index,
					rank,
					maxSupply
				});
				console.log({ name, priceUsd, supply, symbol, volumeUsd24Hr, index });
			});
		})
		.catch(err => console.log(err));
	searchTable.style.display = "none";
}

onDomLoad();
// youtube.com/watch?v=ZtLVbJk7KcM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&t=0s
