
const app = new Vue({
    
    el: "#app",
    data: {
        // product: {
        //     "Subject": "Math",
        //     "Location": "London",
        //     "Price": 100,
        //     "Space": 5,
        // },

        showItems: true,

    products:products,
    
        cart: [],

        details:{
            name: "",
            surname: "",
            address: "",
            phoneNo: "",



        }
    },
    methods: {
        addToCart(product) {
            this.cart.push(product.productID);
           
             
        },
        canAddToCart(product) {
            return product.Space > this.cartCount(product.productID);
            
        },
        
        cartCount(productID){
            let count= 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === productID) {
                    count++;
                    
                }
                
            }
            return count;
        },

        toggleBasket(){
            this.showItems = this.showItems ? false : true ;
        },

        submitForm(details){
            if(details.phoneNo <= 0){
                alert("Please enter a valid phone number");
            }
            else if (details.name === ""){
                alert("Enter a valid name");
            }
            else if (details.address === "") {
                alert("Enter a valid address!");
            }
            else{
                alert("Order confirmed!");
            }
        },

    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || "";
        },

        itemleft(){
            return this.product.Space - this.cartItemCount;
        },
        // canAddToCart: function () {
        //     return this.product.Space > this.cartItemCount;
        // }
    }


})