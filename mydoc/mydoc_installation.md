---
title: Install
sidebar: mydoc_sidebar
permalink: /installation-standard-edition
---

The fastest way to use bap-node-microframework is cloning the official repository of the standard edition:

```bash
git clone https://github.com/bap-node-microframework/standard-edition.git
cd standard-edition
rm README.md
rm -r .git
git init
```

If you use Docker, you can get the application running with a simple

```bash
docker-compose up
```

This command will start a MongoDB instance and a node server listening on http://localhost:3000.

If you want to check if the application works, go to [http://localhost:3000](http://localhost:3000).

After that, you can test the generation of a response which uses a request parameter going to [http://localhost:3000/hello/yourName](http://localhost:3000/hello/yourName).

And you can also test CRUD operations on the MongoDB instance with the following commands:

```bash
# Get all friends
curl localhost:3000/friends
# Add mark as a friend
curl -H "Content-Type: application/json" -X POST -d '{"name":"mark", "email": "mark@test.com"}' http://localhost:3000/friends
# Change mark's name and email
curl -H "Content-Type: application/json" -X PUT -d '{"name":"john", "email": "john@test.com"}' http://localhost:3000/friends/mark
# Remove john from the friends list
curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/friends/john
```

If you want to know how to create this application, go to [the tutorial](tutorial-standard-edition-features).
