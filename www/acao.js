$(function(){
  $("#somar").click(function(){
    var valor1 = Number($("#val1").val());
    var valor2 = Number($("#val2").val());
    var conta = valor1 + valor2;
    $("#result").text(conta);
  });
});