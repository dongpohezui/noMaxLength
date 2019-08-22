'use strict';

var lists = document.querySelectorAll('[maxlength]');
var i;

for (i=0; i<lists.length; i++) {
	lists[i].setAttribute("maxlength","");
}
