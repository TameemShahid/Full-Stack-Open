# Document Object Model (DOM)
DOM is an API for the browser which enables programmatic modification of the *element trees* corresponding to the web pages. 
Basically the following line of code utilizes the DOM api to make changes in the webpage:

```js
var ul = document.createElement('ul')
ul.setAttribute('class', 'notes')

var li = document.createElement('li')
li.TextContent = "Hello World!"

ul.appendChild(li)

document.getElementById('notes').appendChild(ul)
```
- The topmost node of the DOM tree is called the **document** object.
# Traditional Web Application
- In traditional web applications the browser is "dumb". 
	- Browser only fetches HTML data from the server, and all the application logic is on the server.
A web page containing a simple `<link rel="stylesheet" type="text/css" href="/exampleapp/main.css">` and `<script type="text/javascript" src="/exampleapp/main.js"></script>` in the head tag has the following swimlane diagram:
![[Pasted image 20220920180512.png]]
 - The browser fetches the HTML code defining the content and the structure of the page from the server using an HTTP GET request.
 - Links in the HTML code cause the browser to also fetch the CSS style sheet _main.css_...
 - and a JavaScript code file *main.js*
 - The browser executes the JavaScript code. The code makes an HTTP GET request to the address https://studies.cs.helsinki.fi/exampleapp/data.json, which returns the notes as JSON data.
 - When the data has been fetched, the browser executes an event handler, which renders the notes to the page using the DOM-API.
