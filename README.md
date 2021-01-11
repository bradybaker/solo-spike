# The Logo Generator Solo-Spike!

## Description

For this web app I chose to practice using the Autocomplete component from Material-UI/Lab with an API from clearbit.com. These tools allow user to type in a company name and render the name of the company and it's logo on the DOM. This spike was a little more challenging than I had initially thought it would be. This was mostly due to the functionality of the Autocomplete component. It's usage is intended for predetermined data, not dynamically like I intended. I used optional chaining in the component to get around this. Optional chaining basically says to wait for a null or undefined variable to be defined. Useful for async work and keeping your code running. This allowed me to generate search results from the API and send them back to the Autocomplete component for the user to see as they type.

I also took a deeper dive into the Material-UI docs since front-end design is one of my favorite parts of development. I practiced with a theme.js file to change prop types and override design with CSS defined in the specific component's API. I am very excited to continue how to elevate my future apps with the vast library of Mui. This was a really fun weekend! 


## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation 

1. Open Postico
2. Copy code from data.sql into your db
3. run `npm install`
4. In two different terminals run `npm run server` and `npm run client`
5. Web app is viewable on localhost:3000

## Built With 

- React
- Redux
- Redux-Saga
- SQL
- Axios
- Material-UI core/icons/lab



