# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: unfortuantly I am unable to answer this question at the moment, I will get back to you with that answer.

Researched answer: unfortuantly I am unable to answer this question at the moment, I will get back to you with that answer.

2. Which RESTful routes must always be passed params? Why?

Your answer: Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

Researched answer: Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

3. Name three rails generator commands. What is created by each?

Your answer: That would be console, server, generate.
The console command lets you interact with your Rails application from the command line.
The server command launches a small web server named WEBrick which comes bundled with Ruby.
The generate command uses templates to create a whole lot of things.

Researched answer: The console command lets you interact with your Rails application from the command line.
The server command launches a small web server named WEBrick which comes bundled with Ruby.
The generate command uses templates to create a whole lot of things.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -

<!-- this is an HTTP get request to the /student -->

action: "POST" location: /students -

<!-- this code start to defines the location variable and sets its value to /student  -->

action: "GET" location: /students/new

<!--   this code is for a route to display the requestion location for /students/new -->

action: "GET" location: /students/2

<!-- this code is a GET request to the server -->

action: "GET" location: /students/2/edit

<!--this code displays the requests location to a made change  -->

action: "PATCH" location: /students/2

<!--  this code is sends a "PATCH" request to the url by defining theaction variable and seeting to the PATCH-->

action: "DELETE" location: /students/2

<!-- this code send a delete request to the location: students/2 -->

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to start up my computer, so that I can see my work for the day

1. As a user, I want to review the last hour of yesterdays work so that it doesn't conflit with today's work

1. As a user, I want to check my emails for the start of the day

1. As a user, I want to create a mini time frame check list for today's task.

1. As a user, I want to reach out to make sure I am taking a break from my computer screen.

1. As a user, I want to check up with my co-workers to see if they may need assistance with their work.

1. As a user, I want to make sure I am on track with my workflow

1. As a user, I want to reach out to my supervisors and leadership regarding workflow and other work topics

1. As a user, I want to make sure I am taking my lunch, to re-enigerize my body to continue for the rest of the day.

1. As a user, I want to review my check-list to make sure everything has been completed before I end my day or shut down my computer.
