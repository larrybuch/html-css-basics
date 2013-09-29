var balance = 1000;

$(function() {

	$('#deposit').click(deposit);
	$('#withdraw').click(withdraw);

});

function deposit()
{
	var amount = $('#amount').val();
	var	total = parseInt(amount);
	balance = balance + total;
	$('#current-total').text('$' + balance);

	if(balance > 0){
		$('#balance').css('background', 'white');
		$('#current-total').css('color', '#2ecc71');
	}
}

function withdraw()
{
	var amount = $('#amount').val();
	var	total = parseInt(amount);
	balance = balance - total;
	$('#current-total').text('$' + balance);

	if(balance < 0){
		$('#balance').css('background', '#e74c3c');
		$('#current-total').css('color', 'white');
	}

}




