USE fiesta;

DELETE FROM users;

INSERT INTO users (username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES ("bob", "Bobby Boy", "https://images-na.ssl-images-amazon.com/images/M/MV5BODYzNzg4MjAxMF5BMl5BanBnXkFtZTgwNDEyODQ0MzI@._CR792,139,275,275_UX402_UY402._SY201_SX201_AL_.jpg", "I am bob, bob i am", "bob@hotmail.to", "444-1111", 3, NOW(), NOW());
INSERT INTO users (username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES ("eric", "Super Swifter", "https://m.media-amazon.com/images/M/MV5BMTM3NjU2NTY0NF5BMl5BanBnXkFtZTcwNDI0NjgyMQ@@._V1_UY317_CR26,0,214,317_AL_.jpg", "I love Taylor Swift <3", "eric@tayor.swift", "444-2222", 3, NOW(), NOW());
INSERT INTO users (username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES ("Taylor Swift", "T-Swizzle", "http://theweeklyspoon.com/wp-content/uploads/2018/05/F814A5D3-D18F-4A2F-81D2-D385431B1C92.jpeg", "Hey its your local country girl Taylor!!", "taylorswift@taylorswift.taylorswift", "444-3333", 5, NOW(), NOW());
