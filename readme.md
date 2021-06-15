Technologies Used
-----------------------
1. EJS (front-end)
2. NodeJS
3. ExpressJs (Creating server)
4. axios (requesting API)
5. Beeceptor (Making mock API)
6. Bootstrap 4

Tools Required to run my app
---------------
- NodeJS framework

How To run my application
------------------------
1. Clone this repository using git clone.
2. After cloning just move to the directory of my project in your system and run npm install command.

Instructions
--------------
1. You can't see the list of users without logging in or registering. I have used session for login.
2. After logging in you can see the a user with next & previous button below the card view.
3. Click view more button to know more details of each users.
4. You can forward and backward using arrow buttons.

Completed the following features
------------------------------------
1. Created a mock API using beeceptor.
2. Login and register service created (using sessions).
3. List of users displayed in UI.
4. When a user clicks on a particular record view more button, he should be able to see more details of that user.
5. While showing the details provide an option to view details of the next and previous user in the list. I provided
   arrows for for moving.
6. Final source code is shared in GitHUB.
7. App deployed in Heroku.

Directories and files Details of my app
------------------------
1. index.js - main server controller.
2. public folder
      - Css file
      - images and some static files.
3. views folder
      - Frontend UI and template driven files

Important Notes
-----
1. I have included my temp.json file which contains the list of users.
2. Most importantly we can only make 50 request/day using this beeceptor API link. So if users not displayed, there
   429 Status code error (Too many requests).

Deployed Link
---------
      https://grootan-coding-task.herokuapp.com/

- Uthaya Sankar N

