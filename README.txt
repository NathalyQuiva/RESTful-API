RESTful API is an interface that two computer systems use to exchange information securely over the internet. Most business applications have to communicate with other internal and third-party applications to perform various tasks.


1. Create empty folder, open it in VSC.
2. Node.js: write in JS server´s code.
3. Open Terminal integrated with ctrl+x+p (open the console iubicated in your project using command prompt)
4. npm init -y
5. npm i express morgan (Both help to create the server, express is a server code, morgan hel us to watch the request in our console)
6. Create src folder, and create and file named index.js
7. Require express, save it in a constant.
8. Execute the previous constant and save te execution in a new constant ( in my case it is called app), this is my server.
9. Put to listen the server in a port and say its the function that should to execute when it is up.
10. For init tthe server in the command prompt we should write: node src/index.js (node executes index.js from de src folder)
11. We can watch how is the server working in our browser writing: http://localhost:3000/  (Cannot GET / mean that the server is working but that it does not have routes yet)
12. Initializing a local and remote repository: 
    git init 
    git add . 
    git commit -m " "
    git remote add origin https://github.com/NathalyQuiva/RESTful-API.git
    git push origin main
13. Require middleware Morgan and save it in a constant (Middleware is a functions that process data before our server receive that data, Middleware is software that different applications use to communicate with each other, it let watch in the console all the information received in the server)
14. Execute morgan   app.use(morgan()), if we want o watch the code we should do a request from the browser. We can chage dev for combined and the description of the request is more longer.
15. Use method with json.
16. Use method with urlencoded for receive simple input data for example.
17. Setting the port, for we can to access to the port in anyplace of the app.
18. Access to the port in the listen using: app.get('port') instead of 3000.
19. Up to this point I have been canceled and initializing the server every time, to avoid this I can npm i nodemon as a developer dependency.


