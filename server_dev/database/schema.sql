CREATE DATABASE IF NOT EXISTS poppin_schema;
USE poppin_schema;


/* --- Users --- */

CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  creation_timestamp TEXT  /* TODO: Change to timestamp */
);


CREATE TABLE IF NOT EXISTS login_credential (
  user_id INTEGER PRIMARY KEY,
  username varchar(32) UNIQUE NOT NULL,
  password varchar(128) NOT NULL,

  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS third_party_credential (
  user_id INTEGER NOT NULL,
  provider_id varchar(32) NOT NULL,
  
  PRIMARY KEY(user_id, provider_id),
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);


/* --- Communities --- */

CREATE TABLE IF NOT EXISTS community (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);


/* --- Events --- */

CREATE TABLE IF NOT EXISTS event (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  start_date TEXT NOT NULL, /* TODO: Change to timestamp */
  end_date TEXT NOT NULL,  /* TODO: Change to timestamp */
  longitude Decimal(9,6) NOT NULL,
  latitude Decimal(9,6) NOT NULL,
  description TEXT NOT NULL,
  is_active INTEGER NOT NULL,
  creation_timestamp TEXT  /* TODO: Change to timestamp */
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