$(function(){
  $("#somar").click(function(){
    var valor1 = $("#val1").val();
    var valor2 = $("#val2").val();
    var conta = Number(valor1) + Number(valor2);
    $("#result").attr("value", conta);
  });
});