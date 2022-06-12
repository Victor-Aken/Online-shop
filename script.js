
let addToCartButton = document.querySelectorAll("#add-btn");
let parentItemContainer = document.getElementsByTagName("tbody")[0];
let itemCount = document.getElementById("itemCount");
let deleteButton = document.getElementsByClassName('delete-button');

for (let i = 0; i < addToCartButton.length; i++ ){
    
    addToCartButton[i].addEventListener( 'click', function(){

      
        let btn = event.target;
        let btn_parent = btn.parentElement;
        let btn_grandparent = btn.parentElement.parentElement;
        let ProductName = btn_parent.children[1].innerText;
        let ProductPrice = btn_parent.children[3].innerText;
        let ProductImage = btn_grandparent.children[0].src;



        let itemContainer = document.createElement('tr');

        itemContainer.innerHTML = ` <td><img class="item-img" src="${ProductImage}" alt="" class="product-img"></td>
        <td>${ProductName}</td>
        <td><input type="number" name="quantity" id="quantity"></td>
        <td>${ ProductPrice}</td>
        <td><button class="delete-button"><img class="delete-icon" src="shopping cart img/delete-icon.png" alt=""></button></td>`

        parentItemContainer.append(itemContainer);
        itemCount.innerText = parentItemContainer.children.length;

        for( let i = 0; i < deleteButton; i++ ){
            deleteButton[i].addEventListener( 'click', removeItem )
        }
    

        // for( let i = 0; i < itemQuantity; i++ ){
        //     itemQuantity[i].addEventListener( 'change', function(event){

        //         let number_of_item = event.target;
        //         console.log(23)

    
        //     })
        // }
        
    })
}


function removeItem(event){
    removeBtn = event.target;
    removeBtn_grandparent = removeBtn.parentElement.parentElement;

    removeBtn_grandparent.remove();
    // itemContainer.remove();
}


