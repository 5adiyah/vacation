$(document).ready(function(){
  $('#formwrapper form').submit(function(event){
    var weather = parseInt($("#sweather").val());
    var vacationreason = parseInt($("#svacationreason").val());
    var aboutyou = parseInt($("#saboutyou").val());
    var activity = parseInt($("#sactivity").val());
    var home = parseInt($("#shome").val());

    // var points = weather + vacationreason + aboutyou + activity + home;
    // console.log(points);
    // if(points < 99){
    //   $("#pdx").show();
    // } else if(points > 99 && points < 1000){
    //   $("#ny").show();
    // } else {
    //   $("#hawaii").show();
    // }

    event.preventDefault();

  });
});
