# HN Feed App
This is a app made for the Reign.cl test

### Details: 

Once an hour, the server app makes a call to the HN Algolia API, receiving the recently posted articles about Node.js on Hacker News:

API link: http://hn.algolia.com/api/v1/search_by_date?query=nodejs

The server app inserts the data from the API into a MongoDB database and then gives a endpoint which the client use to retrieve and to show the data.

In our client, we can see the articles order by date (newer first) and also the user can use de delete button to delete an individiual post from his view. When a post is deleted, the article not reappear. This use localStorage to define a logic, so when the user delete a post in his view it keeps deleted even if the app is restarted. I use this approach instead of interact with the database because I think multiples users can access the app and when one user deleted a post from his view that not need to be deleted in another user view, just in the user "session".

# Stack

* Node.js 15.9.0
* Nestjs 7.5.5
* MongoDB 4.4.0

# How to run it?

## Prerequisites

* Just Docker for running app inside containers. 

## Installing


### 1. Clone the repo

```
git clone https://gitlab.com/Jucester/hn-feed.git
```

### 2. Run this on the cloned directory

```
docker-compose build
```

### 3. After the building finishes, run:

```
docker-compose up
```

The app will be running at [http://localhost:5000](http://localhost:5000), and the API will be at [http://localhost:4000](http://localhost:4000).

You can modify the docker-compose.yml to change the ports. 

