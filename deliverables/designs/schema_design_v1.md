# Schema Design 
###(Rough work, changes to design to be made)

**Bold** = primary key

_Italic_ = foreign key

User(**user_id**, email, password, facebook_id, active, is_verified, creation_date)

Community(**community_id**, name)

Event(**event_id**, name, start_date,  end_date, longitude, latitude, description, active, creation_date)

EventCommunityMap(**_event_id_**, _community_id_)

UserCommunityMap(**_user_id_**, _community_id_, creation_date)


User(**user_id**, email, password, facebook_id, active, is_verified, creation_date)

A tuple in this relation represents the user’s login information to the app. The _user_id_ is the unique id of the user (e.g. 4) and is a unique integer. The _email_ and _password_ is the email of the user (e.g. "email@email.com") and the password of the user (e.g. “password”) and are strings no more than 255 characters long. The _facebook_id_ is an id that will reference a user to their Facebook account so that the app can connect to their Facebook. The _active_ field is the flag that enables or disables a user account and is either ‘Y’ or ‘N’. The _is_verified_ field is the flag that determines if a user account is verified through their email and is either ‘Y’ or ‘N’. The _creation_date_ is a date and time string showing the creation date of the user account (e.g. “2016-10-10 18:00:39”) in the format YYYY-MM-DD HH:MM:SS.

Community(**community_id**, name)

A tuple in this relation represents all the communities available in our app whether they are default communities or user created communities. The _community_id_ is the unique id of the community (e.g. 12) and is an integer. The _name_ is the name of the category (e.g. “Hockey”) and is a string no more than 255 characters long.

Event(**event_id**, name, start_date,  end_date, longitude, latitude, description, active, creation_date)

A tuple in this relation represents all the past and present events that have been created. The _event_id_ is the unique id of the event (e.g. 111) and is an integer. The _start_date_ and _end_date_ are the start date and time, and the end date and time of the event respectively which will be a string (e.g. “2016-10-10 18:00:39”) in the format YYYY-MM-DD HH:MM:SS. The _longitude_ and _latitude_ field will be the location of the event stored as a double (e.g. 43.869464). The _description_ of the event will display any additional information about the event and is a string no more than 2048 characters long. The _active_ field is the flag that determines if the event is still active and is either ‘Y’ or ‘N’. The _creation_date_ is a date and time string showing the creation date of the event (e.g. “2016-10-10 18:00:39”) in the format YYYY-MM-DD HH:MM:SS.

EventCommunityMap(**_event_id_**, _community_id_)

A tuple in this relation represents the mapping of an event to its communities. The _event_id_ is the integer id of the event. The _community_id_ is the integer id of the community that is being mapped. This will allow us to find all the communities that are tagged to an event.


UserCommunityMap(**_user_id_**, _community_id_, creation_date)

A tuple in this relation represents the mapping of a user to its communities. The _user_id_ is the integer id of the user that has joined this community. The _community_id_ is the integer id of the community that is being mapped to the user. The _creation_date_ is a date and time string showing the creation date of the event (e.g. “2016-10-10 18:00:39”) in the format YYYY-MM-DD HH:MM:SS.
