// Storage Controller
const StorageController = (function () {




})();



// Product Controller
const ProductController = (function () {

    // private
    const Product = function (id, name, price) { // Product Constructor
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = { // this object hold data
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }

    // public
    return {
        getProducts: function () { // get product value here
            return data.products;
        },
        getData: function () {  // get data here
            return data;
        },
        getProductsById:function(id){
            let product = null;
            data.products.forEach(function(item){
                if(item.id == id){
                    product = item;
                }
            })

            return product;
        },
        addProduct: function (name, price) {
            let id;

            if (data.products.length > 0) { // here we add new value in our list
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price)); // create new object for new element
            data.products.push(newProduct); // push this object to list
            return newProduct;
        },
        getTotal: function(){
            let total = 0;
            data.products.forEach(function(item) {
                total += item.price; // we add total each elements price
            })

            data.totalPrice = total;
            return data.totalPrice;
        },
       
    }

})();


// UI Controller

const UIController = (function () {

    const Selectors = { // we create a shortcut for documents
        productList: "#item-list",
        addButton: '.addBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totaltl : '#totaltl',
        totaldolar:'#totaldolar'
    }

    return {
        createProductList: function (products) { // here we create a html for our list to add list
            let html = '';

            products.forEach(prd => {
                html += `
                  <tr>
                     <td>${prd.id}</td>
                     <td>${prd.name}</td>
                     <td>${prd.price} $</td>
                     <td class="text-right">
                        
                        <i class="far fa-edit edit-product"></i>
                        
                    </td>
                  </tr>   
                `;
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function () {
            return Selectors;
        },
        addProduct: function (prd) { // here we add new element to the table

            document.querySelector(Selectors.productCard).style.display='block';
            var item = `            
                <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price} $</td>
                <td class="text-right">
                    <i class="far fa-edit edit-product"></i>
                    
            </td>
            </tr>              
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs: function () {
            document.querySelector(Selectors.productName).value = ''; // after we confirm our value this value will be clear
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal:function(total){
            document.querySelector(Selectors.totaldolar).textContent = total;
            document.querySelector(Selectors.totaltl).textContent = total * 7;
        }
    }


})();


// App Controller
const App = (function (ProductCtrl, UICtrl) {

    const UISelectors = UIController.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {

        // add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);



        document.querySelector(UISelectors.productList).addEventListener('click',productEditSubmit);



    }

    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            // Add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // add item to list
            UIController.addProduct(newProduct);

            const total = ProductCtrl.getTotal();

            UIController.showTotal(total);


            // clear inputs
            UIController.clearInputs();

        }

        console.log(productName, productPrice);

        e.preventDefault();
    }

    const productEditSubmit = function (e) {

        if(e.target.classList.contains('edit-product')){
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

           const prod =  ProductCtrl.getProductsById(id);
           console.log(prod);
        }


       e.preventDefault();
    }


    return {
        init: function () {
            console.log('starting app...');
            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }

            // load event listeners
            loadEventListeners()

        }
    }


})(ProductController, UIController);

App.init();