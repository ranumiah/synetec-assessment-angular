# Synetec technical test

Welcome to Synetec technical test. This is an angular application displaying a list of cities with a description. We will ask you to implement a few features as the engineer who was supposed to implement them is on annual leave and this is an urgent requirement. Fortunately before leaving the engineer had the time to create the skeleton of the application which makes your life a bit easier.

## Set up the environment

1. Clone this repository locally
2. Open the solution with your favourite IDE (we have used and tested using VS Code)
3. Run npm install to make sure you have all the dependencies set up
4. Run `ng serve -o` and make sure the app is running.

## The tasks

You are asked to implement as much tasks as possible in the following list. Don't panic if you run out of time, completing 2 tasks following good practices is better than completing the entire test with poor coding standards

1. The html for the cities list is boring and static, link it to the list of cities from the component
2. The cities list is empty though the table is still displayed, find a way to display a message to the user when there is no city to display
3. The backend engineers have developed an API that provides you with a list of cities, implement the method in the service that will get all the cities and fetch the result in the cities list of the component
4. You have probably noticed that the delete button doesn't do anything, implement that feature