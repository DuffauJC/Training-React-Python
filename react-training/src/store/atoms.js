import { atom } from "recoil"

//Initialisation du local storage (panier)

let cartName = 'cart'

// au démarrage du service, je récupère le contenu du local storage : command en cours
let cart = JSON.parse(window.localStorage.getItem(cartName));
if (cart===null) {  // le panier existe déjà
    cart = [] 
}

// pour ranger les données du storage dans l'appli
export const caddyState = atom({
    key: 'cartState',
    default: cart,
});