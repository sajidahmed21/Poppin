# Poppin

Team 16
## Iteration 02 - Review & Retrospect

 * __When__: November 16, 2016
 * __Where__: Google Hangouts

## Process - Reflection

__Decisions that proved to be pretty well include__:


* Introducing a professional project management tool like [Waffle](https://waffle.io) turned out pretty helpful. It gave us clear [visibility of progress](iteration2-artifacts/waffle/Kanban-board.PNG), as well as [metrics](iteration2-artifacts/waffle/Throughput-chart.PNG) that strongly reflect our productivity.

* Creating [automated tests](../server_dev/test) for RESTful APIs helped us to save time - both in terms of test execution and debugging.

* Giving consideration to individual preferences and skill sets while choosing the technology stack turned out to be very conducive to productivity. For instance, choosing [Cordova](https://cordova.apache.org) (over native Android) for front end development has allowed our front end developers to be very efficient (as reflected by the completed tasks in the [Kanban chart](iteration2-artifacts/waffle/Front-end-Kanban-Board.PNG), the [demo application](iteration2-artifacts/DemoBuild.apk), and the [video](iteration2-artifacts/video.md)).

__Decisions that did not turn out as well as we hoped:__

* Defining individual responsibilities and tasks in terms of an entire feature of the application did not turn out very well, since some of our team members were not familiar with the full set of technologies required to implement a complete feature. As reflected by the [failing test results](iteration2-artifacts/REST-API-real-data-test-results.txt), we were not able to complete the implementation of our primary RESTful APIs since they are yet to be integrated with the database server.

* Not dedicating enough time towards video creation and editing turned out to be very stressful near the end of our iteration (as reflected by the [*last minute* upload](https://github.com/csc301-fall-2016/project-team-16/commit/c5c66132f00fe320dafd27a3aca3a0d84bad6e2c) of our demo video). Although we are very satisfied with the video we have created, it is worthwhile to note that we greatly underestimated the required effort for creating a video that meets the expected standard.

* Finally, the idea of conducting all of our meetings online didn't turn out very well. Although we had decided upon this based on everyone's convenience, it turned out that some of the issues were not easy to address in the absence of face-to-face communication.


__We are planning to make the following changes to our process:__

* Based on our *not-so-good* experience with our way of defining tasks (as addressed above), going forward we plan to define tasks in terms of implementing __smaller modules__ and / or __parts__ of larger components, and assign them based on individual skill sets and preferences.

* In view of our stressful experience of creating the demo video, going forward not just into the next iteration, but into any future endeavours, we plan to dedicate __much more__ time towards completing tasks that involve learning / self-education.

* Lastly, we certainly look forward towards hosting some in-person and face-to-face meetings to address any issues that demand more direct assistance / communication.


## Product - Review

__Goals/tasks that were met / completed:__

* All primary screens in our front-end application were [implemented](iteration2-artifacts/screenshots) as planned:
 
 * [*Discover*](iteration2-artifacts/screenshots/Discover.jpg) page
 * [*Create Event*](iteration2-artifacts/screenshots/Create_Event.jpg) page
 * [*Event Details*](iteration2-artifacts/screenshots/Event.jpg) page
 * [*Communities*](iteration2-artifacts/screenshots/Communities.jpg) page

  In addition we were able to implement the following screens / UI components, which were not part of our original iteration plan:
  
  * [Sliding Navigation Menu](iteration2-artifacts/screenshots/Menu.jpg)
  * [Notifications panel](iteration2-artifacts/screenshots/Notifications.jpg)
  * [Sign Up page](iteration2-artifacts/screenshots/Sign_Up.jpg)
  

* All of our primary RESTful APIs have been implemented using dummy data. The [test results](iteration2-artifacts/REST-API-Tests/REST-API-mock-data-test-results.txt) from the [first set of test cases](../server_dev/test/REST-API-with-mock-data.json) indicate this.

* A working and stable [application](iteration2-artifacts/DemoBuild.apk) has been developed with proper navigation across the different screens.

* A well-polished [demo video](iteration2-artifacts/video.md) has been created which meets all specifications listed in our iteration plan document.

__Goals/tasks that were planned but not met / completed:__

* RESTful APIs have not been integrated with database server since connectivity between our application server and database has not been established yet. This is primarily because some of our team members are new to databases, and therefore required some extra time to get comfortable with implementing such components. As a result, we have not been able to [test](../server_dev/test/) our RESTful APIs with real data.

__Going into the next iteration, our main insights are__:

* Working on establishing connectivity between application server and database. This is currently the highest priority since it is critical for testing our app out in the real world, and gaining some extra motivation for the team demo in December.

* Implementing the *event chat* feature that will allow users interested in attending an *event* to chat amongst each other.

* Thoroughly testing both front and back end in order to ensure smooth functioning of our application and (hopefully) pull out a great demo!