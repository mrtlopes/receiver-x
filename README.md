# What's this
Dummy monorepo to wire several technologies.
Main goal is to create an efficient, scallable and reliable system to store submited messages under high traffic. 

# Why
This is just a personal project to continue to be hands on and up to date

# This Monorepo includes

- Awesomeapi - REST API done in TypeScript to produce messages to Rabbit 
- Awesomeworker - The consumer of the messages done in TypeScript and the one responsible to store it in the persistent storage  

**Technologies:**
- RabbitMQ - The message broker
- MySQL - The database to be our persistent storage 

# Architecture/Concept
- [x] API to receive data [awesomeapi](awesomeapi)
- [x] Queue messages
- [ ] Worker to consume those messages 
- [ ] Persistent storage of those messages
