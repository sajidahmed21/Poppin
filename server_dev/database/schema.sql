CREATE DATABASE IF NOT EXISTS poppin_schema;
USE poppin_schema;


/* --- Users --- */

/*
	user
	
	id: unique id for user, in sqlite it's an alias for ROWID
	name: name/nickname/screen name of user, i.e. what to address the user as
	email: used for communication and in conjunction with login_credential
	date_created: unix timestamp referring to date account was created
*/
CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  date_created INTEGER(4) NOT NULL DEFAULT (strftime('%s', 'now'))
);

/*
	login_credential
	
	Users either log in with their email + password,
	or by using one of the other authentication protocols whose
	token is stored in login_credential.
	
	user_id: references user(id)
	login_attempts: number of failed consecutive login attempts (inherent max at 127)
	password: hashed + salted password
	recovery_token: randomly generated (when needed) token to be used for password recovery
*/
CREATE TABLE IF NOT EXISTS login_credential (
  user_id INTEGER PRIMARY KEY,
  login_attempts INTEGER(1) NOT NULL DEFAULT 0,
  password VARCHAR(255) NOT NULL,
  recovery_token VARCHAR(255) NULL,

  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);

/*
	third_party_credential
	
	user_id: TODO
	provider_id: TODO
*/
CREATE TABLE IF NOT EXISTS third_party_credential (
  user_id INTEGER NOT NULL,
  provider_id VARCHAR(32) NOT NULL,
  
  PRIMARY KEY(user_id, provider_id),
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);


/* --- Communities --- */

/*
	community
	
	Communities represent interests groups which users subscribe to,
	and events are associated with.
	
	id: unique community id (alias for ROWID)
	name: unique community name; should be kept short
	description: short (optional) description explaining the community
*/
CREATE TABLE IF NOT EXISTS community (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NULL
);


/* --- Events --- */

/*
	event
	
	id: event id
	name: short event name
	start_date: start datetime of event (unix timestamp)
	end_date: end datetime of event (unix timestamp)
	longitude: longitude of event location
	latitude: latitude of event location
	description: description of event
	is_active: TODO
	date_created: datetime (unix timestamp) event was created
*/
CREATE TABLE IF NOT EXISTS event (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  start_date INTEGER(4) NOT NULL,
  end_date INTEGER(4) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  latitude DECIMAL(9,6) NOT NULL,
  is_active INTEGER(1) NOT NULL,
  date_created INTEGER(4)
);


/* --- Mappings for events and users with communities --- */

CREATE TABLE IF NOT EXISTS event_community_map (
  event_id INTEGER NOT NULL,
  community_id INTEGER NOT NULL,

  PRIMARY KEY(event_id, community_id),
  FOREIGN KEY(event_id) REFERENCES event(id) ON DELETE CASCADE,
  FOREIGN KEY(community_id) REFERENCES community(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_community_map (
  user_id INTEGER NOT NULL,
  community_id INTEGER NOT NULL,

  PRIMARY KEY(user_id, community_id),
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY(community_id) REFERENCES community(id) ON DELETE CASCADE
);