let productsContainer = document.getElementById("products-detels"); // تأكد أن المعرّف مطابق في HTML
let productId = localStorage.getItem('clickproduct');




let getProductsDetails = async function (productId) {
  try {
    if (!productId) {
      throw new Error("لم يتم العثور على معرف المنتج في localStorage");
    }

    let res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    
    if (!res.ok) {
      throw new Error("فشل جلب بيانات المنتج");
    }

    let productDetails = await res.json();

    let temp = `
      <div class="card" style="width: 18rem;">
        <img src="${productDetails.image}" class="card-img-top" alt="${productDetails.title}">
        <div class="card-body">
          <h5 class="card-title">${productDetails.title}</h5>
          <span class="badge text-bg-success">$${productDetails.price}</span>
          <p class="card-text">${productDetails.description}</p>
          <a href="#" class="btn btn-primary">شراء الآن</a>
        </div>
      </div>
    `;


    

    productsContainer.innerHTML = temp;
  } catch (error) {
  
  }
};


getProductsDetails(productId);


