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

