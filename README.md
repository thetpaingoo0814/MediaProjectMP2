# MediaProjectMP2
This is my Master's Project of the final year I do so much research and I will keep doing this project till it useful

Project Planning

April 30 - Database Design Finished!

- May 1 - 

Utilities
-Resdis
-Image Modules
-Validator

User Implementation
-App-Route-Controller-Service-Model

UML (Unified Modeling Language)
 - Class Diagram

Using Resdis, Creating Utils
Creating gallery.js , Filepath create,
validator.js create

- May5 -

Senior Developer
    -Database Design
    -Database Schema (Create)
    -Database Manupulation
    -Export Functions
        module.export = {insert}
    -Post(insert,update,delete,get,paginate)

Junior Developer (junior cannot touch database)
    app => Route => Controller => Services => hybernate => model

Flow Layout
(app) => <Route> => [Validator] -> fail => (Response Error End of code Excution)
                                -> Pass =>  [Controller] = [Services] => (Database)
    
Create facade.js
Register
    -name
    -phone
    -password

- May6 -

Login
    -name
    -password
Authorization
GetUser By Id
GetALL user

May11
Create Category

May14
Create Tags
Modify the code to look like professional code like a pro coder how they validate authentication and authorization using "try catch"
Error Handling