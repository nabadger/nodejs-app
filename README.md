# Node.js / Cockroachdb

This is an example node.js http-server using the sequalize ORM talking to a 
cockroach-db backend

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
A cockroachdb install
Setup an empty database 'kubetest' and a username 'kubetest'.

## Getting Started
```
docker pull nabadger/nodejs-app
```

## Database connection details

Database info. needs to besupplied via the environment.

 env:
  - name: DB_HOST
    value: "cockroachdb-public"
  - name: DB_PORT
    value: "26257"
  - name: DB_NAME
    value: "kubetest"
  - name: DB_USER
    value: "kubetest"
  - name: DB_PASSWD
    value: ""
```
