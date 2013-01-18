// FuncJS by Sharikul Islam. This release: January 2013
var count, down, echo, function_exists, grab, show_tags, store, str_replace, str_rev, strip_tags, strlen, strpos, trim, up;

echo = function(e) {
  var error;
  if (!(e === null || e === "" || e === void 0)) {
    return document.write(e);
  } else {
    error = (function() {
      throw new Error("Specify an argument, first!");
    })();
    return console.log(error);
  }
};

function_exists = function(fn) {
  if (!(fn === null || fn === "" || fn === void 0)) {
    try {
      if (typeof fn !== "function") {
        throw new ReferenceError("'" + fn + "' isn't a function");
        return false;
      } else {
        return true;
      }
    } catch (er) {
      return alert(er.message);
    }
  } else {
    alert("The 'function_exists' function requires one argument, which you haven't specifed!");
    throw new TypeError("Function hasn't been supplied arguments.");
  }
};

strlen = function(e) {
  if (!(e === null || e === "" || e === void 0 || typeof e !== "string")) {
    return e.length;
  } else {
    alert("" + e + " is NOT string data!");
    throw new TypeError("" + e + " isn't a string");
  }
};

strpos = function(n, h) {
  var error, haystack, needle;
  if (!(n === void 0 || h === void 0 || n === null || h === null || n === "" || h === "")) {
    needle = n;
    haystack = h;
    if (haystack.indexOf(needle !== -1)) {
      return haystack.indexOf(needle);
      return true;
      return console.log("Successfully found the provided needle in the haystack");
    } else {
      error = (function() {
        throw new Error("Couldn't find '" + needle + "' inside '" + haystack + "'. Do remember that this function is case sensitive, so it will try to exactly match '" + needle + "' inside '" + haystack + "'.");
      })();
      console.error(error);
      return false;
    }
  } else {
    throw new Error("Please provide arguments to the 'strpos' function");
  }
};

str_replace = function(o, n, s) {
  var new_, old, string;
  if (!(o === void 0 || n === void 0 || s === void 0 || o === null || n === null || s === null || o === "" || n === "" || s === "")) {
    try {
      old = o;
      new_ = n;
      string = s;
      if (typeof old === "string" && typeof new_ === "string" && typeof string === "string") {
        return string.replace(old, new_);
      } else {
        throw new TypeError("Neither '" + old + "' or '" + new_ + "' are string values. BOTH of these arguments must be of string data.");
      }
    } catch (err) {
      return alert(err.message);
    }
  } else {
    throw new Error("The 'str_replace' function expects three arguments.");
  }
};

up = function(s) {
  if (!(s === void 0 || s === "" || s === null)) {
    if (typeof s === "string") {
      return s.toUpperCase();
    } else {
      return alert("'" + s + "' isn't a string.");
    }
  } else {
    throw new Error("The 'up' function expects one argument. No arguments have been specified.");
  }
};

down = function(s) {
  if (!(s === void 0 || s === "" || s === null)) {
    if (typeof s === "string") {
      return s.toLowerCase();
    } else {
      return alert("'" + s + "' isn't a string.");
    }
  } else {
    throw new Error("The 'down' function expects one argument. No arguments have been specified.");
  }
};

store = function(t, m, k, v) {
  var key, method, type, value;
  if (!(t === void 0 || m === void 0 || k === void 0 || t === null || m === null || k === null || t === "" || m === "" || k === "")) {
    type = t;
    method = m;
    key = k;
    value = v;
    if (type === "session") {
      if (method === "set") {
        if (key !== null && value !== null || key !== "" && value !== "") {
          return sessionStorage.setItem(key, value);
        } else {
          throw new Error("A key and its value MUST be specified!");
          return alert("A key and its value MUST be specified!");
        }
      } else if (method === "get") {
        if (key !== null || key !== "") {
          return sessionStorage.getItem(key);
        } else {
          throw new Error("Key not specified.");
        }
      } else if (method === "remove") {
        if (key !== null || key !== "") {
          console.log("Removing '" + key + "' from the Session Storage...");
          return sessionStorage.removeItem(key);
        }
      }
    } else if (type === "local") {
      if (method === "set") {
        if (key !== null && value !== null || key !== "" && value !== "") {
          return localStorage.setItem(key, value);
        } else {
          throw new Error("A key and its value MUST be specified!");
          return alert("A key and its value MUST be specified!");
        }
      } else if (method === "get") {
        if (key !== null || key !== "") {
          return localStorage.getItem(key);
        } else {
          throw new Error("Key not specified.");
        }
      } else if (method === "remove") {
        if (key !== null || key !== "") {
          console.log("Removing '" + key + "' from the Local Storage...");
          return localStorage.removeItem(key);
        }
      }
    }
  } else {
    throw new Error("The 'store' function expects at least three arguments, and four arguments if setting a key.");
  }
};

str_rev = function(s) {
  if (!(s === void 0 || s === "" || s === null)) {
    if (typeof s === "string") {
      return s.split("").reverse().join("");
    } else {
      return alert("Error: '" + s + "' isn't string data!");
    }
  } else {
    throw new Error("The 'str_rev' function expects one argument.");
  }
};

grab = function(e) {
  var return_val, _name, _tag;
  try {
    if (!(e === void 0 || e === null || e === "" || typeof e === "undefined")) {
      if (typeof e === "string") {
        return_val = document.querySelectorAll(e);
        if (return_val.length === 1) {
          return return_val[0];
        } else if (return_val.length > 1) {
          return return_val;
        } else {
          _tag = document.getElementsByTagName(e);
          _name = document.getElementsByName(e);
          if (_tag.length === 1 || _tag.length > 1 && _name.length === 1 || _name.length > 1) {
            if (_tag.length === 1) {
              return _tag[0];
            } else {
              return _tag;
            }
          } else if (_tag.length === 1 || _tag.length > 1 && _name.length === 0) {
            if (_tag.length === 1) {
              return _tag[0];
            } else if (_tag.length > 1) {
              return _tag;
            } else if (_name.length === 1) {
              return _name[0];
            } else if (_name.length > 1) {
              return _name;
            }
          } else {
            throw new Error("Notice to developer: Couldn't find any element in the DOM (Document Object Model) matching '" + e + "'. \n\nError thrown from the 'grab' function.");
          }
        }
      } else {
        throw new TypeError("Please encapsulate the function arguments within speech marks.");
      }
    } else {
      throw new Error("The 'grab' function expects one argument, which hasn't been specified.");
    }
  } catch (err) {
    if (err instanceof DOMException) {
      return alert("Notice to developer: The argument string '" + e + "' is illegal to provide. Here's the full stack: \n\n " + err.stack);
    } else {
      return alert(err);
    }
  }
};

trim = function(e) {
  var _trim;
  if (!(typeof e !== "string" || e === void 0 || e === "" || e === null)) {
    _trim = e;
    if (_trim.match(/^\s+/) || _trim.match(/\s+$/)) {
      _trim = _trim.replace(/^\s+/, "");
      _trim = _trim.replace(/\s+$/, "");
      return _trim;
    } else {
      return _trim;
    }
  } else {
    throw new TypeError("Please provide an argument within speech marks");
  }
};

count = function(e) {
  var string, _count;
  if (!(e === "" || e === null || e === void 0)) {
    if (typeof e === "string") {
      string = e;
      string = trim(e);
      _count = string.split(/\s+/);
      if (_count) {
        return _count.length;
      } else {
        return console.log("Couldn't count " + string);
      }
    }
  }
};

strip_tags = function(e) {
  var closing_tag, opening_tag, _tag_object, _tag_string;
  if (!(e === void 0 || e === null || e === "")) {
    _tag_string = e;
    if (typeof _tag_string === "string") {
      opening_tag = _tag_string.match(/<[A-Za-z0-9='"\s+]+>/g);
      closing_tag = _tag_string.match(/<\/[A-Za-z0-9='"\s+]+>/g);
      if (opening_tag && opening_tag) {
        _tag_string = _tag_string.replace(/<[A-Za-z0-9='"\s+]+>/g, "");
        _tag_string = _tag_string.replace(/<\/[A-Za-z0-9='"\s+]+>/g, "");
        return trim(_tag_string);
      } else {
        throw new TypeError("The provided argument doesn't look like it has tags within it.");
      }
    } else {
      if (typeof _tag_string === "object") {
        _tag_object = _tag_string.outerHTML;
        _tag_object = _tag_object.replace(/\n/g, "");
        opening_tag = _tag_object.match(/<[A-Za-z0-9='"\s+]+>/g);
        closing_tag = _tag_object.match(/<\/[A-Za-z0-9='"\s+]+>/g);
        if (opening_tag && closing_tag) {
          _tag_object = _tag_object.replace(/<[A-Za-z0-9='"\s+]+>/g, "");
          _tag_object = _tag_object.replace(/<\/[A-Za-z0-9='"\s+]+>/g, "");
          return trim(_tag_object);
        } else {
          throw new TypeError("The provided argument doesn't look like it has tags within it.");
        }
      }
    }
  } else {
    throw new Error("The 'strip_tags' function expects one argument in the form of a string or object.");
  }
};

show_tags = function(e) {
  var _convert, _convert_string, _final_conv, _tag;
  if (!(e === void 0 || typeof e === "undefined" || e === null || e === "")) {
    _convert = e;
    try {
      if (typeof _convert === "string") {
        if (_convert.match(/</g) && _convert.match(/>/g)) {
          _tag = _convert.replace(/</g, "&lt;");
          _final_conv = _tag.replace(/>/g, "&gt;");
          return trim(_final_conv);
        } else {
          throw new ReferenceError("Can't detect any tags inside '" + _convert + "'");
        }
      } else if (typeof _convert === "object") {
        _convert_string = _convert.outerHTML;
        if (_convert_string.match(/</g) && _convert_string.match(/>/g)) {
          _tag = _convert_string.replace(/</g, "&lt;");
          _final_conv = _tag.replace(/>/g, "&gt;");
          return trim(_final_conv);
        } else {
          throw new ReferenceError("Can't detect any tags inside '" + _convert + "'");
        }
      } else {
        throw new Error("The 'show_tags' function can only modify string and object data.");
      }
    } catch (err) {
      return alert(err.message);
    }
  } else {
    throw new Error("The 'show_tags' function expects one parameter being string or object data.");
  }
};
