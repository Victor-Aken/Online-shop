
let addToCartButton = document.querySelectorAll("#add-btn");
let parentItemContainer = document.getElementsByTagName("tbody")[0];
let itemCount = document.getElementById("itemCount");
let deleteButton = document.getElementsByClassName('delete-button');
let itemQuantity = document.getElementsByName('quantity')[0];
let itemRows = parentItemContainer.getElementsByTagName('tr');


for (let i = 0; i < addToCartButton.length; i++ ){
    
    addToCartButton[i].addEventListener( 'click', function(event){

      
        let btn = event.target;
        let btn_parent = btn.parentElement;
        let btn_grandparent = btn.parentElement.parentElement;
        let ProductName = btn_parent.children[1].innerText;
        let ProductPrice = btn_parent.children[3].innerText;
        let ProductImage = btn_grandparent.children[0].src;

        let itemContainer = document.createElement('tr');
        

        itemContainer.innerHTML = `<td><img class="item-img" src="${ProductImage}" alt="" class="product-img"></td>
        <td>${ProductName}</td>
        <td><input type="number" name="quantity" id="quantity" value="1"></td>
        <td class="price">${ ProductPrice}</td>
        <td><button class="delete-button"><img class="delete-icon" src="shopping cart img/delete-icon.png" alt=""></button></td>`

        parentItemContainer.append(itemContainer);
        itemCount.innerText = parentItemContainer.children.length;

        for( let i = 0; i < deleteButton.length; i++ ){
            deleteButton[i].addEventListener( 'click', removeItem )
        }

        // updateGrandTotal();

    })
}


function removeItem(event){
    removeBtn = event.target;
    removeBtn_grandparent = removeBtn.parentElement.parentElement.parentElement;

    removeBtn_grandparent.remove();
    // updateGrandTotal();
}

// function updateGrandTotal(){

//     let total = 0;

//     for ( let i = 0; i < itemRows.length; i++ ){
//         particularItemRow = itemRows[i];
//         let priceElement = particularItemRow.getElementsByClassName('price')[0];
//         let quantityElement = particularItemRow.querySelectorAll('#quantity')[0];
//         let price = priceElement.innerText.replace('$', '');
//         let quantityvalue = quantityElement.value;

//         total = total + (price * quantityvalue);
//     }

//     grandTotal = document.getElementById('grand-total').innerText = '$' + total;
// }



