
let addToCartButton = document.querySelectorAll("#add-btn");
let parentItemContainer = document.getElementsByTagName("tbody")[0];
let itemCount = document.getElementById("itemCount");
let deleteButton = document.getElementsByClassName('delete-button');
let itemRows = parentItemContainer.getElementsByTagName('tr');
let cartPageButton = document.getElementById('cart-details-btn');
let continueShoppingButton = document.getElementById('continue-shopping-button');


cartPageButton.addEventListener( 'click', function(event){

    if ( document.getElementById('products-container').style.display === "none" ){
        document.getElementById('products-container').style.display = "grid"
        document.getElementById('product-page-footer').style.display = " block"
    } else {
        document.getElementById('header').style.display = "none"
        document.getElementById('products-container').style.display = "none"
        document.getElementById('product-page-footer').style.display = "none"
        document.getElementById('cart-heading').style.display = "block"
        document.getElementById('addedItemsContainer').style.display = "flex"
    }
})

continueShoppingButton.addEventListener( 'click', function(event){

    if ( document.getElementById('addedItemsContainer').style.display = "flex" ){
        
        document.getElementById('cart-heading').style.display = "none"
        document.getElementById('addedItemsContainer').style.display = "none"
        document.getElementById('header').style.display = "flex"
        document.getElementById('products-container').style.display = "grid"
        document.getElementById('product-page-footer').style.display = " block"

    }
})




for (let i = 0; i < addToCartButton.length; i++ ){
    
    addToCartButton[i].addEventListener( 'click', function(event){

      
        let btn = event.target;
        let btn_parent = btn.parentElement;
        let btn_grandparent = btn.parentElement.parentElement;
        let ProductName = btn_parent.children[1].innerText;
        let ProductPrice = btn_parent.children[3].innerText;
        let ProductImage = btn_grandparent.children[0].src;
 
        

        let itemContainer = document.createElement('tr');
        
        let itemNameParent = document.getElementsByClassName('containItems')[0];
        let itemName = itemNameParent.getElementsByClassName('item-name');

        for ( i = 0; i < itemName.length; i++ ){

            if ( itemName[i].innerText == ProductName ){
                return;
                
            }
        }
    
        

        

        itemContainer.innerHTML =
            `<td>
                <img class="item-img" src="${ProductImage}" alt="" class="product-img">
            </td>
            <td class = "item-name">${ProductName}</td>
            <td>
                <input type="number" name="quantity" id="quantity" value="1">
            </td>
            <td class="price">${ ProductPrice}</td>
            <td>
                <button class="delete-button">
                    <img class="delete-icon" src="shopping cart img/delete-icon.png" alt="">
                </button>
            </td>`
        

        parentItemContainer.append(itemContainer);
        itemCount.innerText = parentItemContainer.children.length;
        btn.style.backgroundColor = "red";
        btn.innerText = "Added";
    

      
        for( let i = 0; i < deleteButton.length; i++ ){
            deleteButton[i].addEventListener( 'click', removeItem )
        }

        updateGrandTotal();

        let itemQuantity = document.querySelectorAll('#quantity');
        for ( let i = 0; i < itemQuantity.length; i++ ){
            let inputValue = itemQuantity[i];
            inputValue.addEventListener( 'change', quantityChanged )
        }

    })
}




function removeItem(event){
    removeBtn = event.target;
    removeBtn_grandparent = removeBtn.parentElement.parentElement.parentElement;

    removeBtn_grandparent.remove();
    updateGrandTotal();
    itemCount.innerText = parentItemContainer.children.length;
}

function updateGrandTotal(){

    let total = 0;

    for ( let i = 0; i < itemRows.length; i++ ){
        particularItemRow = itemRows[i];
        let priceElement = particularItemRow.getElementsByClassName('price')[0];
        let quantityElement = particularItemRow.querySelectorAll('#quantity')[0];
        let price = priceElement.innerText.replace('$', '');
        let quantityvalue = quantityElement.value;

        total = total + (price * quantityvalue);

    }
    
    total = Math.round( total * 100 ) / 100;
    SubTotal = document.getElementById('Subtotal-Value').innerText = '$' + total;
    totalAmountpayable = document.getElementById('total-amount').innerText = SubTotal;

}

function quantityChanged(event){
   let inputValue = event.target;
   if ( isNaN(inputValue.value) || inputValue.value <= 0 ){
    inputValue.value = 1;
   } 
   updateGrandTotal();
  
}


