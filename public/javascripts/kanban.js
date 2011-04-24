$("#addHistory").click(function() {
	addHistory();
	loadScriptsToHistory();

	$(".addPostit").click(function() {
		addPostit(this);
		loadScriptsToPostit();
	});
});

$(".column").droppable({hoverClass: "column-active"});

function addHistory() {
	var newHistory = "<div class='history'> \
											<div class='title'> \
												Titulo da Historia \
												<span class='addPostit'> P </span> \
												<span class='remove'> x </span> \
												<span class='state maximized'> + </span> \
											</div> \
											<div class='body'> \
											</div> \
											<div class='footer'> \
												<span class='creationDate'> 01/01/2011 - </span> \
												<span class='estimate'> 13 (Somatorio dos pontos) </span> \
											</div> \
										</div>"

	$("#backlog .histories").prepend(newHistory);
}

function addPostit(addPostitButton) {
	var newPostit = "<div class='postit'> \
										<span class='remove'> x </span> \
										Algum conteudo aqui!!! \
										<span class='estimate'> 7 </span> \
									 </div>"

	$(addPostitButton).parents(".history").children(".body").prepend(newPostit);
}

function loadScriptsToHistory() {
	$(".history").draggable();

	$(".history .title .remove").click(function() {
		$(this).parents(".history").effect("explode");
	});

	$(".history .title .state").click(function() {
		$(this).parents(".history").children(".body").toggle("slow");
		$(this).toggleClass("maximized").toggleClass("minimized");
	});
}

function loadScriptsToPostit() {
	$(".postit").draggable({stack: ".postit", containment: ".history .body"});

	$(".postit .remove").click(function() {
		$(this).parents(".postit").effect("explode");
	});

	$(".postit").editable(function(value, settings) {
		return(value);
	});
}


