/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

// Vue.js
const app = new Vue({
	// Options object
	el: "#root", // si può chiamare anche #app
	data: {
		message: "Welcome Vue.js",
		image: "https://www.netfarm.it/web/image/4973/vuejs.png",
	},
});
