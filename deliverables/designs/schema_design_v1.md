Schema Design

Bold = primary key

Underline = foreign key

User(userID, email, password, facebookID, active, isVerified, creationDate)

Community(communityID, name)

Event(eventID, name, startDate, startTime, endDate, endTime, geocoordinate, description, ecmID, active, creationDate)

EventCommunityMap(ecmID, communityID)

UserCommunityMap(ucmID, userID, communityID, creationDate)
