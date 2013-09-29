var balance = 1000;

$(function() {

$('#d').click(deposit);
$('#w').click(withdraw);

});

function deposit()
{
	var amount = $('#a').val();
	var	t = parseInt(amount);
	balance = balance + t;
	$('span').text('$' + balance);

	if(balance >0){
		$('#balance').css('background', 'white');
	}
}

function withdraw()
{
	var amount = $('#a').val();
	var	t = parseInt(amount);
	balance = balance - t;
	$('span').text('$' + balance);

	if(balance < 0){
		$('#balance').css('background', 'red');
	}

}




