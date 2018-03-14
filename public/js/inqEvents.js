$(document).ready(function() {

  $("#pnSearch").on("click", function(event) {

    event.preventDefault();

    var pn = $("#pnInput").val().trim();

    $.ajax("/api/part/" + pn, {
      type: "GET"
    }).then(function(result){

      $("#pn").text(result[0].pn);
      $("#desc").text(result[0].description);
      $("#rev").text(result[0].rev);
      $("#buyer").text(result[0].buyer);
      $("#vendor").text(result[0].vendor);
      $("#type").text(result[0].type);
      $("#lt_days").text(result[0].lt_days);
      $("#ord_qty").text(result[0].ord_qty);
      $("#cost").text(result[0].cost);
      $("#list").text(result[0].sales_price);
      $("#qoh").text(result[0].qoh);
      $("#uom").text(result[0].uom);
      $("#ss").text(result[0].ss);
      $("#commited").text(result[0].commited);
    });

    $.ajax("/api/poLines/" + pn, {
      type: "GET"
    }).then(function (result) {

      console.log("PO Lines result below");

      console.log(result);

    });

    $.ajax("/api/salesOrders/" + pn, {
      type: "GET"
    }).then(function (result) {

      console.log("Sales orders result below");

      console.log(result);
      console.log("Sales result");
      for (var i = 0; i < result.length; i++) {
          console.log("Sales loop");
        var soLine= "<tr class='table-light'><td>"+result[i].so_num+"</td><td>"+result[i].so_ln+"</td><td>"+result[i].so_customer+"</td><td>"+result[i].order_qty+"</td><td>"+result[i].due_date+"</td></tr>";
        $("#soTable").append(soLine);
      }

    });
  });

});
