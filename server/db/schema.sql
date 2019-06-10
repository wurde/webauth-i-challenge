BEGIN TRANSACTION;

CREATE TABLE users (
  `id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  `username` text NOT NULL,
  `password_hash` text NOT NULL
);

COMMIT TRANSACTION;
