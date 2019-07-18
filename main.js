
let rarity;
function Rarity(rarityName) {
	this.rarityName = rarityName;	
}
let rarityResult;
function RarityResult(rarityResultName) {
	this.rarityResultName = rarityResultName;
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

let randomResult;
function RandomResult(randomResultName) {
	this.randomResultName = randomResultName;
}
let armorResult;
function ArmorResult(armorResultName) {
	this.armorResultName = armorResultName;
}
let materials;
let materialsResult;
function MaterialsResult(randomMaterialsResult) {
	this.randomMaterialsResult = randomMaterialsResult;
}
var color;

// Enviroment is a category of an item
function res() {
	let chooseRandomEnviroment;
	if (document.getElementById(5).checked == 1) {
		 chooseRandomEnviroment ="Weapon";
	}
	else if (document.getElementById(6).checked == 1) {
		 chooseRandomEnviroment = "Armor";
	}
	else if (document.getElementById(7).checked == 1) {
		 chooseRandomEnviroment = "Utility";
	}
	else {
		 chooseRandomEnviroment = "Trash";
	}

	//wersja z arrayem
	let getItem = document.querySelector(".item");
	if (chooseRandomEnviroment == "Weapon") {
		let item = [
			"Heavy Arquebus",
			"Musket",
			"Pistol",
			"Arkan",
			"Long Bow",
			"Short Bow",
			"Crossbow",
			"Slinger",
			"Arbalest",
			"Gastrapeths",
			"Chu-ko-nu",
			"Long Sword",
			"Bastard Sword",
			"Short Sword",
			"Knife",
			"Two-Handed Sword",
			"Rapier",
			"Battle Axe",
			"Warhammer",
			"Bardiche",
			"Bill",
			"Halberd",
			"Pike",
			"Bozdogan",
			"Bulawa",
			"War Scythe",
			"Flail",
			"Lance",

		];
		RandomResult = () => ( item[Math.floor(Math.random() * item.length)]);
		console.log(RandomResult())
	}
	else if (chooseRandomEnviroment == "Armor") {
		let item = [
			'Mask',
			'Mengou (Mask)',
			'Enclosed Helmet',
			'Great Helmet',
			'Nasal Helmet',
			'Bassinet Helmet',
			'Sallet Helmet + Bevor',
			'Barbute Helmet',
			'Armet Helmet',
			'Bowl Helmet',
			'Burgonet Helmet',
			'Kusari Shikoro (Helmet)',
			'Kabuto (Helmet)',
			'Cuirass (Brest Plate)',
			'Plackart (Brest Plate)',
			'Faulds (Brest Plate)',
			'Gauntlets',
			'Kusari Han Kote (Gauntlets)',
			'Han Kote',
			'Full Armor',
			'Sabatons'
		];
		let materials =[
			'Leather',
			'Scale',
			'Plate',
			'Chain',
			'Gromnir',
			'Mithril',
			'Fur',
			'Paper'
		];
		MaterialsResult = () => (materials[Math.floor(Math.random() * materials.length)]);
	 	ArmorResult = () => ( item[Math.floor(Math.random() * item.length)]);
		RandomResult = () => (MaterialsResult() + " "+ArmorResult());
		console.log(RandomResult(), MaterialsResult(), ArmorResult());
	}
	// stara werjsa ze switchem		
	else if (chooseRandomEnviroment == "Utility") {
		let item = [
			"10m of Rope",
			"Bandages",
			"Backpack",
			"Pickaxe",
			"Torch",
			"Hunting Knive",
			"Net"
		];
		RandomResult = () => ( item[Math.floor(Math.random() * item.length)]);
		console.log(RandomResult())
	}
	
	else {
		let item = [
			"Table",
			"Bones",
			"Vase",
			"Mug",
			"Candle",
			"Basket",
			"Box"
		];
		RandomResult = () => ( item[Math.floor(Math.random() * item.length)]);
		console.log(RandomResult())
	}
	

	let chooseRandomRarity;		
	if (document.getElementById(1).checked == 1) {
		chooseRandomRarity = "Common";
	}
	else if (document.getElementById(2).checked == 1) {
		chooseRandomRarity = "Rare";
	}
	else if (document.getElementById(3).checked == 1) {
		chooseRandomRarity = "Epic";
	}			
	else {
		chooseRandomRarity = "Legendary";
	}

	let getRarity = document.querySelector(".rarity");
	if (chooseRandomRarity == "Common") {
		
		let rarity = [
			"Averland",
			"Hochland",
			"Stirland",
			"Middenland",
			"Nordland",
			"Ostermark",
			"Ostland",
			"Reikland",
			"Talabecland",
			"The Moot",
			"Wissendland",
			"Drakwald",
			"Solland",
			"Westerland",

		];
		RarityResult = () => ( rarity[Math.floor(Math.random() * rarity.length)]);
		console.log(RarityResult())
		
		color = document.getElementById("viev");
		color.style.color = "#7bff00";
		color = document.getElementById("img");
		color.style.color = "#7bff00";
	}
	else if (chooseRandomRarity == "Rare") {
				let rarity = [
			"L'Anguillie",
			"Aquaitaine",
			"Artois",
			"Bastonne",
			"Bordeleaux",
			"Brionne",
			"Carcassonne",
			"Couronne",
			"Gisoreux",
			"Lyonesse",
			"Monfort",
			"Parravon",
			"Quenelles",
			
		];
		RarityResult = () => ( rarity[Math.floor(Math.random() * rarity.length)]);
		console.log(RarityResult())
		
		color = document.getElementById("viev");
		color.style.color = "#03afff";
		color = document.getElementById("img");
		color.style.color = "#03afff";
	}
	else if (chooseRandomRarity == "Epic") {
				let rarity = [
			"Kislev",
			"Norsca",
			"Sylvania",
			"Estalia",
			"Tilea",
			"Mousillion",
			"Albion",
			"Arabya",
			"Ind",
			"Nippon",
			"Cathay",
			"Lustria"
		];
		RarityResult = () => ( rarity[Math.floor(Math.random() * rarity.length)]);
		console.log(RarityResult())

		color = document.getElementById("viev");
		color.style.color = "#ff0073";
		color = document.getElementById("img");
		color.style.color = "#ff0073";
	}
	else {
				let rarity = [
			"Athel Loren",
			"Ulthuan",
			"Naggarond",
			"Northen Westlands of Chaos",
			"Karak Eight Peaks",
			"Karaz-a-Karak",
			"Karak Ungor",
			"Karak Norn",
			"Khemri",
			"Skavenblight",
			"Plain of Zharrduk"
		];
		RarityResult = () => ( rarity[Math.floor(Math.random() * rarity.length)]);
		console.log(RarityResult())

		color = document.getElementById("viev");
		color.style.color = "#ff9900";
		color = document.getElementById("img");
		color.style.color = "#ff9900";
	}
	console.log( RarityResult(), RandomResult())

	document.getElementById("viev").innerHTML = RandomResult() ;
	document.getElementById("img").innerHTML = "Made in " + RarityResult()  ;
}
