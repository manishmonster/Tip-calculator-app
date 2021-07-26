var tippercent = null;
$('input[name="selected_tip"]').click(function(){
    tippercent = $(this).attr('data-value');
    tipping(tippercent);
});
$('.tipvalue').on("keyup keypress focusin focusout",function(){
    tippercent = $(this).val();
    if(tippercent != ""){
        if(tippercent > 0.00 && tippercent <=1000.00){
            $(this).removeClass('errorinput');
            tipping();
        }
        else{
            $(this).addClass('errorinput');
        }
    }
});
$('input[name="bill"]').on("keypress keyup", function(){
    tipping();
});
$('input[name="people"]').on("keypress keyup", function(){
    tipping();
});
$('.reset').click(function(){
    $('input[name="bill"]').val('');
    $('input[name="people"]').val('');
    $('.tipvalue').val('');
    $('.tip_amount').text('$0.00');
    $('.total_tip_amount').text('$0.00');
    $('.billlabel').hide();
    $('.billlabel').text("");
    $('.peoplelabel').text("");
    $('.peoplelabel').hide();
    $('.tipvalue').removeClass('errorinput');
    $('input[name="bill"]').removeClass('errorinput');
    $('input[name="people"]').removeClass('errorinput');
});
function tipping(){
    if(tippercent != "" && tippercent > 0.00){
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
        else{
            $('.tip_amount').text('$0.00');
            $('.total_tip_amount').text('$0.00');
        }
    }
    else{
        $('.tip_amount').text('$0.00');
        $('.total_tip_amount').text('$0.00');
    }
    
}


function errorFunction(bill, people){
    var isBillOkay = isPeopleOkay = false;
    if(bill == ""){
        isBillOkay = false;
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
        isPeopleOkay = false;
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