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

# TODO

* Conifigure db-connection details via deployment.yaml
* Tidy up project structure
