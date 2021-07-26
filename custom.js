$('input[name="selected_tip"]').click(function(){
    var tippercent = $(this).attr('data-value');
    var bill = $('input[name="bill"]').val();
    var people = $('input[name="people"]').val();
    var isOkay = false;
    if(errorFunction(bill, people)){
        bill =  parseFloat(bill);
        people = parseFloat(people);
        var totaltip = ( bill + ( bill * tippercent / 100) )/people;
        var eachtip = (bill/people)*(tippercent/100);
        $('.tip_amount').text('$'+eachtip.toFixed(2));
        $('.total_tip_amount').text('$'+totaltip.toFixed(2));
    }
    
});
function errorFunction(bill, people){
    var isBillOkay = isPeopleOkay = false;
    if(bill == ""){
        $('input[name="bill"]').addClass('errorinput');
        $('.billlabel').text("Can't be Empty");
        $('.billlabel').show();
    }
    else if(bill <= 0.00){
        $('input[name="bill"]').addClass('errorinput');
        $('.billlabel').text("Can't be Zero");
        $('.billlabel').show();
    }
    else if(bill > 0.00){
        $('input[name="bill"]').removeClass('errorinput');
        $('.billlabel').hide();
        $('.billlabel').text("");
        isBillOkay = true;
    }
    else{
        $('input[name="bill"]').addClass('errorinput');
        $('.billlabel').text("Only Numbers");
        $('.billlabel').show();
    }
    
    if(people == ""){
        $('input[name="people"]').addClass('errorinput');
        $('.peoplelabel').text("Can't be Empty");
        $('.peoplelabel').show();
    }
    else if(people <= 0.00){
        $('input[name="people"]').addClass('errorinput');
        $('.peoplelabel').text("Can't be Zero");
        $('.peoplelabel').show();
    }
    else if(people > 0.00){
        $('input[name="people"]').removeClass('errorinput');
        $('.peoplelabel').text("");
        $('.peoplelabel').hide();
        isPeopleOkay = true;
    }
    else{
        $('input[name="people"]').addClass('errorinput');
        $('.peoplelabel').text("Only Numbers");
        $('.peoplelabel').show();
    }
    return (isBillOkay && isPeopleOkay);
    
}