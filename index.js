$(document).ready(function() {
    $(".buy-btn").click(function() {
      var kitName = $(this).closest(".card").find(".card-title").text();
      var kitPrice = $(this).closest(".card").find(".text-body-secondary").text();
  
      alert("You bought the " + kitName + " for " + kitPrice);
  
    });
  
    $("#basic-addon2").click(function() {
      var searchKeyword = $("input.form-control").val().toLowerCase();
  
      $(".card").each(function() {
        var kitName = $(this).find(".card-title").text().toLowerCase();
        if (kitName.includes(searchKeyword)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  $(document).ready(function() {
    $('.buy-button').click(function() {
      var productName = $(this).data('product');
      alert('Product added to cart: ' + productName);
    });
  });
  $(document).ready(function() {
    var cartCount = 0;

    $(".buy-button").click(function() {
        cartCount++;
        updateCartCount();
    });

    function updateCartCount() {
        $("#cart-count").text(cartCount);
    }
});