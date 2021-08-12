const express = require('express')
const bodyParser = require('body-parser')
const {WebhookClient} = require('dialogflow-fulfillment');

const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 3000 //run on localhost 3000


app.post('/dialogflow-fulfillment', (request, response) => {
    dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

const dialogflowFulfillment = (request, response) =>{
    //this function takes in request and response

    const agent = new WebhookClient({request, response})

    function sayHello(agent){
        agent.add("hi coming from heroku!!!")
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
    agent.handleRequest(intentMap)

}