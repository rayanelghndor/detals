// تحديث عدد المنتجات في أيقونة السلة
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// إضافة المنتج إلى السلة
function addToCart(id, title, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// عرض المنتجات داخل السلة
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
        <div class="col-md-4">
          <div class="card mb-3">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p>السعر: $${item.price}</p>
              <p>الكمية: ${item.quantity}</p>
              <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">❌ إزالة</button>
            </div>
          </div>
        </div>
      `;
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

// إزالة منتج من السلة
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// إفراغ السلة بالكامل
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    updateCartCount();
}

// تحديث السلة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    displayCart();
});







document.addEventListener('DOMContentLoaded', function () {
    // الحصول على زر toggler
    const toggler = document.querySelector('.navbar-toggler');

    // إضافة حدث عند الضغط على زر toggler
    toggler.addEventListener('click', function () {
        const offcanvas = document.getElementById('offcanvasDarkNavbar');

        // التبديل بين الفتح والإغلاق
        if (offcanvas.classList.contains('show')) {
            offcanvas.classList.remove('show');
            offcanvas.style.visibility = 'hidden';
            offcanvas.style.opacity = '0';
        } else {
            offcanvas.classList.add('show');
            offcanvas.style.visibility = 'visible';
            offcanvas.style.opacity = '1';
        }
    });

    // إغلاق offcanvas عند الضغط على زر الإغلاق
    const closeBtn = document.querySelector('.btn-close');
    closeBtn.addEventListener('click', function () {
        const offcanvas = document.getElementById('offcanvasDarkNavbar');
        offcanvas.classList.remove('show');
        offcanvas.style.visibility = 'hidden';
        offcanvas.style.opacity = '0';
    });
});



    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("تمت إضافة المنتج إلى السلة بنجاح!");

