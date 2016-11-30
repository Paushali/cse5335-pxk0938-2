#Visit https://cse5335-pxk0938-2.herokuapp.com/ for the project website
##(Used node.js for this project)
## ***Please note that the animation happens after around 10-15 seconds while the rows start disappearing (fading out) after 20 records apart from the table entry.****

##a. What SQL or NOSQL database did you choose and why?
I used MongoDB (connected through Heroku mLabs)  as a part of learning experience for this project. I had never used this database before. 
Therefore, this database helped me understand the way the NoSQL databases work.

##b. What aspect of the implementation did you find easy, if any, and why?
I found the connection to database easy due to my previous experience in db connections.

##c. What aspect of the implementation did you find hard, if any, and why?
I had difficulty in getting more than one record onto the webpage at once. This was due to the fact that though there is a loop implemented in the frontend, the api call function had its DB closed after each iteration which caused the entries not to get retrieved from db.

##d. If you were to use these technologies professionally, what would be your biggest concern?
My biggest concern would be with the deployment. Though I might be able to do it quite easily after practice, changing specific configurations is necessary (In my case I had to tweak the package.json file a bit to get the heroku app up and running).

