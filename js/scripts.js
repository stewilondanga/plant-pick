var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$(function() {
    var $rows = $('tr');

    $('td').on('mouseover', function(){
        var col_index = $(this).parent().children('td').index(this);
        $("tr td:nth-of-type(" + (col_index + 1) + ")").addClass('hover');
    }).on('mouseout', function(){
        $("tr td").removeClass("hover");
    })
});
