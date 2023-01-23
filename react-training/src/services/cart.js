

// au démarrage du service, je récupère le contenu du local storage : command en cours
// export const getCaddy = () => {
//     let cartCaddy = caddy.getItem('cart');
//     if (cartCaddy) {  // le panier existe déjà
//         setCart(new Map(JSON.parse(cartCaddy)))
//     } // sinon il faut le créer
//     else setCart(new Map())
// }



// // load caddy (cart)
// export const loadCaddy = () => {
//     return Array.from(cart.values());
// }

// // methode return total caddy
// export const getTotal = () => {
//     let amount = 0;
//     cart.forEach(Training => {
//         amount += Training.price * Training.quantity;
//     });
//     return amount;
// }
// // delete item from localstorage
// export const delStorage = (Training) => {
//     cart.delete(Training.id);
//     saveCart();
// }

// export const clear = () => {
//     cart.clear();
//     localStorage.removeItem('cart')
// }