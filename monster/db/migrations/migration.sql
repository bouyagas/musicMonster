\c monster_dev

drop table if exists records;

CREATE TABLE records (
  id VARCHAR(64) PRIMARY KEY,
  artist VARCHAR(255) NOT NULL,
  image TEXT,
  song VARCHAR(255) NOT NULL,
  comments TEXT DEFAULT "favorite track"
);

