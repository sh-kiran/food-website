
let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
    <div class="product-container m-2">
        <div class="product-image-container">
         <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines text-center">
         ${product.name}
        </div>

        <div class="product-price">
         Price:${product.price}/-
        </div>
        <div class="product-spacer"></div>

        <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
        </button>
    </div>`

})
document.querySelector('.js-product-grid').innerHTML = productsHTML;


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        let matchingItem;
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        })
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            })
        }
        let cartQuantity=0;
cart.forEach((item)=>{
    cartQuantity+=item.quantity;


})

document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    })

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });