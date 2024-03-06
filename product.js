






// main=document.getElementById("main")
// main1=document.getElementById("main1")
// main2=document.getElementById("main2")
// main3=document.getElementById("main3")
// main4=document.getElementById("main4")
// main5=document.getElementById("main5")
// main6=document.getElementById("main6")
// main7=document.getElementById("main7")
// main8=document.getElementById("main8")
// main9=document.getElementById("main9")
// main10=document.getElementById("main10")
// main11=document.getElementById("main11")
// main12=document.getElementById("main12")
// main13=document.getElementById("main13")
// main14=document.getElementById("main14")
// main15=document.getElementById("main15")
// main16=document.getElementById("main16")
// main17=document.getElementById("main17")
// main18=document.getElementById("main18")
// main19=document.getElementById("main19")
// main20=document.getElementById("main20")















async function fetchProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        displayProducts(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// function displayProducts(products) {
//     let productsContainer = document.getElementById('products');
//     productsContainer.innerHTML = ''; 

//     products.forEach(product => {
//         let productDiv = document.createElement('div');
//         productDiv.classList.add('product');

//         let productName = document.createElement('h2');
//         productName.textContent = product.title;

//         let productPrice = document.createElement('p');
//         productPrice.textContent = `Price: $${product.price}`;

//         let productDescription = document.createElement('p');
//         productDescription.textContent = product.description;

//         let productImage = document.createElement('img');
//         productImage.src = product.image; 
//         productImage.alt = product.title; 

//         productDiv.appendChild(productName);
//         productDiv.appendChild(productPrice);
//         productDiv.appendChild(productDescription);
//         productDiv.appendChild(productImage); 

//         productsContainer.appendChild(productDiv);
//     });
// }



// function displayProducts(products) {
//     let productsContainer = document.getElementById('products');
//     productsContainer.innerHTML = ''; 

//     products.forEach(product => {
//         let productDiv = document.createElement('div');
//         productDiv.classList.add('product');

//         let productName = document.createElement('h2');
//         productName.textContent = product.title;

//         let productPrice = document.createElement('p');
//         productPrice.textContent = `Price: $${product.price}`;

//         let productDescription = document.createElement('p');
//         productDescription.textContent = product.description;

//         let productImage = document.createElement('img');
//         productImage.src = product.image; 
//         productImage.alt = product.title; 
//         productImage.style.width = '200px'; // Set width to 200 pixels (adjust as needed)
//         productImage.style.height = 'auto'; // Maintain aspect ratio

//         productDiv.appendChild(productName);
//         productDiv.appendChild(productPrice);
//         productDiv.appendChild(productDescription);
//         productDiv.appendChild(productImage); 

//         productsContainer.appendChild(productDiv);
//     });
// }


function displayProducts(products) {
    let productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; 

    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');
        let productName = document.createElement('h3');
        productName.textContent = product.title;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        let productImage = document.createElement('img');
        productImage.src = product.image; 
        productImage.alt = product.title; 
        productImage.style.width = '300px'; 
        productImage.style.height = 'auto'; 

        
        productDiv.appendChild(productImage); 
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        productsContainer.appendChild(productDiv);
    });
}

















































// function displayProducts(products) {
//     let productsContainer = document.getElementById('products');
//     productsContainer.innerHTML = ''; 

//     products.forEach(product => {
//         let productDiv = document.createElement('div');
//         productDiv.classList.add('product');

//         let productName = document.createElement('h2');
//         productName.textContent = product.title;

//         let productPrice = document.createElement('p');
//         productPrice.textContent = `Price: $${product.price}`;

//         let productDescription = document.createElement('p');
//         productDescription.textContent = product.description;

//         let productImage = document.createElement('img');
//         productImage.src = product.image; // Set the image source
//         productImage.alt = product.title;

//         productDiv.appendChild(productName);
//         productDiv.appendChild(productPrice);
//         productDiv.appendChild(productDescription);
//         productDiv.appendChild(productImage); 

//         productsContainer.appendChild(productDiv);
//     });
// }
