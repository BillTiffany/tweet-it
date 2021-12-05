DROP TABLE tweets;

CREATE TABLE tweets (
id SERIAL PRIMARY key,
tweet varchar
);

--THIS IS WHERE I WOULD ALTER MY TABLES (FOREIGN KEYS,ETC.)

INSERT INTO tweets (tweet) VALUES ('MY NAME IS, WHAT?');
INSERT INTO tweets (tweet) VALUES ('MY NAME IS, Who?');
INSERT INTO tweets (tweet) VALUES ('MY NAME IS, Jigga Jigga Slim Shady');