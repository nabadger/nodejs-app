# Node.js / Cockroachdb / Kuberntes example

This is an example node.js http-server using the sequalize ORM talking to a 
cockroach-db backend, within a kubernetes cluster.

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
A kubernetes cluster! I developed this against both minikube and kube-solo.

A [cockroachdb install](https://github.com/kubernetes/kubernetes/tree/master/examples/cockroachdb)

I used this, and created an empty database 'kubetest' and a username 'kubetest'.

## Getting Started

Setup your kubernetes cluster and deploy cockroach-db.

For this app, use docker to build the image:

```
docker build -t simple-node-server:v1 .
```
Update kubernetes/deployment.yaml and configure your database connection info.
These are passed into the container as environment vars.

Deploy into kubernetes cluster:
```
kubectl create -f kubernetes/deployment.yaml
kubectl create -f kubernetes/service.yaml
```

Now get the assigned NodePort:

```
kubectl describe svc/simple-node-server
```

You should be able to browse to this.

### Helper scripts 

There's a couple of helper scripts [here](https://github.com/nabadger/simple-kube-stack/tree/master/scripts).

Used for building the docker image and applying any kubernetes changes to the deployment or service scripts.

# TODO
* Test versioning / rolling-updates / rollback
* Set replica's to 3
* Helper script to kill pods and check resiliency
* Tidy up project structure
