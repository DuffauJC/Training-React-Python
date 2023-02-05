import { atom, RecoilEnv } from "recoil"

// suppression warning
// Expectation Violation: Duplicate atom key "......"
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

//Initialisation du local storage (panier)
let cartName = 'cart'
let caddy = window.localStorage
// au démarrage du service, je récupère le contenu du local storage : command en cours
let cart = JSON.parse(caddy.getItem(cartName));
if (cart === null) {  // le panier existe déjà
    cart = []
}

// pour ranger les données du storage dans l'appli
export const caddyState = atom({
    key: 'cartState',
    default: cart,
});

// // methode return total caddy
export const getTotal = () => {
    let amount = 0;
    cart.forEach(Training => {
        amount += Training.price * Training.quantity;
    });
    return amount;
}

// save new cart
export const saveCart = (newCart) => {
    caddy.setItem(cartName, JSON.stringify(newCart));
}
// delete cart
export const clear = () => {
    cart = []
    caddy.removeItem('cart')
}

/////////////////////////////////////////
// TrainingList
export const trainingList = atom({
    key: 'trainList',
    default: []
});
/////////////////////////////////////////
// CategoriesList
export const categoriesList = atom({
    key: 'catList',
    default: []
});