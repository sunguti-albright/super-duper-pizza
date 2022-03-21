// // //business logic


let summary = $("#summary")
let totals = $("#totals")
let addPizza = $('#add-pizza')

//checkout process
let delivery = $("#delivery")
let locatio  = $("#location")
let done = $("#done")

$(document).ready(function(){
  summary.hide();
  totals.hide();
  addPizza.hide();
  delivery.hide();
  locatio.hide();
  done.hide();

  //order
$('#order').click (function(){
  var pizzaSize = $("#size option:selected").val();
  var pizzaToppings = $("#toppings option:selected").val();
  var pizzaCrust = $("#crust option:selected").val();
  var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
  var order = 1;
  var grandTotal = 0;

  
  
  $("#order").hide();

  $('span').append(total);


  $("#sizeOrder").html($("#size option:selected").text() + " - " + pizzaSize);
  $("#toppingsOrder").html($("#toppings option:selected").text() + " - " + pizzaToppings);
  $("#crustOrder").html($("#crust option:selected").text() + " - " + pizzaCrust);
  $("#total").html(total);


  summary.show();
  totals.show();
  addPizza.show();
});

// //add another
$('#add-pizza').click (function(){
  
  var pizzaSize = $("#size option:selected").val();
  var pizzaToppings = $("#toppings option:selected").val();
  var pizzaCrust = $("#crust option:selected").val();
  var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
  order = order + 1;
  grandTotal = grandTotal + total;


       var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total);
  
      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
  
       $("#pizza").append(newRow);


  $("#order").hide();
  $('span').append(grandTotal);

  summary.show();
  totals.show();
           
});

//checkout
$("#checkout").click(function() {
  $("#add-btn").hide();
  delivery.show();
  addPizza.hide();
  /**
   * check button clicked 
   * - yes show location
   * - no ask the user to pick up physically 
   */
});

$("#no").click(function(){
  alert("please pick up your order in 10 minutes");
});

$("#yes").click(function(){
  $("#location").show();
  
// })
// $("#complete").click(function(){
//   $("#done").show();
//   $("#checkout").show();
  
// })

// $("#summary").show();
//     $("#totals").show();
//     $(".#add-pizza").hide();

//     $("#size").html($("#size option:selected").text() + " - " + pizzaSize);
//     $("#toppings").html($("#toppings option:selected").text() + " - " + pizzaToppings);
//     $("#crust").html($("#crust option:selected").text() + " - " + pizzaCrust);
//     $("#total").html(total);

// });

    























































// $(document).ready(function(){
//   class Pizza{
//     constructor(size,crust,toppings){
//     this.pizzaSize = size;
//     this.pizzaCrust = crust;
//     this.pizzaToppings = toppings;
//     this.total = total;
  
  
//     }
//   }
// });

// $('#order').click (function(){
//   var pizzaSize = $("#size option:selected").val();
//   var pizzaToppings = $("#toppings option:selected").val();
//   var pizzaCrust = $("#crust option:selected").val();
//   var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
//   var order = 1;
//   var grandTotal = 0;

// });

// $("#summary").show();
//     $("#totals").show();
//     $(".#add-pizza").hide();

//     $("#size").html($("#size option:selected").text() + " - " + pizzaSize);
//     $("#toppings").html($("#toppings option:selected").text() + " - " + pizzaToppings);
//     $("#crust").html($("#crust option:selected").text() + " - " + pizzaCrust);
//     $("#total").html(total);

//     function Pizza(size, toppings, crust, total, orderNo) {
//       this.size = size;
//       this.toppings = toppings;
//       this.crust = crust;
//       this.total = total;
//       this.orderNo = orderNo;
//     }


//     $('#add-pizza').click(function() {
//       var pizzaSize = $("#size option:selected").val();
//       var pizzaToppings = $("#toppings option:selected").val();
//       var pizzaCrust = $("#crust option:selected").val();
//       var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
//       order = order + 1;
//       grandTotal = grandTotal + total;


//       var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

// // $('#summary').hide();
// // $("#totals").hide();
// // $("#add-pizza").hide();
// // $("#extra").hide();
// // $("#yes").hide();
// // $("#no").hide();
// // $("#location").hide();
// // $("#dispatch").hide();
// // $("checkout").hide();










// //     $("table").hide();
// //   $(".additional-buttons").hide();
// //   $(".additional-info").hide();
// //   $(".btn.yes").hide();
// //   $(".btn.no").hide();
// //   $(".additional-info h4").hide();

// //   $('.btn.order').click(function() {
// //     var sizeOfPizza = $(".size option:selected").val();
// //     var toppingsOfPizza = $(".toppings option:selected").val();
// //     var crustOfPizza = $(".crust option:selected").val();
// //     var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
// //     var order = 1;
// //     var grandTotal = 0;

// //     $("table").show();
// //     $(".additional-buttons").show();
// //     $(".btn.order").hide();

// //     $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
// //     $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
// //     $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
// //     $("#total").html(total);

// //     function Pizza(size, toppings, crust, total, orderNo) {
// //       this.size = size;
// //       this.toppings = toppings;
// //       this.crust = crust;
// //       this.total = total;
// //       this.orderNo = orderNo;
// //     }
// //     $('.btn.add-pizza').click(function() {
// //         var sizeOfPizza = $(".size option:selected").val();
// //         var toppingsOfPizza = $(".toppings option:selected").val();
// //         var crustOfPizza = $(".crust option:selected").val();
// //         var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
// //         order = order + 1;
// //         grandTotal = grandTotal + total;
  
  
// //         var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);
  
// //         var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
  
// //         $("#pizza").append(newRow);
// //       });
  
// //       $(".btn.check-out").click(function() {
// //         $(".btn.add-pizza").hide();
// //         $(".btn.check-out").hide();
// //         $(".additional-info").show();
// //         $(".btn.yes").show();
// //         $(".btn.no").show();
// //         $(".additional-info .location").hide();
// //         grandTotal = grandTotal + total;
  
// //         $(".additional-info h3 span").html(grandTotal);
// //       });

// //       $(".btn.yes").click(function() {
// //         $(".additional-info h5").hide();
// //         $(".btn.yes").hide();
// //         $(".btn.no").hide();
// //         $(".additional-info .location").show();
// //         $(".additional-info h3 span").html(grandTotal + 200);
// //       });
  
// //       $(".btn.no").click(function() {
// //         $(".additional-info h5").hide();
// //         $(".btn.yes").hide();
// //         $(".btn.no").hide();
// //         $(".additional-info .location").show();
// //       });
  
// //       $(".btn.complete").click(function() {
// //         var location = $(".additional-info .location input").val();
// //         $(".additional-info h4").show();
// //         $(".additional-info .location").hide();
// //         $(".additional-info h4 span").html(location);
// //       });
  
// //     });
  
  
// //////////////////////////////////////////////////////////////////////////////////////////
// // //User Interface Logic
// // $(document).ready(function() {
// //         $("#btn").submit(function(event) {
// //           event.preventDefault();

// //           var inputtedsize = $("input#new-size").val();
// //           var inputtedcrust = $("input#new-crust").val();
// //           var inputtedtoppings = $("input#new-toppings").val();
      
// //           var Pizza = new Pizza(inputtedsize, inputtedcrust, inputtedtoppings );
      
// //           $("ul#orders").append("<li><span class='Pizza'>" + newPizza.size + "</span></li>");
      
// //           $("input#size").value("");
// //           $("input#crust").value("");
// //           $("input#toppings").value("");
        
// //         });
      




