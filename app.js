
const app = new Vue({

    el: "#app",
    data: {

        showItems: true,

        products: products,

        cart: [],

        details: {
            name: "",
            surname: "",
            address: "",
            phoneNo: "",



        }
    },
    methods: {
        addToCart(product) {
            this.cart.push(product.productID);  //adds product to cart array


        },
        canAddToCart(product) {
            return product.Space > this.cartCount(product.productID);   //functuion enables and disables the button if product in stock

        },

        cartCount(productID) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === productID) {
                    count++;

                }

            }
            return count;//cheching for the item that we are going to add to the cart 
        },

        toggleBasket() {
            this.showItems = this.showItems ? false : true;
        },

        submitForm(details) {
            if (details.phoneNo <= 0) {
                alert("Please enter a valid phone number");
            }
            else if (details.name === "") {
                alert("Enter a valid name");
            }
            else if (details.address === "") {
                alert("Enter a valid address!");
            }
            else {
                alert("Order confirmed!");
            }   //with this function we make sure the user fills out the form before cheching out

        },
        itemleft(product) {
            return product.Space - this.cartCount(product.productID);
        },  //we use this funtion to determine the remaining spaces in the product

    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || "";
        },



    }


})
