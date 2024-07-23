# Elevation Navigation System
This system queries from the user:
<ul>
    <li> Starting Address
    <li> Ending Address
    <li> Elevation Preference
    <li> Maximum or Minimum Elevation
</ul>
and calculates the path based on the inputs given.
The path is then plotted on the map in real-time. 

## Frontend repo
https://github.com/OMP-49/elena-frontend/edit/master/README.md

## Available Scripts

In the project directory, you can run:

### `npm install` 
Installs all the necessary packages mentioned in the package.json file

### `npm install --force`
Installs forcefully in case of any version conflict between local and global node version. 

### `npm start`

Runs the backend server for the application (http://localhost:8000)

### `npm test`

Launches the test runner in the terminal.

## Steps to run the backend server
Follow these steps in order to run the backend server locally. 

1. Clone the repository using the following git command <br> `git clone git@bitbucket.org:elena-apo/elena-backend.git`
2. Once cloned, change directory into the **elena-backend** folder and opend the terminal and run the command `npm install` to install the necessary dependencies for the server to run. <br>
Note that **node_modules** directory should have been created.
If there's any issue with installing the dependencies due to differences in the node version required and the node running on the local system, use `npm install --force` to install dependencies. 
4. Run the command `npm start` to start the server. Once it starts, you should be able to see the logs <br> 
    map.model.js info: Request received to generateGraph <br> 
    index.js info: Server Listening on 8000<br> 
    map.model.js info: Request received to getElevations<br> 
    map.model.js info: Data loaded<br> 

5. For testing, run the command `npm test` from terminal to run the test cases.
