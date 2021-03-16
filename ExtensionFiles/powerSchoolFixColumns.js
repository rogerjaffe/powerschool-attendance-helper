$(document).ready(function() {
	$($('col')[0]).attr('style','width: 300px');
	$('[name="att_attcodelist"]').val('A');
	setTimeout(poll, 300);
});
var pollCount = 0, maxPoll = 10;
var poll = function() {
	if ($($('#attendanceCode')).length !== 0) {
		$('#attendanceCode').val("A");
		pollCount == 10;
	} else {
		if (pollCount < maxPoll) {
			setTimeout(poll, 300);
		}
	}
	pollCount++;
}