import CartService from "../cartService";

describe("Cart Service", () => {

    it("addItemToCart() should add item to the cart in local storage", () => {
        const item = {
            ID: "2",
            Title: "Data Smart",
            Author: "Foreman, John",
            Genre: "tech",
            SubGenre: "data_science",
            Price: "235",
            Publisher: "Wiley",
            quantity: 1
        }

        CartService.addItemToCart(item)

        expect(localStorage.getItem("cart")).toEqual(JSON.stringify([item]))
    });

    it("isInCart() should return true id the item exists in the cart", () => {
        const item = {
            ID: "3",
            Title: "Data Smart",
            Author: "Foreman, John",
            Genre: "tech",
            SubGenre: "data_science",
            Price: "235",
            Publisher: "Wiley",
            quantity: 1
        }

        CartService.addItemToCart(item)

        expect(CartService.isInCart(item.ID)).toBeTruthy()
    });

    it("addItemToCart() should increase the quantity of the item if already exists in the cart and attempted to add again", () => {
        const item = {
            ID: "2",
            Title: "Data Smart",
            Author: "Foreman, John",
            Genre: "tech",
            SubGenre: "data_science",
            Price: "235",
            Publisher: "Wiley",
            quantity: 1
        }

        CartService.addItemToCart(item)
        CartService.addItemToCart(item)

        const updatedCart = JSON.parse(localStorage.getItem("cart"))
        expect(updatedCart[0].quantity).toBeGreaterThan(1)
    });
})
