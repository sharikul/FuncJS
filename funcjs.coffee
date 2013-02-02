##CoffeeScript file by Sharikul Islam. This release: January 2013
echo = (e) ->
  unless e is null or e is "" or e is undefined
    document.write e
  else
    error = throw new Error "Specify an argument, first!"
    console.log error
function_exists = (fn) ->
  unless fn is null or fn is "" or fn is undefined
   try
    if typeof fn isnt "function"
      throw new ReferenceError "'#{fn}' isn't a function"
      return false
    else
      return true
   catch er
      alert er.message
  else
    alert "The 'function_exists' function requires one argument, which you haven't specifed!"
    throw new TypeError "Function hasn't been supplied arguments."
strlen = (e) ->
  unless e is null or e is "" or e is undefined or typeof e isnt "string"
    return e.length
  else
    alert "#{e} is NOT string data!"
    throw new TypeError "#{e} isn't a string"
    
strpos = (n, h) ->
  unless n is undefined or h is undefined or n is null or h is null or n is "" or h is "" 
    needle = n
    haystack = h
    if haystack.indexOf needle isnt -1
      return haystack.indexOf needle
      return true
      console.log "Successfully found the provided needle in the haystack"
    else
      error = throw new Error "Couldn't find '#{needle}' inside '#{haystack}'. Do remember that this function is case sensitive, so it will try to exactly match '#{needle}' inside '#{haystack}'."
      console.error error
      return false
  else
    throw new Error "Please provide arguments to the 'strpos' function"
str_replace = (o, n, s) ->
  unless o is undefined or n is undefined or s is undefined or o is null or n is null or s is null or o is "" or n is "" or s is ""
    try 
      old = o
      new_ = n
      string = s
      if typeof old is "string" and typeof new_ is "string" and typeof string is "string"
        return string.replace old, new_
      else
        throw new TypeError "Neither '#{old}' or '#{new_}' are string values. BOTH of these arguments must be of string data."
    catch err
      alert err.message
  else
    throw new Error "The 'str_replace' function expects three arguments."
up = (s) ->
  unless s is undefined or s is "" or s is null
    if typeof s is "string"
      return s.toUpperCase()
    else
      alert "'#{s}' isn't a string."
  else
    throw new Error "The 'up' function expects one argument. No arguments have been specified."
down = (s) ->
  unless s is undefined or s is "" or s is null
    if typeof s is "string"
      return s.toLowerCase()
    else
      alert "'#{s}' isn't a string."
  else
    throw new Error "The 'down' function expects one argument. No arguments have been specified."
store = (t, m, k, v) ->
  unless t is undefined or m is undefined or k is undefined or t is null or m is null or k is null or t is "" or m is "" or k is ""
    type = t
    method = m
    key = k
    value = v
    if type is "session"
      if method is "set"
        if key isnt null and value isnt null or key isnt "" and value isnt ""
          return sessionStorage.setItem key, value
        else
          throw new Error "A key and its value MUST be specified!"
          alert "A key and its value MUST be specified!"
      else if method is "get"
        if key isnt null or key isnt ""
          return sessionStorage.getItem key
        else
          throw new Error "Key not specified."
      else if method is "remove"
        if key isnt null or key isnt ""
          console.log "Removing '#{key}' from the Session Storage..."
          sessionStorage.removeItem key
    else if type is "local"
      if method is "set"
        if key isnt null and value isnt null or key isnt "" and value isnt ""
          return localStorage.setItem key, value
        else
          throw new Error "A key and its value MUST be specified!"
          alert "A key and its value MUST be specified!"
      else if method is "get"
        if key isnt null or key isnt ""
          return localStorage.getItem key
        else
          throw new Error "Key not specified."
      else if method is "remove"
        if key isnt null or key isnt ""
          console.log "Removing '#{key}' from the Local Storage..."
          localStorage.removeItem key
  else
    throw new Error "The 'store' function expects at least three arguments, and four arguments if setting a key."
str_rev = (s) ->
  unless s is undefined or s is "" or s is null
    if typeof s is "string"
      return s.split("").reverse().join("")
    else
      alert "Error: '#{s}' isn't string data!"
  else
    throw new Error "The 'str_rev' function expects one argument."
grab = (e) ->
  try
    unless typeof e is undefined or e is "" or e is null or typeof e isnt "string"
      q = document.querySelectorAll e
      if q.length is 1 or q.length > 1
        if q.length is 1
            return q[0]
        else
            return q
      else if q.length is 0
        tag = document.getElementsByTagName e
        name = document.getElementsByName e
        if tag.length is 1 and name.length is 1
          return Array tag[0], name[0]
        else if tag.length > 1 and name.length > 1
          return Array tag, name
        else if tag.length is 0 and name.length is 1
          return name[0]
        else if tag.length is 0 and name.length > 1
          return name
        else if tag.length is 1 and name.length is 0
          return tag[0]
        else if tag.length > 1 and name.length is 0
          return name
        else
            throw new Error "I'm confused"
      else
        throw new Error "Couldn't find '#{e}' anywhere in the DOM (Document Object Model). Sorry"
    else
      throw new TypeError "The argument provided must be encapsulated in speech marks"
  catch err
    if err instanceof DOMException
      alert "'#{e}' isn't a legal argument to provide. Here's the full error stack: \n\n#{err.stack}"
    else
      alert err
trim = (e) ->
	unless e is "" or e is null or e is undefined
		return e.replace(/^\s+/, "").replace /\s+$/, ""
	else
		throw new Error "Please specify an argument!"
count = (e) ->
  unless e is "" or e is null or e is undefined
    if typeof e is "string"
      string = e
        #remove spaces before and after the argument string, if there's any via the trim function
      string = trim e
      #now split the string by the all the available spaces
      _count = string.split /\s+/
      #if the string was successfully split, return the length of the array
      if _count
        return _count.length
      else
        console.log "Couldn't count #{string}"
strip_tags = (e) ->
  unless e is undefined or e is null or e is ""
    _tag_string = e
    if typeof _tag_string is "string"
      opening_tag =  _tag_string.match /<[A-Za-z0-9='"\s+]+>/g
      closing_tag =  _tag_string.match /<\/[A-Za-z0-9='"\s+]+>/g
      if opening_tag and opening_tag
       _tag_string = _tag_string.replace /<[A-Za-z0-9='"\s+]+>/g, ""
       _tag_string = _tag_string.replace /<\/[A-Za-z0-9='"\s+]+>/g, ""
       return trim _tag_string
      else
        throw new TypeError "The provided argument doesn't look like it has tags within it."
    else
      if typeof _tag_string is "object"
        _tag_object = _tag_string.outerHTML
        _tag_object = _tag_object.replace(/\n/g, "")
        opening_tag =  _tag_object.match /<[A-Za-z0-9='"\s+]+>/g
        closing_tag =  _tag_object.match /<\/[A-Za-z0-9='"\s+]+>/g 
        if opening_tag and closing_tag
          _tag_object = _tag_object.replace /<[A-Za-z0-9='"\s+]+>/g, ""
          _tag_object = _tag_object.replace /<\/[A-Za-z0-9='"\s+]+>/g, ""
          return trim _tag_object
        else
          throw new TypeError "The provided argument doesn't look like it has tags within it."
   else
      throw new Error "The 'strip_tags' function expects one argument in the form of a string or object."
show_tags = (e) ->
  unless e is undefined or typeof e is "undefined" or e is null or e is ""
    _convert = e
    try
      if typeof _convert is "string"
        if _convert.match (/</g) and _convert.match (/>/g)
          _tag = _convert.replace /</g, "&lt;".replace />/g, "&gt;"
          return trim _tag
        else
          throw new ReferenceError "Can't detect any tags inside '#{_convert}'"
      else if typeof _convert is "object"
        _convert_string = _convert.outerHTML
        if _convert_string.match (/</g) and _convert_string.match />/g
          _tag = _convert_string.replace /</g, "&lt;"
          _final_conv = _tag.replace />/g, "&gt;"
          return trim _final_conv
        else
          throw new ReferenceError "Can't detect any tags inside '#{_convert}'"
      else
        throw new Error "The 'show_tags' function can only modify string and object data."
    catch err
      alert err.message
  else
    throw new Error "The 'show_tags' function expects one parameter being string or object data."
toggle = (e) ->
	unless e is undefined or e is "" or e is null
		if e.style.display is "none"
			e.style.display = "block"
		else
			e.style.display = "none"
	else
		throw new Error "Please provide an argument!"