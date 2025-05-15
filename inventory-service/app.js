// import express from "express"  // new

const express = require("express")  // old
const {Eureka} = require('eureka-js-client')

// const Eureka = require('eureka-js-client').Eureka

const port = 3000
const app = express()

const router = express.Router()

router.get("/api/v1/inventory", (req, res) => {
    res.json({
        items: ["item 1", "item 2", "item 3"]
    })
})

//  http://localhost:3000/inventory-service/api/v1/inventory

app.use("/inventory-service", router)

const client = new Eureka({
    instance: {
        app: 'INVENTORY-SERVICE',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            $: port,
            "@enabled": 'true'
        },
        vipAddress: 'inventory-service',
        dataCenterInfo: {
            "@class": 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    },
});

app.listen(port, () => {
    console.log("Server Started")
    console.log(`at port: ${port}`)

    client.start((err) => {
        if (err) {
            console.log(err)
            console.log("fail to eureka registration")
        } else {
            console.log("registered to eureka")
        }
    });
})