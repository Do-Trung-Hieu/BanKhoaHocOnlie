$(document).ready(() => {
    $('.add-to-cart').on('click',addToCart);
});

function addToCart(){
    var id = $(this).data('id');
    var quantity = /*$('#sst') ? $('#sst').val() :*/ 1;
    $.ajax({
        url: '/cart',
        type: 'POST',
        data: {
            id: id,
            quantity: quantity
        },
        success: function(result){
            $('#cart-badge').html(result.totalQuantity);
        }
    })
}

function updateCart(id,quantity){
    // if(quantity == 0){
    //     removeCartItem(id);
    // }
    // else{
    //     updateCartItem(id,quantity);
    // }
    removeCartItem(id);
}

function removeCartItem(id){
    $.ajax({
        url: '/cart',
        type: 'DELETE',
        data: {
            id: id
        },
        success: function(result){
            $('#cart-badge').html(result.totalQuantity);
            $('#totalPrice').html('$' + result.totalPrice);
            // xóa tới sản phẩm cuối cùng => empty
            if(result.totalQuantity > 0){
                $(`#item${id}`).remove();
            }
            else
            {
                $('#cart-body').html('<div class ="alert alert-info text-center">Your cart is empty !</div>')
            }
        }
    })
}

// function updateCartItem(id,quantity){
//     $.ajax({
//         url: '/cart',
//         type: 'PUT',
//         data: {
//             id: id,
//             quantity: quantity
//         },
//         success: function(result){
//             $('#cart-badge').html(result.totalQuantity);
//             $('#totalPrice').html(result.totalPrice);
//             $(`#price${id}`).html(result.item.price);
//         }
//     })
// }

function clearCart(){
    if(confirm('Do you really want to remove all items?')){
        $.ajax({
            url: '/cart/all',
            type: 'DELETE',
            success: function(){
                $('#cart-badge').html('0');  
                $('#cart-body').html('<div class ="alert alert-info text-center">Your cart is empty !</div>')
            }
        });
    }
}