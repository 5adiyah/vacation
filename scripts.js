$(document).ready(function(){
  $('#formwrapper form').submit(function(event){
    var weather = parseInt($("#sweather option:selected").val());
    var vacationreason = parseInt($("#svacationreason option:selected").val());
    var aboutyou = parseInt($("#saboutyou option:selected").val());
    var activity = parseInt($("#sactivity option:selected").val());
    var home = parseInt($("#shome option:selected").val());

    var points = weather + vacationreason + aboutyou + activity + home;

    if(points < 99){
      $("#pdx").show();
      $("#ny").hide();
      $("#hawaii").hide();
    } else if(points > 99 && points < 3000){
      $("#pdx").hide();
      $("#ny").show();
      $("#hawaii").hide();
    } else if(points > 3100){
      $("#pdx").hide();
      $("#ny").hide();
      $("#hawaii").show();
    }

    console.log(points);
    event.preventDefault();

  });
});
