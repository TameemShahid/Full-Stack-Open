# Forms and HTTP POST
```html
<form action="/exampleapp/new_note" method="POST">
  <input type="text" name="note"><br>
  <input type="submit" value="Save">
</form>
```
- When the *Submit* button is clicked of the form, the browser will send the user input to the server.
- Upon receiving the request server saves the note, and responds with HTTP status code 302. This is a **URL redirect** code.
- HTTP status code 302 asks the browser to make a new HTTP GET request to the address defined in the header's **Location**.
- So the browser reloads the Notes page, the reload causes three more HTTP requests.
	- Fetching the style sheet (main.css)
	- The JavaScript code (main.js)
	- and the raw data fetched from api call made from main.js (data.json)
- The **Form tag** has attributes namely, *action* and *method*. Action contains the url where the request is send and method defines the type of request (GET, POST, PUT, DELETE).

# AJAX (Asynchronous JavaScript and XML)
AJAX is an approach that enabled the fetching of content to web pages using JS included within the HTML, without the neet to rerender the web page.
Prior to AJAX all web pages worked like the [[Fundamentals of Web App#Traditional Web Application| traditional web application.]]

# Single Page Application (SPA)
SPA style of creating web-applications don't fetch all of their pages separately from the server. Instead, it comprises of only one HTML page fetch from the server and its content is changed/manipulated with JS that is executed in the browser.