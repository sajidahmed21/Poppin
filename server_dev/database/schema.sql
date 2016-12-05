CREATE SCHEMA IF NOT EXISTS poppin_schema
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_unicode_ci;
USE poppin_schema;

SET default_storage_engine=InnoDB;


/* --- Users --- */

/*
	user

	id: unique id for user
	first_name: first name of user, i.e. what to address the user as
	last_name: last name of the user (optional since names may come from 3rd party auth protocols)
	email: used for communication and in conjunction with login_credential
	date_created: datetime referring to date account was created
*/
CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/*
	login_credential

	Log in with email + password.

	user_id: references user(id)
	login_attempts: number of failed consecutive login attempts (inherent max at 127)
	password: hashed + salted password
	recovery_token: randomly generated (when needed) token to be used for password recovery
*/
CREATE TABLE IF NOT EXISTS login_credential (
  user_id INT PRIMARY KEY,
  login_attempts TINYINT NOT NULL DEFAULT 0,
  password VARCHAR(255) NOT NULL,
  recovery_token VARCHAR(255) NULL,

  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);

/*
	third_party_credential

	user_id: user id 3rd party credential is associated with
	provider_id: google/facebook/etc...
	token: token associated with provider
*/
CREATE TABLE IF NOT EXISTS third_party_credential (
  user_id INT NOT NULL,
  provider_id VARCHAR(255) NOT NULL,
  token VARCHAR(255) NOT NULL,

  PRIMARY KEY(user_id, provider_id),
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);


/* --- Communities --- */

/*
	community

	Communities represent interests groups which users subscribe to,
	and events are associated with.

	id: unique community id
	name: unique community name; should be kept short
	description: short (optional) description explaining the community
*/
CREATE TABLE IF NOT EXISTS community (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NULL
);


/* --- Events --- */

/*
	event

	id: event id
	name: short event name
	start_date: start datetime of event
	end_date: end datetime of event
	longitude: longitude of event location
	latitude: latitude of event location
	description: description of event
	is_active: TODO
	date_created: datetimeevent was created
*/
CREATE TABLE IF NOT EXISTS event (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  longitude FLOAT(10,6) NOT NULL,
  latitude FLOAT(10,6) NOT NULL,
  is_active TINYINT(1) NOT NULL,
  date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);


/* --- Mappings for events and users with communities --- */

CREATE TABLE IF NOT EXISTS event_community_map (
  event_id INT NOT NULL,
  community_id INT NOT NULL,

  PRIMARY KEY(event_id, community_id),
  FOREIGN KEY(event_id) REFERENCES event(id) ON DELETE CASCADE,
  FOREIGN KEY(community_id) REFERENCES community(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_community_map (
  user_id INT NOT NULL,
  community_id INT NOT NULL,

  PRIMARY KEY(user_id, community_id),
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY(community_id) REFERENCES community(id) ON DELETE CASCADE
);

/* --- Notification --- */
CREATE TABLE IF NOT EXISTS notification (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
	link VARCHAR(255) NULL,
    FOREIGN KEY (`user_id`) REFERENCES user(`id`)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE=InnoDB;
