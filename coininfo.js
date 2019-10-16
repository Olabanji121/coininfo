class Coininfo {
	async getUser(userText) {
		const PicRespone = await fetch(
			`https://api.coincap.io/v2/assets?search=${userText}`
		);
		const picFromGiphy = await PicRespone.json();

		return picFromGiphy;
	}

	async getData() {
		const ApiRes = await fetch(`https://api.coincap.io/v2/assets?limit=10`);

		const ApiJson = await ApiRes.json();

		return ApiJson;
	}
}

// https://api.coincap.io/v2/assets?limit=5
// constructor() {
// 		this.client_key = "733055b142a5c31d5d425414e855d189";
// 		this.endPoint = "live";

// 	}

// 	async getUser() {
// 		const PicRespone = await fetch(

// 			`http://api.coinlayer.com/api/${this.endPoint}?access_key=${this.client_key}`
// 		);
// 		const picFromGiphy = await PicRespone.json();

// 		return picFromGiphy;
// 	}
