// FuncJS by Sharikul Islam. Release: January 2013;updated February 2013
var count, down, echo, function_exists, grab, show_tags, store, str_replace, str_rev, strip_tags, strlen, strpos, toggle, trim, up;

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
  var name, q, tag;
  try {
    if (!(typeof e === void 0 || e === "" || e === null || typeof e !== "string")) {
      q = document.querySelectorAll(e);
      if (q.length === 1 || q.length > 1) {
        if (q.length === 1) {
          return q[0];
        } else {
          return q;
        }
      } else if (q.length === 0) {
        tag = document.getElementsByTagName(e);
        name = document.getElementsByName(e);
        if (tag.length === 1 && name.length === 1) {
          return Array(tag[0], name[0]);
        } else if (tag.length > 1 && name.length > 1) {
          return Array(tag, name);
        } else if (tag.length === 0 && name.length === 1) {
          return name[0];
        } else if (tag.length === 0 && name.length > 1) {
          return name;
        } else if (tag.length === 1 && name.length === 0) {
          return tag[0];
        } else if (tag.length > 1 && name.length === 0) {
          return name;
        } else {
          throw new Error("I'm confused");
        }
      } else {
        throw new Error("Couldn't find '" + e + "' anywhere in the DOM (Document Object Model). Sorry");
      }
    } else {
      throw new TypeError("The argument provided must be encapsulated in speech marks");
    }
  } catch (err) {
    if (err instanceof DOMException) {
      return alert("'" + e + "' isn't a legal argument to provide. Here's the full error stack: \n\n" + err.stack);
    } else {
      return alert(err);
    }
  }
};

trim = function(e) {
  if (!(e === "" || e === null || e === void 0)) {
    return e.replace(/^\s+/, "").replace(/\s+$/, "");
  } else {
    throw new Error("Please specify an argument!");
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
    var _hasTag, _tag_string;
    if (!(e === void 0 || e === null || e === "")) {
        _tag_string = e;
        if (typeof _tag_string === "object") {
            _tag_string = _tag_string.outerHTML;
        }
        _hasTag = _tag_string.match(/(<([^>]+)>)/ig);

        if (_hasTag) {
            return trim(_tag_string.replace(/(<([^>]+)>)/ig, ''));
        } else {
            return trim(_tag_string);
        }
    }
    else {
        throw new Error("The 'strip_tags' function expects one argument in the form of a string or object.");
    }
};

show_tags = function(e) {
  var _convert, _convert_string, _final_conv, _tag;
  if (!(e === void 0 || typeof e === "undefined" || e === null || e === "")) {
    _convert = e;
    try {
      if (typeof _convert === "string") {
        if (_convert.match(/</g && _convert.match(/>/g))) {
          _tag = _convert.replace(/</g, "&lt;".replace(/>/g, "&gt;"));
          return trim(_tag);
        } else {
          throw new ReferenceError("Can't detect any tags inside '" + _convert + "'");
        }
      } else if (typeof _convert === "object") {
        _convert_string = _convert.outerHTML;
        if (_convert_string.match(/</g && _convert_string.match(/>/g))) {
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

toggle = function(e) {
  if (!(e === void 0 || e === "" || e === null)) {
    if (e.style.display === "none") {
      return e.style.display = "block";
    } else {
      return e.style.display = "none";
    }
  } else {
    throw new Error("Please provide an argument!");
  }
};
