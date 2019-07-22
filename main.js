
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
	let imglibrary = chooseRandomEnviroment;
	//wersja z arrayem
	let getItem = document.querySelector(".item");
	if (chooseRandomEnviroment == "Weapon") {
		let item = [
			"Arquebus",
			"Musket",
			"Pistol",
			"Whip",
			"Longbow",
			"Short Bow",
			"Crossbow",
			"Slinger",
			"Arbalest",
			"Gastraphetes",
			"Chu-ko-nu",
			"Javelin",
			"Longsword",
			"Bastard Sword",
			"Short Sword",
			"Gladius",
			"Dagger",
			"Falcata",
			"Two-Handed Sword",
			"Rapier",
			"Khopesh",
			"Falx",
			"Shotel",
			"Battle Axe",
			"Warhammer",
			"Bardiche",
			"Bill",
			"Naginata",
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
			'Enclosed Helmet',
			'Great Helmet',
			'Nasal Helmet',
			'Bascinet Helmet',
			'Sallet Helmet + Bevor',
			'Barbute Helmet',
			'Morion Helmet',
			'Armet Helmet',
			'Stechhelm',
			'Bowl Helmet',
			'Kusari Shikoro',
			'Kabuto',
			'Cuirass',
			'Faulds',
			'Gauntlets',
			'Kusari Han Kote',
			'Full Armor',
			'Sabatons'
		];
		let materials =[
			'Leather',
			'Iron',
			'Copper',
			'Steel',
			'Iron',
			'Gromril',
			'Ithilmar',
			'Fur',
			'Paper',
			'Bone'
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
			"Hunting Knife",
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
			"Chest"
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
		
		color = document.getElementById("shows__viev");
		color.style.color = "#7bff00";
		color = document.getElementById("shows__nation");
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
		
		color = document.getElementById("shows__viev");
		color.style.color = "#03afff";
		color = document.getElementById("shows__nation");
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

		color = document.getElementById("shows__viev");
		color.style.color = "#ff0073";
		color = document.getElementById("shows__nation");
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

		color = document.getElementById("shows__viev");
		color.style.color = "#ff9900";
		color = document.getElementById("shows__nation");
		color.style.color = "#ff9900";
	}
	
	let resultofrandomresult = RandomResult();
	let resultofrandomarmor = ArmorResult();
	let resultofrandommaterial = MaterialsResult()
	console.log( resultofrandomresult, imglibrary)

	if (chooseRandomEnviroment == "Armor"){
	document.getElementById("setups__general").innerHTML = '<img src="img/' + imglibrary + "/" + resultofrandomarmor + '.jpg" alt=" ' + resultofrandomarmor + ' " class="img-avatar">';
	document.getElementById("shows__viev").innerHTML = '<p>' + resultofrandommaterial + " " + resultofrandomarmor + '</p>';
	document.getElementById("shows__nation").innerHTML = "<p> Made in " + RarityResult() + '</p>';
	}
	else{
	document.getElementById("setups__general").innerHTML = '<img src="img/' + imglibrary + "/" + resultofrandomresult + '.jpg" alt=" ' + resultofrandomresult + ' " class="img-avatar">';
	document.getElementById("shows__viev").innerHTML = '<p>' + resultofrandomresult + '</p>';
	document.getElementById("shows__nation").innerHTML = "<p> Made in " + RarityResult() + '</p>';
	}
}
