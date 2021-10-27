# Gaming Innovation Group

Development of Gaming Innovation Group challenge

## Run challenge

Message broker used: RabbitMQ.

Follow the steps to run the application:
  
  - Inside root folder (GIG), open gig-microservice1 and run npm install 
  - Repeat the the same process for gig-microservice2.

You must have docker installed to execute the next steps:
  - Inside root folder, run "docker-compose up" to initialize both microservices and rabbitmq
  - Open http://localhost:3000/
  - Write your name in name field and a message in message field and click "Send"

### Run tests

  - Inside gig-microservice1 or gig-microservice2 folder, run "npm test"