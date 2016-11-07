# Poppin
Team 16

## Iteration 02

 * Start date: October 30, 2016
 * End date: November 14, 2016

## Process

#### Roles & Responsibilities

__Noah (Front-end Developer - UI and RESTful API Integration)__: 

* Setting up the Cordova project for client-side development.

* Developing the following screens, which exhibit the primary features of our application.

 * _Discover_ page - which shows both a list and a map view of nearby events. This will be the home page of the application.

 * Sign in / Sign up page

 * Event Details page - which shows complete details about an event. 

* Integrating core features in the above screens with RESTful APIs



__Anshay (Front-end Developer - UI)__:

* Setting up dev environment on local machine and becoming familiar with UI development using Cordova.

* Developing the following screen:

   * Create Event - which allows the user to create an event. Inputs include the same set of attributes as in the _Event Details_ page listed above.

__Sajid (Back-end Developer and Facilitator)__:

 * Setting up the server side project. This includes:
   * Adding the necessary dependencies
   * Creating separate components for user-related, event-related, and community-related web APIs.
   * Setting up connectivity with database server and creating SQL scripts based on the [schema design](designs/schema_design_v1.md).

 * Documenting RESTful APIs in a separate folder in Git repository

 * Implementing the SigIn / SignUp RESTful APIs

 * Documenting meeting discussions through taking proper [meeting notes](https://github.com/csc301-fall-2016/project-team-16/tree/master/meeting%20notes)

__Darshan (Back-end Developer - Business Logic and Computation)__:

 * Implementing the GetEvents RESTful API, initially using mock data (with no database connectivity), and later on using actual data stored in the database.

__Kenneth (Backend Developer - Database Engineer)__:

 * Implementing the GetEventDetals RESTful API, initially using mock data (with no database connectivity), and later on using actual data from the database.

 * Creating the database module which will wrap all database operations in a single component.

__Andy (Backend Developer - Business Logic and Computation)__:

 * Implementing the CreateEvent RESTful API, intially using mock data (with no database connectivity), and later on using actual data from the database.


#### Events
In order to ensure smooth progress, we plan to meet often and on a regular basis. Following is our meeting schedule and agenda. All meetings will take place online on Google Hangouts.

* [Sunday - October 30, 2016](https://github.com/csc301-fall-2016/project-team-16/blob/master/meeting%20notes/Oct-30-2016.md)
       * Create and finalize a complete iteration plan

* Wednesday - November 2, 2016
      * Ensure Sign In and Sign Up screens are implemented.
      * Ensure server side project is set up and everyone can run the server on their local machine.
* Saturday - November 5, 2016
     * Verify whether _Discover_ (i.e. home) screen has been implemented.
     * Verify whether SignUp, CreateEvent, GetNearbyEvents, and GetEventDetails RESTful APIs are implemented properly using mock data.
     * Discuss any changes that need to be made to the UI or the RESTful APIs.
* Tuesday - November 8, 2016
       * Ensure any pending or re-assigned tasks from last meeting has been completed.
       * Ensure the remaining screens in the client application has been implemented.
* Friday - November 11, 2016
      * Analyze the demo video that has been created. Identify how it can be improved.

* Monday - November 14, 2016
    * Identify and agree upon the a final version of the demo video that is to be submitted.
    * Review performance, achievements, and identify areas of improvement. Document these in the iteration review file.

#### Artifacts

Please describe the artifacts that you will produce in order to organize and keep track of your team's progress.       
For example:

 * To-do lists, burndown chart, schedule, etc.
 * If you include charts/diagrams, make sure to explain what they represent.
 * If you're maintaining a to-do list, make sure to mention which tool you're using, how you are prioritizing items and how items get assigned to team members.