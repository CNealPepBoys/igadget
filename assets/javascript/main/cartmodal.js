$(document).ready(function(){
	$("#ModalContainer").DOMNodeAppear(function(){
		var $thisOne = $(this);
		$thisOne.addClass("mw-mc");
		$thisOne.find("#ModalContentContainer").addClass("mw-mcc");
		$thisOne.find("a").addClass("mw-link");
	});
});
