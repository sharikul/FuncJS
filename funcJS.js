/*

This is the uncompressed version of FuncJS by Sharikul Islam.
	* Official site at http://funcjs.webege.com,
	* Main documentation at http://docs.funcjs.webege.com.

	- Last updated on 10 Dec 2012
	

*/
//Log that the uncompressed version of FuncJS is loaded on the browser
window.addEventListener("load", function() {console.log("FuncJS (uncompressed) loaded on browser");}, false);
//END

//the empty "funcJS" object is for testing purposes only.
var funcJS = {};

function echo(elem) {
//Function documentation at http://docs.funcjs.webege.com/echo().html

//this simple function prints out the parameter provided within the function, instead of using "document.write()"
	this.elem = elem;
		if(elem !==null) {
			document.write(elem);
			console.log(elem);
		}
}
function print(word) {
//Function documentation at http://docs.funcjs.webege.com/print().html
	if(this.word !==null) {
		document.writeln(word);
	}
}
function function_exists(function_name) {
//Function documentation at http://docs.funcjs.webege.com/function_exists().html
		if(function_name!==null) {
		//check the type of the specified function name
		if(typeof function_name == "function") {
		//if the type of the specified is a function, return the state of "true" back
			return true;
		} else {
			return false;
		}
		}
}
function strlen(element) {
//Function documentation at http://docs.funcjs.webege.com/strlen().html

//this function check the length of the provided parameter, whether that's a string or a number (integer)
	this.element = element;
	if(element !==null) {
		var checkType = typeof(element);
	if(checkType == "number") {
	/*since JavaScript doesn't support checking the length of an integer (number), 
	FuncJS will just return the number specified, if specified
	*/
		return element;
	}	else if(checkType == "string") {
	/*
	if the type of the specified element is a string, FuncJS
	will check the length of it and return it back, which can then be viewed by other methods of calling
	*/
		var strLen = element.length;
		console.log("Displayed " + strLen + " to the screen.");
		return strLen;
	} else {
		echo("Please provide a parameter (string or number) to check its length.");
	}
	} else {
		//do nothing
	}
}
function strpos(thing, part) {
//Function documentation at http://docs.funcjs.webege.com/strpos().html

// this function will search for the "part" parameter within the "thing" parameter
	if(thing !==null && part !==null) {
		var searchFor = thing.indexOf(part);
		return searchFor;
	} else {
		//do nothing
	}
}
function str_replace(what, wth, where) {
//Function documentation at http://docs.funcjs.webege.com/str_replace().html

/*
this function searches for a certain word inside a provided string, and replaces it
*/
	this.what = what;
	this.wth = wth;
	this.where = where;
if(what !==null && wth!==null & where !==null) {
	var replaced = where.replace(what, wth);
	return replaced;
} else {
	return false;
}
}
function findLast(string, what) {
//Function documentation at http://docs.funcjs.webege.com/findLast().html

	//new function; not included in PHP
	//look for the last occurance of a particular word inside a string
	this.string = string;
	this.what = what;
if(string !==null && what !==null) {
	var last = string.lastIndexOf(what);
	return last;
} else {
	return false;
}
}
function up(string) {
//Function documentation at http://docs.funcjs.webege.com/up().html
	this.string = string;
if(typeof(string) !=="undefined" || string !==null) {
	return string.toUpperCase();
} else {
	console.log("No string data has been defined. Exiting.");
}
}
function down(string) {
//Function documentation at http://docs.funcjs.webege.com/down().html
	this.string = string;
if(typeof(string) !=="undefined" || string !==null) {
	return string.toLowerCase();
} else {
	console.log("No string data has been defined. Exiting.");
}
}
function storage(type, method, key, value) {
//Function documentation at http://docs.funcjs.webege.com/storage().html

//this function allows the storage of data via local and session storage, and their retrieval.
	this.type = type;
	this.method = method;
	this.key = key;
	this.value = value;
	console.log("Storage type: "+type+", access method: "+method+", name of key: "+key+", value of key: "+value);
	if(typeof(Storage) !=="undefined") {
//if storage capabilities are supported in the browser FuncJS is loaded in, this function will continue to run
	if(type=="session") {
		if(method=="get") {
			if(key !==null) {
				return sessionStorage.getItem(key);
			} else { /*nothing */ }
		} else if(method=="set") {
			if(value !==null && key !==null) {
				sessionStorage.setItem(key, value);
			}
				} else if (method=="remove") {
				if(key !==null) {
				var r = sessionStorage.removeItem(key);
					if(r) {
						console.log("Removed item from session storage.");
					}
			}	
			}else {/* do nothing */} 
		} 
		else if (type=="local") {
		if(method=="get") {
			if(key !==null) {
				return localStorage.getItem(key);
			} else {}
		} else if (method=="set") {
			if(key !==null && value !==null) {
				localStorage.setItem(key, value);
			}
		} else if (method=="remove") {
			if(key !==null) {
				var re = localStorage.removeItem(key);
					if(re==true) {
						console.log("Removed item from local storage.");
					}
			}	
		}
	}	
} else {
	return "Sorry. Your browser either doesn't support storage capabilities, or JavaScript is disabled in your browser.";
}
}
function FormValidate(formName, inputForm) {
//Function documentation at http://docs.funcjs.webege.com/FormValidate().html
	this.formName = formName;
	this.inputForm = inputForm;
	var get = document.forms[formName][inputForm].value;
	if(get=="") {
		return false;
	} else {
		return true;
	}
}
function isset(element) {
//Function documentation at http://docs.funcjs.webege.com/isset().html
	this.element = element;
	if(element !=="undefined") {
		return true;
	} else  {
		return false;
	}
}
function changeTitle(title) {
//Function documentation at http://docs.funcjs.webege.com/changeTitle().html
	this.title = title;
	if(title !==null) {
		document.title = title;
	}
}
function str_rev(string) {
//Function documentation at http://docs.funcjs.webege.com/str_rev().html
	this.string = string;
if(string!==null) {
/*
Since JavaScript doesn't support simply reversing a string by appending the reverse() method to it,
the string specified would need to be split by no space, then reversed and then the string
will be joined back together
*/
	return string.split("").reverse().join("");
} else {
	//do nothing
}	
}
function get(what, name) {
//Function documentation at http://docs.funcjs.webege.com/get().html
this.what = what;
this.name = name;
		if(what=="id" || what=="ID" || what=="Id") {
	/* the word "ID" can be written in various forms by the user, and therefore several 
	writing styles are specified to tackle this issue*/
			var sv = document.getElementById(name);
			return sv;	
		} else if(what=="tag") {
			var sv = document.getElementsByTagName(name);
			return sv;
		} else if(what=="name") {
			var sv = document.getElementsByName(name);
			return sv;	
} else if(what=="class") {
	return document.getElementsByClassName(name);
}
}
function count(elem) {
//Function documentation at http://docs.funcjs.webege.com/count().html
	if(elem!==null) {
	var split = elem.split(/\s+/);
	return split.length;
/*
Using regular expressions to split a string by spaces is efficient as it's
not possible to estimate how many whitespaces are included between different words.
The split method stores the words in an array called "split".
*/
// the length method is called on the "split" array to check how many items it consists of, and then returns it
}
}
function len(elem) {
//Function documentation at http://docs.funcjs.webege.com/len().html
	return elem.length;
}
function stripslashes(elem) {
	if(elem.match(/\/+/)) {
		return elem.replace(/\//g, "");
	} else {
		return false;
	}
}
function strip_tags(e) {
//Function documentation at http://docs.funcjs.webege.com/strip_tags().html
	if(e!==null) {
//check if the type of the parameter is equal to an object
		if(typeof e==="object") {
	var c = e.outerHTML;
//if the outer HTML of the parameter includes the opening and closing HTML tags, run the function
		if(c.match(/<\w+>/g) && c.match(/<\/\w+>/g)) {
		//replace the opening tag with nothing
			var e_first = c.replace(/<\w+>/g, "");
		//replace the closing tag with nothing
			var e_last = e_first.replace(/<\/\w+>/g, "");
		//return the value of the e_last variable, which will totally remove all tags and leave the text as is
			return e_last;
		} 
//if the first pattern was not matched, check to see if the opening tag has attributes
else if(c.match(/<\s*\w.*?>/g) && c.match(/<\/\w+>/g)) {
			var e_first = c.replace(/<\s*\w.*?>/g, "");
			var e_last = e_first.replace(/<\/\w+>/g, "");
	return e_last;
} else {
		return false;
} 
	} else {
	//if the type of the parameter is not equal to an object, run this function 
		if(e.match(/<\w+>/g) && e.match(/<\/\w+>/g)) {
			var e_first = e.replace(/<\w+>/g, "");
			var e_last = e_first.replace(/<\/\w+>/g, "");
			return e_last;
		} else if(e.match(/<\s*\w.*?>/g) && e.match(/<\/\w+>/g)) {
			var e_first = e.replace(/<\s*\w.*?>/g, "");
			var e_last = e_first.replace(/<\/\w+>/g, "");
	return e_last;
} else {
		return false;
}
	}} else {
		return false;
	}
}
function show_tags(elem) {
//Function documentation at http://docs.funcjs.webege.com/htmlentities().html
	if(elem!==null) {
	if(typeof elem === "string") {
//if the type of the specified parameter is equal to a string, run this specific block
		if(elem.match(/</g) && elem.match(/>/g)) {
		//replace any lower than symbols in the parameter (<) with the HTML code counterpart
			var replace_lt = elem.replace(/</g, "&lt;");
		//replace any greater than symbols in the parameter (>) with the HTML code counterpart
			var replace_gt = replace_lt.replace(/>/g, "&gt;");
		//return the value of the replace_gt variable, which replaces all symbols with their HTML counterparts
			return replace_gt;
		}
	} else if(typeof elem==="object") {
//if the type of the parameter is equal to an object, if using the "get()" function to grab elements, run this block instead
		var outerHTML = elem.outerHTML;
		if(outerHTML.match(/</g) && outerHTML.match(/>/g)) {
			var replace_lt = outerHTML.replace(/</g, "&lt;");
			var replace_gt = replace_lt.replace(/>/g, "&gt;");
			return replace_gt;
		}
	}
	} else {
		return false;
	}
/*
This function works in a similar way to the PHP version, and is intended to be used to display tags on screen.
This function works well in the "print()" function, which is an alternative to "document.writeln()"
*/
}
function split(needle, method) {
//Function documentation at http://docs.funcjs.webege.com/split().html
	/* This function splits the needle by using the provided method */
		if(needle && method!==null) {
			//Every required parameter has been provided ->continue!
		if(typeof needle==="object") {
			//if the provided needle turns out to be an object, grab the OuterHTML of it to convert it and then use that to continue the function
				var OH = needle.outerHTML;
			return OH.split(method);
		} else if(typeof needle==="string")
		// if the needle is already a string, run this block
			return needle.split(method);
		} else {
	return false;
}		
}
function grab(e) {
//Function documentation at http://docs.funcjs.webege.com/grab().html
	if(e.match(/#./)) {
//remove the "#" from the matched string so that the result can be nicely passed to the get() function, which will deal with the rest of the findings
		var re = e.replace("#", "");
		return get("id", re);
	} else if(e.match(/\../)) {
//remove the "." from the string 
		var re = e.replace(".", "");
if(get("class", re).length ===1) {
	return get("class", re)[0];
} else {
		return get("class", re);
}
	} else {
//if a hash or dot symbol isn't specified, it can mean that the user is looking to grab an element either by its name or tag name
		if(get("name", e)[0]!==undefined) {
if(get("name", e).length===1) {
	return get("name", e)[0];
} else {
			return get("name", e);
}
		} else {
if(get("tag", e).length===1) {
	return get("tag", e)[0];
} else {
			return get("tag", e);
}
		}
	}
}
function findLinks(str) {
//Function documentation at http://docs.funcjs.webege.com/findLinks().html

//store any links starting with "http" or "https" in a variable called "store_matches"
var store_matches = str.match(/(http|https):\/\/[A-Z0-9a-z\.-\/_]+[^.!<_(), ]+/g);

//loop through the created "store_matches" array and replace the original parameter links with highlighted ones
for(var i=0;i<store_matches.length;i++) {
	str = str.replace(store_matches[i], "<a href=\""+store_matches[i]+"\">"+store_matches[i]+"</a>");
}
//return it afterwards
return str;
}