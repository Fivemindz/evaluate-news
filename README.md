# This project is used to build a text analysis tool using Meaning Cloud's "sentiment analysis" api

In order to access this tool you will need to setup the server. Once the server is setup it will serve the required html, css and javascript to the client's browser. After entering text into the form and pressing the submit button, the client's browser will send that infromation to the server. The server will then submit the text to the sentiment analysis api. After the sentiment analysis api returns the analysis to the server, the server will send the analysis data back to the client. Once the client recieves the analysis javascript will then update the browser.

Instructions for setting up the server:
pre-setup:
You will need to register with Meaning Cloud and get an api key. Once you have you key add a new file into the root of the project named ".env".
In the ".env" file add the following varible "API_KEY= #####". Replace the ##### with your api key.

Step 1.
cd into your project directory and run the command "npm install".

Step 2.
from your project directory run the command "npm run build-prod".

Step 3.
from your project directory run the command "npm start".

Step 4.
open a web browser and vist localhost:8080.
