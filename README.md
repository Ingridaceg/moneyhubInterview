# Moneyhub Tech Test - Investments and Holdings

At Moneyhub we use microservices to partition and separate the concerns of the codebase. In this exercise we have given you an example `admin` service and some accompanying services to work with. In this case the admin service backs a front end admin tool allowing non-technical staff to interact with data.

A request for a new admin feature has been received

## Questions

- How to run any additional scripts or tests you may have added
  - npm run test
- Relating to the task please add answers to the following questions;
  #####  How might you make this service more secure?
     1. Adding authenticated endpoints (use strong auth)
     2. Use Https
     3. Validate inputs to avoid code injection
     4. Validate rate limits
  #####  How would you make this solution scale to millions of records?
    We can use multiple service running to generate different parts and at the end an orchestrator to get the final response
  #####  What else would you have liked to improve given more time?
  - Convert the whole project in a typescript project
  - Test Cover for all the code
  - Include all the linters and prettier to make code understandable
  - Include integration tests
  - Include actions to run the tests on Git
  - Add security
  - Deployment Automation 

### New routes

Admin - localhost:8083
- `/investment-csv/:id?` get csv by id, the id field is optional if you don't send it the csv will be generated for all.

### Existing routes
We have provided a series of routes

Investments - localhost:8081
- `/investments` get all investments
- `/investments/:id` get an investment record by id
- `/investments/export` expects a csv formatted text input as the body

Financial Companies - localhost:8082
- `/companies` get all companies details
- `/companies/:id` get company by id

Admin - localhost:8083
- `/investments/:id` get an investment record by id
