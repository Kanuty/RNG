
let rarity;
function Rarity(rarityName) {
	this.rarityName = rarityName;	
}
let item;
function Item(itemName) {
	this.itemName = itemName;	
}
let enviroment;
function Enviroment(enviromentName) {
	this.enviromentName = enviromentName;
}
let getEnviroment = document.querySelector(".enviroment");




	// Enviroment mean type of an item
		function res(){
						let chooseRandomEnviroment;		
if (document.getElementById(5).checked == 1){
	 chooseRandomEnviroment ="Weapon";
	}
else if (document.getElementById(6).checked == 1){
	 chooseRandomEnviroment = "Armor";
	}
else if (document.getElementById(7).checked == 1){
	 chooseRandomEnviroment = "Utility";
	}			
else {
	 chooseRandomEnviroment = "Trash";
};	
	// 	let enviroment00 = new Enviroment("Weapon");
	// 	let enviroment01 = new Enviroment("Armor");
	// 	let enviroment02 = new Enviroment("Utility");
	// 	let enviroment03 = new Enviroment("Trash");
	// 	// let chooseRandomEnviroment = Math.floor(Math.random() * Math.floor(4));
	// switch (chooseRandomEnviroment) {
	// 		case 0:
	// 		enviroment = enviroment00;
	// 		break;
	// 		case 1:
	// 		enviroment = enviroment01;
	// 		break;
	// 		case 2:
	// 		enviroment = enviroment02;
	// 		break;
	// 		case 3:
	// 		enviroment = enviroment03;
	// 		break;

	// }

let getItem = document.querySelector(".item");
		if (chooseRandomEnviroment == "Weapon") {
		let item00 = new Item("Bardiche");
		let item01 = new Item("Bill");
		let item02 = new Item("Halberd");
		let item03 = new Item("Pike");
		let item04 = new Item("Bozdogan");
		let item05 = new Item("Bulawa");
		let item06 = new Item("War Scythe");
		let chooseRandomItem = Math.floor(Math.random() * Math.floor(7));
			switch (chooseRandomItem) {
				case 0:
				item = item00;
				break;
				case 1:
				item = item01;
				break;
				case 2:
				item = item02;
				break;
				case 3:
				item = item03;
				break;
				case 4:
				item = item04;
				break;
				case 5:
				item = item05;
				break;
				case 6:
				item = item06;
				break;
				default:
				item = item06;
				break; }
				}
				else if (chooseRandomEnviroment == "Armor") {
		let item00 = new Item("Plate Helmet");
		let item01 = new Item("Leather Gauntlets");
		let item02 = new Item("Plate Shoulderpads");
		let item03 = new Item("Long Chainmail");
		let item04 = new Item("Scale Brestplate");
		let item05 = new Item("Brigandine");
		let item06 = new Item("Full Lamellar");
		let chooseRandomItem = Math.floor(Math.random() * Math.floor(7));
			switch (chooseRandomItem) {
				case 0:
				item = item00;
				break;
				case 1:
				item = item01;
				break;
				case 2:
				item = item02;
				break;
				case 3:
				item = item03;
				break;
				case 4:
				item = item04;
				break;
				case 5:
				item = item05;
				break;
				case 6:
				item = item06;
				break;
				default:
				item = item06;
				break; }
				}
				else if (chooseRandomEnviroment == "Utility") {
		let item00 = new Item("10m Rope");
		let item01 = new Item("Bandages");
		let item02 = new Item("Backpack");
		let item03 = new Item("Pickaxe");
		let item04 = new Item("Torch");
		let item05 = new Item("Hunting Knive");
		let item06 = new Item("Net");
		let chooseRandomItem = Math.floor(Math.random() * Math.floor(7));
			switch (chooseRandomItem) {
				case 0:
				item = item00;
				break;
				case 1:
				item = item01;
				break;
				case 2:
				item = item02;
				break;
				case 3:
				item = item03;
				break;
				case 4:
				item = item04;
				break;
				case 5:
				item = item05;
				break;
				case 6:
				item = item06;
				break;
				default:
				item = item06;
				break; }
				}
			else {

		let item00 = new Item("Wooden Table");
		let item01 = new Item("Old Bones");
		let item02 = new Item("Spoon");
		let item03 = new Item("Vase");
		let item04 = new Item("Mug");
		let item05 = new Item("Burned Book");
		let item06 = new Item("Corroded Metal Box");
		let chooseRandomItem = Math.floor(Math.random() * Math.floor(7));
			switch (chooseRandomItem) {
				case 0:
				item = item00;
				break;
				case 1:
				item = item01;
				break;
				case 2:
				item = item02;
				break;
				case 3:
				item = item03;
				break;
				case 4:
				item = item04;
				break;
				case 5:
				item = item05;
				break;
				case 6:
				item = item06;
				break;
				default:
				item = item06;
				break;

			}

		}

				let chooseRandomRarity;		
if (document.getElementById(1).checked == 1){
	 chooseRandomRarity ="Common";
	}
else if (document.getElementById(2).checked == 1){
	 chooseRandomRarity = "Uncomon";
	}
else if (document.getElementById(3).checked == 1){
	 chooseRandomRarity = "Epic";
	}			
else {
	 chooseRandomRarity = "Legendary";
};	

let getRarity = document.querySelector(".rarity");
		if (chooseRandomRarity == "Common") {
		let rarity00 = new Rarity("Temerian");
		let rarity01 = new Rarity("Redanic");
		let rarity02 = new Rarity("Rivian");
		let rarity03 = new Rarity("Kedvenish");
		let rarity04 = new Rarity("Lyrian");
		
		let chooseRandomRarity = Math.floor(Math.random() * Math.floor(5));
			switch (chooseRandomRarity) {
				case 0:
				rarity = rarity00;
				break;
				case 1:
				rarity = rarity01;
				break;
				case 2:
				rarity = rarity02;
				break;
				case 3:
				rarity = rarity03;
				break;
				case 4:
				rarity = rarity04;
				break;
				default:
				rarity = rarity00;
				break; }
				}
		else if (chooseRandomRarity == "Uncomon") {
		let rarity00 = new Rarity("Nilfgardian");
		let rarity01 = new Rarity("Cintrian");
		let rarity02 = new Rarity("Kovirian");
		
		
		let chooseRandomRarity = Math.floor(Math.random() * Math.floor(3));
			switch (chooseRandomRarity) {
				case 0:
				rarity = rarity00;
				break;
				case 1:
				rarity = rarity01;
				break;
				case 2:
				rarity = rarity02;
				break;
			
				default:
				rarity = rarity00;
				break; }
				}
			else if (chooseRandomRarity == "Epic") {
		let rarity00 = new Rarity("Zerikanian");
		let rarity01 = new Rarity("Ofirian");
		let rarity02 = new Rarity("Skeligish");
		
		
		let chooseRandomRarity = Math.floor(Math.random() * Math.floor(3));
			switch (chooseRandomRarity) {
				case 0:
				rarity = rarity00;
				break;
				case 1:
				rarity = rarity01;
				break;
				case 2:
				rarity = rarity02;
				break;
			
				default:
				rarity = rarity00;
				break; }
				}
else  {
		let rarity00 = new Rarity("Mahakamish");
		let rarity01 = new Rarity("Dol Blathanish");
		
		let chooseRandomRarity = Math.floor(Math.random() * Math.floor(2));
			switch (chooseRandomRarity) {
				case 0:
				rarity = rarity00;
				break;
				case 1:
				rarity = rarity01;
				break;
				default:
				rarity = rarity00;
				break; }
				}


		console.log(item, rarity);
		
			
			document.getElementById("viev").innerHTML = item.itemName  +" ";
			document.getElementById("img").innerHTML = rarity.rarityName  +" ";
		}

		

				
