
export const Util = function() {}

Util.merge = function(obj1, obj2) {
	var obj = {};

	for(const key in obj1) {
		if(obj1.hasOwnProperty(key)) {
			obj[key] = obj1[key];
		}
	}

	for(const key in obj2) {
		if(obj2.hasOwnProperty(key)) {
			obj[key] = obj2[key];
		}
	}

	return obj;
}

/**
 * Remove all HTML tags from a string.
 * @param str String to process
 * @returns string without tags
 */
Util.strip_tags = function(str) {
	return str.replace(/<(?:.|\n)*?>/gm, '');
}

Util.createElement = function(type, cls) {
	let e = document.createElement(type);
	if(cls !== undefined) {
		Util.addClass(e, cls);
	}

	return e;
}

Util.addClass = function(el, classNames) {
	const names = classNames.split(' ');
	for(const name of names) {
		if (el.classList)
			el.classList.add(name);
		else
			el.className += ' ' + name;
	}
}

Util.removeClass = function(el, className) {
	if (el.classList)
		el.classList.remove(className);
	else
		el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

Util.ready = function(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}


/**
 * Convert a JavaScript Date object to a string.
 *
 * This uses formatting that is subset of the PHP date() function.
 * @param date Date object
 * @param format Optional format string (default is 'n-d-Y h:ia').
 * @returns {string}
 */
Util.formatDatetime = function(date, format) {

	function pad(i, n) {
		var s = '' + i;
		while(s.length < n) {
			s = '0' + s;
		}

		return s;
	}

	if(format === undefined) {
		format = 'n-d-Y h:ia';
	}

	var hours = date.getHours();
	var hour = hours;
	var am = 'a';
	if(hours == 0) {
		hour = 12;
	} else if(hours == 12) {
		am = 'p';
	} else if(hours > 12) {
		hour = hours - 12;
		am = 'p';
	}

	var str = '';
	for(var i=0; i<format.length; i++) {
		switch(format.charAt(i)) {
			case 'n':
				str += date.getMonth() + 1;
				break;

			case 'm':
				str += pad(date.getMonth() + 1, 2);
				break;

			case 'd':
				str += pad(date.getDate(), 2);
				break;

			case 'Y':
				str += date.getFullYear();
				break;

			case 'g':
				str += hour;
				break;

			case 'h':
				str += pad(hour, 2);
				break;

			case 'i':
				str += pad(date.getMinutes(), 2);
				break;

			case 's':
				str += pad(date.getSeconds(), 2);
				break;

			case 'a':
				str += am;
				break;

			default:
				str += format.charAt(i);
				break;
		}
	}

	return str;
}