class CartService {

    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || []
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new CartService();
        }

        return this.instance;
    }

    addItemToCart = (item) => {
        if(this.isInCart(item.ID)) {
            const existingItem = this.cart.find(i => i.ID === item.ID)
            existingItem.quantity += item.quantity
        } else {
            this.cart.push(item)
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };

    fetchAllItems = () => {
        return JSON.parse(localStorage.getItem('cart')) || []
    }

    isInCart = (itemId) => this.cart.some((cartItem) => cartItem.ID === itemId);
}

const instance = CartService.getInstance()

export default instance
