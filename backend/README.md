# Procedimiento realizado para instalar la Express App generator
*instalar node.js (ver documentacion en sitio web)

>> sudo npm install -g express-generator

>> express --view=pug myapp
>> cd myapp
>> npm install

--> myapp: es el nombre que le damos a la nuestra aplicacion

# Sudo: 
Using sudo with a command in Linux/UNIX generally elevates your permissions to superuser levels. In Windows, the superuser account is usually called 'Administrator.' In Linux/Unix the superuser account is generally named 'root'.

The root user has permission to access, modify or delete almost any file on your computer. Normal user accounts can access, modify or delete many fewer files. The restrictions on a normal account protect your computer from unauthorized or harmful programs or users. Some processes require you to perform actions on files or folders you don't normally have permissions to access. Installing a program that everyone can access is one of these actions.

In your case, running the installation command with sudo gives you the permissions of the superuser, and allows you to modify files that your normal user doesn't have permission to modify. In the example above, the user doesn't have permission to create the file ___coffee-script.npm in the directory /usr/local/lib/node_modules/. The root user does, and so the installation is successful.

That doesn't mean you should run everything with Sudo. You should only use sudo, or log in as the root user, when you absolutely have to.