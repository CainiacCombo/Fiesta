USE fiesta;

-- USERS
DELETE FROM users;

INSERT INTO users (id, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (1, "bob", "Bobby Boy", "https://images-na.ssl-images-amazon.com/images/M/MV5BODYzNzg4MjAxMF5BMl5BanBnXkFtZTgwNDEyODQ0MzI@._CR792,139,275,275_UX402_UY402._SY201_SX201_AL_.jpg", "I am bob, bob i am", "bob@hotmail.to", "444-1111", 3, NOW(), NOW());
INSERT INTO users (id, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (2, "eric", "Super Swifter", "https://m.media-amazon.com/images/M/MV5BMTM3NjU2NTY0NF5BMl5BanBnXkFtZTcwNDI0NjgyMQ@@._V1_UY317_CR26,0,214,317_AL_.jpg", "I love Taylor Swift <3", "eric@tayor.swift", "444-2222", 3, NOW(), NOW());
INSERT INTO users (id, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (3, "Taylor Swift", "T-Swizzle", "http://theweeklyspoon.com/wp-content/uploads/2018/05/F814A5D3-D18F-4A2F-81D2-D385431B1C92.jpeg", "Hey its your local country girl Taylor!!", "taylorswift@taylorswift.taylorswift", "444-3333", 5, NOW(), NOW());
INSERT INTO users (id, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (4, "bob-backup-1", "Bob's Backup Acc 1", "<some avatar url>", "Backup #1 for @bob", "bob-1@bob.mail", "444-1112", 1, NOW(), NOW());
INSERT INTO users (id, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (5, "bob-backup-2", "Bob's Backup Acc 2", "<some avatar url>", "Backup #2 for @bob", "bob-2@bob.mail", "444-1113", 1, NOW(), NOW());

-- FRIENDS
DELETE FROM friends;

INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (1, 2, NOW(), NOW());
INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (1, 3, NOW(), NOW());
INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (2, 3, NOW(), NOW());

-- FRIEND REQUESTS
DELETE FROM friend_requests;

INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (4, 2, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (5, 2, NOW(), NOW());

-- PARTIES
DELETE FROM parties;

INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (1, "Bob's Jamsesh", 0, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());

-- GROUP USERS
DELETE FROM group_users;

INSERT INTO group_users (user_id, party_id, is_host, createdAt, updatedAt) VALUES (1, 1, true, NOW(), NOW());
