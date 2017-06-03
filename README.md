# Node.js App

This is an example node.js http-server using the sequalize ORM.

I've tested this in a kuberentes stack with a cockroack-db backend.

Aim is to learn how these technologies interact, specifically to demo scaling
and resiliency in a kubernetes cluster, at both app and db layer.

At the moment requests to '/' insert database rows to a user table, then
read them back out. Rows are deleted when the row-count goes above 50 entries.

# Useful links
* https://nodejs.org/en/ 
* http://docs.sequelizejs.com/
* https://github.com/TheNewNormal/kube-solo-osx
* https://github.com/kubernetes/kubernetes/tree/master/examples/cockroachdb
* https://github.com/sequelize/express-example
* https://groundberry.github.io/development/2016/11/04/build-your-node-app-with-express-and-sequelize.html

## Prerequisites
A database install - configure environemt settings below.

## Getting Started
```
docker pull nabadger/nodejs-app
```

## Database connection details

Database info. needs to be supplied via the environment.

 env:
  - name: DB_HOST
  - name: DB_PORT
  - name: DB_NAME
  - name: DB_USER
  - name: DB_PASSWD
```
