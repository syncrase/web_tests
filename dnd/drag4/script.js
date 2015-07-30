
function onloading(){
	REDIPS.drag.init();
	// Allow or not items to be drop
	//REDIPS.drag.enableDrag(false);
	
	// This is the asked question when the item is drop in the trash box
	//REDIPS.drag.trash.question = "";

	// overwrite : if there's already the same element it isn't add to the content. if false : 2 identicals items can be together
	//switching : 2 items are switch between the drop case and the latest case overflown
	//switch : 2 items are switch between the drop case and the case where the items has been dragged
	//single : It can be only one item in a case
	//multiple : It can be several items in one case
	//REDIPS.drag.dropMode = 'overwrite' || 'switching' || 'switch' || 'single' || 'multiple';
	REDIPS.drag.dropMode = 'switching';
}

