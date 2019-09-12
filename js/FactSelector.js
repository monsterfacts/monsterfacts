function bindEvents() {
	document.getElementById("typeSelector").onchange = function() {
		displayFact(getFact(getSelectedType()));
	}

	document.getElementById("factButton").onclick = function() {
		displayFact(getFact(getSelectedType()));
	}
}

function getSelectedType() {
	var typeSelector = document.getElementById("typeSelector");
	return typeSelector.options[typeSelector.selectedIndex].value;
}

function getFact(type) {
	var typeFacts = completelyTrueMonsterFacts[type];

	return typeFacts[Math.floor(Math.random() * typeFacts.length)]
}

function displayFact(fact) {
	var factContainer = document.getElementById("fact");
	factContainer.innerHTML = fact;
}

function createSelector() {
	var selectorContainer = document.getElementById("selectorContainer");
	
	var selectorHtml = '<select name="type" id="typeSelector">';
	for(key in completelyTrueMonsterFacts) {
		selectorHtml = selectorHtml + '<option>' + key + '</option>'
	}
	selectorHtml = selectorHtml + '</select>';
	
	selectorContainer.innerHTML = selectorHtml;
}

function start() {
	createSelector();
	bindEvents();
}

start();
