USE fiesta;

-- USERS
DELETE FROM users;

insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (1, '1GgKGCp4ii7ofmFTo6uiLqBQtPPg9VXwkK', 'Hamel Ottey', 'hottey0', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fgriffonagedotcom.files.wordpress.com%2F2016%2F07%2Fprofile-modern-2e.jpg&f=1', 'Odeon', 'hottey0@unc.edu', '519-250-3183', 5, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (2, '1ChwSLtbcxLMtHAb3Vprv2m4mjsduNvxSA', 'Murial Port', 'mport1', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2F2016%2F05%2F23%2F22%2F348B850600000578-3605456-image-m-32_1464040491071.jpg&f=1', 'Company Set-up', 'mport1@slate.com', '520-647-2957', 3, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (3, '1JjK8bBTcvGDYApeMzjsLMjx1tgDyEquRF', 'Candace Healey', 'chealey2', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg-1024x683.jpg&f=1', 'KOL Management', 'chealey2@epa.gov', '456-716-2147', 4, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (4, '1F5xndLbbThBqYCbS6emG6XWpSh13evgie', 'Arty Wanklin', 'awanklin3', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent-static.upwork.com%2Fuploads%2F2014%2F10%2F02123010%2Fprofile-photo_friendly.jpg&f=1', 'UltraTax', 'awanklin3@google.ca', '719-180-4961', 5, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (5, '1GhAZiFze9bvq5WtQq2UJvppdr5XAcMHH7', 'Torrance Shouler', 'tshouler4', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fadayinthelifeimages.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fbrisbane-headshots-commercial-photography-09.jpg&f=1', 'VCM', 'tshouler4@merriam-webster.com', '346-777-8019', 3, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (6, '134gSTbUku1rXkrhkXFN39NjV3XsCSyXYK', 'Antonella Cardoo', 'acardoo5', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.csmonitor.com%2Fcsm%2F2016%2F09%2F878724_2_Staff-Profile-JM.jpg_standard.jpg%3Falias%3Dstandard_900x600nc&f=1', 'Academic Advising', 'acardoo5@ning.com', '999-647-7008', 2, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (7, '1ChtFnZstBQBrLhTvigw4cQWUHyArerP4M', 'Desi Abella', 'dabella6', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ffc08.deviantart.net%2Ffs43%2Ff%2F2009%2F118%2F9%2F3%2FSketchpaint_Female_Profile_by_jezebel.jpg&f=1', 'AutoCAD', 'dabella6@de.vu', '334-807-0044', 2, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (8, '1F38MqY7m1JRFsbkKPP97fKuiMKfYSnMxu', 'Darby Axby', 'daxby7', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hopepsychologypractice.com%2Fwp-content%2Fuploads%2F2015%2F09%2FProfile-picture-1.jpg&f=1', 'SMO', 'daxby7@cargocollective.com', '908-516-9655', 5, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (9, '17Nd5keBd59DuEU9etv41wERuZi5rjPbtd', 'Karylin Forder', 'kforder8', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.statusfacebook.com%2Fprofile_pictures%2Fnew_profile_photos%2Fnew_profile_photos_03.jpg&f=1', 'ERISA', 'kforder8@house.gov', '625-118-9919', 5, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (10, '1BqMt9vxjxTGc8bRE9AfzH4HMr5Y2a4vQw', 'Gabriel Ringham', 'gringham9', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fmercermackay.com%2Fwp-content%2Fuploads%2F2016%2F06%2FiStock_67085781_SMALL-1.jpg&f=1', 'FDQM', 'gringham9@slashdot.org', '768-771-3456', 1, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (11, '18fCWNWkCkCMNnKw5wctBYXw1d3vPtCiqR', 'Lukas Allgood', 'lallgooda', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.christopherxjjensen.com%2Fwp-content%2Fgallery%2Fprofile-pics%2FProfile-Pic_2014-09-07_1000px.jpg&f=1', 'IAX', 'lallgooda@a8.net', '487-846-2081', 3, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (12, '19cz3epBkMxJvPyY755LBVbwUDcbx1BDkU', 'Karlis Waith', 'kwaithb', 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fprofile.microsoft.com%2Fregsysprofilecenter%2FImages%2Fpersonal_info.jpg&f=1', 'DITA XML', 'kwaithb@canalblog.com', '507-943-8633', 2, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (13, '18bNTJDgutbwj4a3fBZLuh7JYvuY2srYuM', 'Colby Keat', 'ckeatc', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-Hmn4pBtgcj0%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FRwE4s7S_9KQ%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1', 'DV Cleared', 'ckeatc@sourceforge.net', '911-830-0285', 4, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (14, '14nQppxrbs7WCbS4tipFobnGSU1QGNf55W', 'Tremayne MacCaughen', 'tmaccaughend', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2b%2FDr_Johnny_Hon.profile_shot.jpg&f=1', 'Fitness', 'tmaccaughend@answers.com', '131-726-8631', 4, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (15, '1P7JXrhvBTgZFPf6cvdmUXsT5CqvbHb2Gt', 'Hervey Kernermann', 'hkernermanne', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5josVrfQyxFBx4fmHzVe3wHaGk%26pid%3D15.1&f=1', 'PVTsim', 'hkernermanne@nature.com', '871-469-6628', 3, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (16, '16RvsWcGUv6BrWVXHN1GGNvy3oWSz2LUr5', 'Skell Guirardin', 'sguirardinf', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww2.mmu.ac.uk%2Fmedia%2Fmmuacuk%2Fstyle-assets%2Fimages%2Fr-research%2Fprofile-Zeyad.jpg&f=1', 'Lytec', 'sguirardinf@hexun.com', '827-634-9454', 4, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (17, '1JhdUPmFNq2qe6WDSFfXZdYjxKAy2Xx5gp', 'Mara Stark', 'mstarkg', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jobisjob.co.uk%2Fblog%2Fwp-content%2Fuploads%2F2014%2F12%2Flinkedin-perfect-profile.jpg&f=1', 'PFMEA', 'mstarkg@sfgate.com', '875-234-6548', 4, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (18, '1LUh3mi5KQuPWyhUsErvundjHfziXS4AtY', 'Abbey Levane', 'alevaneh', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.linkedin.com%2Fcontent%2Fdam%2Fblog%2Fen-us%2Fcorporate%2Fblog%2F2014%2F07%2FAnais_Saint-Jude_L4388_SQ.jpg.jpeg&f=1', 'Newsletters', 'alevaneh@state.tx.us', '550-663-4716', 2, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (19, '1CokQUwaNQjqsJiiPbd9RSeBtmRXHrKcVR', 'Diahann Cassie', 'dcassiei', 'https://cfl.dropboxstatic.com/static/images/jobs/jobs_2015/profile-home-makers-vflWnMtf7.jpg', 'Wholesale', 'dcassiei@ebay.com', '600-881-1968', 1, NOW(), NOW());
insert into users (id, googleid, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) values (20, '1BstJxbsZpTuoMTMu5UDWbgNQJCTrEfUWu', 'Conrad Raffels', 'craffelsj', 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qnQ505SUT76uhhrMgmB09gHaIG%26pid%3D15.1&f=1', 'Backbone.js', 'craffelsj@admin.ch', '878-652-8273', 5, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (21, "111953930250628635331", "cainwatson", "Cain", "https://lh3.googleusercontent.com/-4nuxFupHIww/AAAAAAAAAAI/AAAAAAAAADY/GO0evWqwDeQ/s96-c/photo.jpg", "I love taylor Swift!!!! <3", "cainwatson@gmail.com", "444-5555", 5, NOW(), NOW()); 
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (22, "107952859027055542447", "taylor", "tay", "https://lh3.googleusercontent.com/-9AiqmkZ7XRw/AAAAAAAAAAI/AAAAAAAAGmo/w_c6YFX6q2o/s120/photo.jpg", "Party Girl Tay", "lasha.tay@gmail.com", "444-4444", 5, NOW(), NOW());
INSERT INTO users (id, googleId, username, nickname, avatar, bio, email, phone, rating, createdAt, updatedAt) VALUES (23, "113782251914156367493", "Eric", "Trap Money Benny", "https://m.media-amazon.com/images/M/MV5BMTM3NjU2NTY0NF5BMl5BanBnXkFtZTcwNDI0NjgyMQ@@._V1_UY317_CR26,0,214,317_AL_.jpg", "KEEKEE", "ejeric23@gmail.com", "444-2222", 5, NOW(), NOW());

-- FRIENDS
DELETE FROM friends;

INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (23, 22, NOW(), NOW());
INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (22, 21, NOW(), NOW());
INSERT INTO friends (user1_id, user2_id, createdAt, updatedAt) VALUES (23, 21, NOW(), NOW());

-- FRIEND REQUESTS
DELETE FROM friend_requests;

INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (4, 23, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (5, 22, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (1, 21, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (2, 21, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (3, 22, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (4, 23, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (1, 22, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (2, 23, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (9, 23, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (10, 22, NOW(), NOW());
INSERT INTO friend_requests (from_user_id, to_user_id, createdAt, updatedAt) VALUES (11, 21, NOW(), NOW());

-- PARTIES
DELETE FROM parties;

INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (1, "Cain's Jamsesh", 0, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (2, "Sasha's Foam Party", 0, true, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (3, "Johnson Family Reunion", 3, true, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (4, "Taylor's Fiesta", 1, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());
INSERT INTO parties (id, name, rating, is_private, location, longitude, latitude, start_date, end_date, createdAt, updatedAt) VALUES (5, "Eric's Birthday", 0, false, "748 Camp St.", "29.945961", "-90.070023", NOW(), NOW(), NOW(), NOW());

-- GROUP USERS
DELETE FROM group_users;

INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (1, 23, 1, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (2, 21, 2, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (3, 22, 1, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (4, 22, 3, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (5, 21, 1, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (6, 22, 2, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (7, 22, 5, false, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (8, 22, 4, true, NOW(), NOW());
INSERT INTO group_users (id, user_id, party_id, is_host, createdAt, updatedAt) VALUES (9, 23, 5, true, NOW(), NOW());

-- MESSAGES
DELETE FROM messages;

INSERT INTO messages (id, user_id, text, createdAt, updatedAt) VALUES (1, 21, "You guys ready to pawtay?", NOW(), NOW());
INSERT INTO messages (id, user_id, text, createdAt, updatedAt) VALUES (2, 21, "...Because I am!", NOW(), NOW());

-- GROUP MESSAGES
DELETE FROM group_messages;

INSERT INTO group_messages (message_id, party_id, createdAt, updatedAt) VALUES (1, 1, NOW(), NOW());
INSERT INTO group_messages (message_id, party_id, createdAt, updatedAt) VALUES (2, 1, NOW(), NOW());

--MADEA

DELETE FROM media

insert into media (id, userId , link, caption, party_id) values (1, 18, 'https://robohash.org/attemporibusamet.jpg?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (2, 6, 'https://robohash.org/sequiasit.png?size=50x50&set=set1', null, 5);
insert into media (id, userId , link, caption, party_id) values (3, 19, 'https://robohash.org/voluptateeiusvoluptatem.png?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (4, 14, 'https://robohash.org/inventorenonut.png?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (5, 10, 'https://robohash.org/quidemdelenitiut.jpg?size=50x50&set=set1', null, 5);
insert into media (id, userId , link, caption, party_id) values (6, 21, 'https://robohash.org/consequaturverorerum.bmp?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (7, 10, 'https://robohash.org/expeditaautcumque.bmp?size=50x50&set=set1', null, 2);
insert into media (id, userId , link, caption, party_id) values (8, 22, 'https://robohash.org/temporeidvel.jpg?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (9, 22, 'https://robohash.org/voluptatempraesentiuminventore.bmp?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (10, 6, 'https://robohash.org/quiestipsam.jpg?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (11, 6, 'https://robohash.org/maximedignissimosnulla.png?size=50x50&set=set1', null, 5);
insert into media (id, userId , link, caption, party_id) values (12, 2, 'https://robohash.org/dictadoloremqueconsectetur.png?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (13, 12, 'https://robohash.org/teneturremest.png?size=50x50&set=set1', null, 2);
insert into media (id, userId , link, caption, party_id) values (14, 5, 'https://robohash.org/magnamminussunt.png?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (15, 17, 'https://robohash.org/aliasipsambeatae.jpg?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (16, 4, 'https://robohash.org/dolorumdoloresconsequatur.png?size=50x50&set=set1', null, 1);
insert into media (id, userId , link, caption, party_id) values (17, 18, 'https://robohash.org/etplaceatab.jpg?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (18, 2, 'https://robohash.org/etcorruptivitae.bmp?size=50x50&set=set1', null, 5);
insert into media (id, userId , link, caption, party_id) values (19, 19, 'https://robohash.org/sedquiaet.jpg?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (20, 12, 'https://robohash.org/voluptatumutab.png?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (21, 11, 'https://robohash.org/estmodivoluptas.bmp?size=50x50&set=set1', null, 1);
insert into media (id, userId , link, caption, party_id) values (22, 17, 'https://robohash.org/eligendiestsimilique.jpg?size=50x50&set=set1', null, 3);
insert into media (id, userId , link, caption, party_id) values (23, 2, 'https://robohash.org/explicaboatqueconsequatur.bmp?size=50x50&set=set1', null, 2);
insert into media (id, userId , link, caption, party_id) values (24, 4, 'https://robohash.org/enimquisat.bmp?size=50x50&set=set1', null, 4);
insert into media (id, userId , link, caption, party_id) values (25, 13, 'https://robohash.org/suntquofuga.bmp?size=50x50&set=set1', null, 3);