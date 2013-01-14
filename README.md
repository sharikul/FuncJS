## FuncJS 2
**This documentation on GitHub will remain valid until the official documentation goes live.**
##What's new?
<p>FuncJS 2 changes a lot of problems in functions that were present in the initial version of FuncJS. Moreover, 9 functions have been removed from the library as they were next to useless. Ideally, FuncJS 2 is a version of FuncJS that is packed with useful and awesome functions that should've been present in the first place.</p>
<p>You may find that there are still a lot of functions from FuncJS 1 in FuncJS 2. However, these sets of functions are more flexible in terms of how they communicate back to you, usually in the form of error messages.</p>

##Meet the functions
In FuncJS 2, there are currently <strong>14</strong> functions. The number would've been 13, if I hadn't added the <code>trim()</code> function. Meet each function in the order in which they appear in the source files.</p>

<ol>
<li><code>echo()</code>: The <code>echo()</code> function displays text on screen. This is an alternative to JavaScript's <code>document.write()</code> method.<br /><br />
</li>
<li><code>function_exists()</code>: The <code>function_exists()</code> function checks whether another <strong>JavaScript</strong> function exists in the page that FuncJS is included in. However, the stability of this function cannot be guaranteed, and the availability of this function is something which I'm thinking over at the moment.<br/><br />
</li>
<li><code>strlen()</code>: The <code>strlen()</code> function counts and returns the number of characters in the string provided as an argument. This is an alternative to JavaScript's <code>element.length</code> method.<br/><br/>
</li>
<li><code>strpos()</code>: The <code>strpos()</code> function checks and returns the position of the provided needle in the haystack, that's been provided as an argument. This is an alternative to JavaScript's <code>haystack.indexOf(needle)</code><br/><br/>
</li>
<li><code>str_replace()</code>: The <code>str_replace()</code> function replaces the old value to the new value in the provided string as an argument. This is an alternative to JavaScript's <code>element.replace(old, new)</code><br/><br/>
</li>
<li><code>up()</code>: The <code>up()</code> function capitalizes every letter in the string argument and returns it. This is a nice alternative to JavaScript's <code>element.toUpperCase()</code> method.<br/><br/>
<li><code>down()</code>: Functioning similarly to the <code>up()</code> function, the <code>down()</code> function lowercases every letter in the string argument and returns it. This is a nice alternative to JavaScript's <code>element.toLowerCase()</code> method.<br/><br/>
<li><code>store()</code>: The <code>store()</code> function lets you use a new API for modifying data stored in the local or session storage. For example: <br />
<code>store("session", "set", "Github", "true");</code> will <strong>create</strong> a new key in the <strong>session storage</strong> called "Github", and will set its value to "true." To remove this key, simply replace the second argument to "remove", and don't provide the last parameter. Similarly, to view the value of a key in any storage, specify the type of storage as the first argument e.g. "session" or "local", the access method e.g. "set", "get" or "remove", and the name of the key as the third argument. <strong>Remember, you should only provide the last argument <u>if you're setting a key</u></strong>!<br/><br/> 
</li>
<li><code>str_rev()</code>: The <code>str_rev</code> function will reverse the order of letters in the provided argument and return it back to you. Handy for quick and easy reversing processes.<br/><br/>
</li>
<li><code>grab()</code>: The <code>grab()</code> function functions almost entirely like jQuery's element grabbing. If you're wanting to "grab" an element (<em>hence the name, grab</em>) by targetting its ID or class name, as parameters, provide "#ID" or ".class" to grab the respective elements. If you're wanting to grab an element by targetting its name attribute or tag name, simply write the name of tag as parameters. <br/><br/>
</li>
<li><code>trim()</code>: The <code>trim()</code> function will remove any number of whitespace before and/or after the argument, and return the result back to you for you to use. 
</li>
<li><code>count()</code>: This function may sound similar to <code>strlen()</code>, but the <code>count()</code> function will count <strong>the number of words</strong> in the specified argument, and return the result back to you.<br/><br/>
</li>
<li><code>strip_tags()</code>: The <code>strip_tags()</code> function will try and remove a good number of HTML tags from the provided argument, if not any. The functionality of this function will constantly improve overtime.<br/><br/>
</li>
<li><code>show_tags()</code>: The <code>show_tags()</code> function will display every HTML tag it can detect, similar to PHP's <code>htmlentities()</code> function. This function, from testing, works superbly.
</li>
</ol>
