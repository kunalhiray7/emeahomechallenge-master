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

    removeItemFromCart = (id) => {
        this.cart = this.cart.filter((cartItem) => cartItem.ID !== id);
        localStorage.setItem(
            'cart',
            JSON.stringify(this.cart)
        );
    };

    totalCartPrice = () => this.cart.reduce((acc, item) => (acc += item.Price * item.quantity), 0);

    clear = () => {
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };
}

const instance = CartService.getInstance()

export default instance
