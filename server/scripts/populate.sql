USE fiesta;

-- USERS
DELETE FROM users;

INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (1, "fake-google-id-1", "bob", "Bobby Boy", "https://images-na.ssl-images-amazon.com/images/M/MV5BODYzNzg4MjAxMF5BMl5BanBnXkFtZTgwNDEyODQ0MzI@._CR792,139,275,275_UX402_UY402._SY201_SX201_AL_.jpg", "I am bob, bob i am", "bob@hotmail.to", "444-1111", 3, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (2, "fake-google-id-2", "eric", "Super Swifter", "https://m.media-amazon.com/images/M/MV5BMTM3NjU2NTY0NF5BMl5BanBnXkFtZTcwNDI0NjgyMQ@@._V1_UY317_CR26,0,214,317_AL_.jpg", "I love Taylor Swift <3", "eric@tayor.swift", "444-2222", 3, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (3, "fake-google-id-3", "therealtaylorswift", "T-Swizzle", "http://theweeklyspoon.com/wp-content/uploads/2018/05/F814A5D3-D18F-4A2F-81D2-D385431B1C92.jpeg", "Hey its your local country girl Taylor!!", "taylorswift@taylorswift.taylorswift", "444-3333", 5, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (4, "fake-google-id-4", "sasha", "Sasha", "https://vignette.wikia.nocookie.net/bratzmagicschool/images/3/36/Sasha.jpg/revision/latest?cb=20111230024851", "It's Sasha", "sasha@gooooooogle.com", "444-1112", 1, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (5, "fake-google-id-5", "andy", "Andy Nguyen", "https://ca.slack-edge.com/T02P3HQD6-U867E4UUA-800f2ed4f4f6-512", "Holy Molly! This app is great!", "andynguyen@andynguen.andynguen", "444-1113", 1, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (6, "107952859027055542447", "taylor", "tay", "https://lh3.googleusercontent.com/-9AiqmkZ7XRw/AAAAAAAAAAI/AAAAAAAAGmo/w_c6YFX6q2o/s120/photo.jpg", "Patience is VERY important...i'm talking to @cain", "lasha.tay@gmail.com", "444-4444", 5, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (7, "111953930250628635331", "cainwatson", "Cain", "https://lh3.googleusercontent.com/-4nuxFupHIww/AAAAAAAAAAI/AAAAAAAAADY/GO0evWqwDeQ/s96-c/photo.jpg", "Hey, it's me Cain", "cainwatson@gmail.com", "444-5555", 5, NOW(), NOW());

-- FRIENDS
DELETE FROM friends;

INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (1, 2, NOW(), NOW());
INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (1, 3, NOW(), NOW());
INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (2, 3, NOW(), NOW());

-- FRIEND REQUESTS
DELETE FROM friend_requests;

INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (4, 2, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (5, 2, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (1, 7, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (2, 7, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (3, 7, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (4, 7, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (5, 7, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (6, 7, NOW(), NOW());

-- PARTIES
DELETE FROM parties;

INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (1, "Bob's Jamsesh", 0, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (2, "Sasha's Foam Party", 0, true, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (3, "Johnson Family Reunion", 3, true, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (4, "Bob's Fiesta", 1, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (5, "Eric's Birthday", 0, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());

-- GROUP USERS
DELETE FROM group_users;

INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (1, 1, 1, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (2, 1, 2, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (3, 6, 1, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (4, 6, 2, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (5, 7, 1, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (6, 7, 2, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (7, 1, 3, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (8, 1, 4, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (9, 2, 5, true, NOW(), NOW());

-- MESSAGES
DELETE FROM messages;

INSERT INTO messages (id, user_id, text, createdAt, updatedAt) VALUES (1, 1, "You guys ready to pawtay?", NOW(), NOW());
INSERT INTO messages (id, user_id, text, createdAt, updatedAt) VALUES (2, 1, "...Because I am!", NOW(), NOW());

-- GROUP MESSAGES
DELETE FROM group_messages;

INSERT INTO group_messages (message_id, party_id, createdAt, updatedAt) VALUES (1, 1, NOW(), NOW());
INSERT INTO group_messages (message_id, party_id, createdAt, updatedAt) VALUES (2, 1, NOW(), NOW());
