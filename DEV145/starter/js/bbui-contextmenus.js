function showContextMenu() {
	var context, params;
	
	context = document.getElementById("contextMenu");
	params = {title : 'Context Menu', description : 'Show Menu', selected : this}
	
	context.menu.show(params);
}


function peekContextMenu() {
	var context, params;
	
	context = document.getElementById("contextMenu");
	params = {title : 'Context Menu', description : 'Peek Menu', selected : this}
	
	context.menu.peek(params);
}
