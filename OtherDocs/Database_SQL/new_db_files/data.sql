-- farmer table.......................................................................................................................................................

INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetName`, `city`, `loyaltyPoints`, `active`, `profileimage`) VALUES
(1, '+94712582580', 'rushen@gmail.com', 'sashreeka@123', 'Rushen', 'Dilshani', '49, Gamunu Road, Dehiwala.', '26/A', 'Mathugama Road', 'Dodangoda', 960, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084974/profileimages/farmers/qkgcrvq4uqxx0v1rmjlg.jpg'),
(2, '+94713705751', 'sandunifernando01@gmail.com', 'sashreeka@123', 'Sanduni', 'Fernando', '72/2, Manning Place, Wellawatte.', '72/2', 'Manning Place', 'Wellawatte', 420, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/cnvpzeerlvcowzvdh4fz.jpg'),
(3, '+94714593215', 'wimala@gmail.com', 'sashreeka@123', 'Wimala', 'Dharmapala', '48, Thissa Road, Dehiwala.', '48', 'Thissa Road', 'Dehiwala', 810, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084973/profileimages/farmers/do3tecsty0hnvbzhchdt.jpg'),
(4, '+94715680121', 'chamodhidewwandi@gmail.com', 'sashreeka@123', 'Chamodhi', 'Satharasinghe', '950/A, Kottawa, Pannipitiya.', '950/A', 'Kottawa', 'Pannipitiya', 745, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/ydmnb6awhmfewcfw91kx.jpg'),
(5, '+94756489712', 'pahan15@gmail.com', 'sashreeka@123', 'Pahan', 'Dilhara', '74, Nagoda Road, Nawala.', '74', 'Nagoda Road', 'Nawala', 845, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084974/profileimages/farmers/qkgcrvq4uqxx0v1rmjlg.jpg'),
(6, '+94768778293', 'kalhara21@gmail.com', 'sashreeka@123', 'Kasun', 'Kalhara', '98/1, Kaduwela Road, Baththaramulla.', '98/1', 'Kaduwela Road', 'Baththaramulla', 549, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084973/profileimages/farmers/vt1dznl17zsgbxbruaf0.jpg'),
(7, '+94771459620', 'kavindu@gmail.com', 'sashreeka@123', 'Kavindu', 'Lalantha', '74, Gamunu Road, Dehiwala.', '74', 'Gamunu Road', 'Dehiwala', 886, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084974/profileimages/farmers/qkgcrvq4uqxx0v1rmjlg.jpg'),
(8, '+94775960321', 'sayuri@gmail.com', 'sashreeka@123', 'Sayuri', 'Madushika', '58/A, Lalitha Road, Bambalapitiya.', '58/A', 'Lalitha Road', 'Bambalapitiya', 960, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084974/profileimages/farmers/qkgcrvq4uqxx0v1rmjlg.jpg'),
(9, '+94778899645', 'kusal@gmail.com', 'sashreeka@123', 'Kusal', 'Pala', '48/A, Palagama Road, Kaduwela.', '48/A', 'Palagama Road', 'Kaduwela', 159, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084974/profileimages/farmers/qyrckeemxvzuratp0jf2.jpg'),
(10, '+94778899660', 'gayan@gmail.com', 'sashreeka@123', 'Gayan', 'Kelum', '102/B, Meegoda Road, Maharagama.', '102/B', 'Meegoda Road', 'Maharagama', 225, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084974/profileimages/farmers/qyrckeemxvzuratp0jf2.jpg');

-- role TABLE.......................................................................................................................................................

INSERT INTO `role` (`roleId`, `roleName`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`) VALUES
(1, 'manager', 1, 1, 1, 1, 0, 0, 0, 1),
(2, 'sales-head', 1, 1, 0, 1, 1, 1, 1, 0),
(3, 'HR', 1, 0, 1, 0, 1, 0, 0, 1),
(4, 'Clerk', 0, 0, 1, 1, 0, 1, 0, 1),
(5, 'Call manager', 1, 0, 0, 1, 1, 1, 1, 0),
(6, 'Products-head', 0, 1, 1, 1, 0, 0, 1, 0),
(7, 'Delivery-head', 1, 0, 0, 1, 1, 0, 0, 1),
(8, 'Order-head', 1, 0, 0, 0, 0, 0, 0, 0),
(9, 'Users manager', 1, 0, 1, 0, 0, 1, 0, 0),
(10, 'Book-Head', 0, 1, 0, 1, 0, 1, 0, 0);
(11, 'Admin', '1', '1', '1', '1', '1', '1', '1', '1');


-- company staff.......................................................................................................................................................

INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetName`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`, `profileimage`) VALUES
(1, '+94771231231', 'Christina.sashreeka@gmail.com', 'sashreeka@123', 'Christina', 'Wijayawardhana', '49046 Guiseppe Centers,West Dejon, GA 71735', '12', 'molestiae', 'New Adela', 8, '2015-10-25', '984343433v', 1, 7, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631668678/profileimages/sf6w6fssoyeplhtnkwxb.jpg'),
(2, '+94772223331', 'Shamali.sashreeka@gmail.com', 'sashreeka@123', 'Shamali', 'Pathirana', '3525 Karl Fords Suite 429,Konopelskichester, AK 12188-2502', '33', 'nostrum', 'Corwinview', 2, '2018-11-18', '984343432v', 1, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/pgypquqcsxzspuidv7dv.jpg'),
(3, '+94773232323', 'Sanduni.sashreeka@gmail.com', 'sashreeka@123', 'Sanduni', 'Fernando', 'Reid Avenue', 'Polgasowita', 'Kottawa', 'Pannipitiya', 3, '2020-02-04', '867777771v', 1, 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/cnvpzeerlvcowzvdh4fz.jpg'),
(4, '+94774443331', 'Kelvin.sashreeka@gmail.com', 'sashreeka@123', 'Kelvin', 'Gunawardhana', '70552 Larkin Place Apt. 907,West Queenie, MD 55367', '439', 'in', 'Port Elisabethfort', 6, '2014-08-31', '982243433v', 1, 5, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657432/profileimages/jtpiydgclf8rseeyllhy.jpg'),
(5, '+94774448889', 'Anuki.sashreeka@gmail.com', 'sashreeka@123', 'Anuki', 'De Alwis', '12171 Crooks Path Suite 296,Keelingfort, ME 70405-1128', '975968000', 'quibusdam', 'New Lutherfort', 5, '2018-04-01', '678555686v', 1, 9, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/paothrowvx6fk7zej7mf.jpg'),
(6, '+94775556665', 'Chamodhi.sashreeka@gmail.com', 'sashreeka@123', 'Chamodhi', 'D. Satharasinghe', '94273 Sporer Mount,Emmerichbury, WV 76101-5753', '34', 'et', 'South Roseport', 4, '2019-05-14', '984343434v', 1, 2, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/ydmnb6awhmfewcfw91kx.jpg'),
(7, '+94775557676', 'Vimal.sashreeka@gmail.com', 'sashreeka@123', 'Vimal', 'Punyadasa', '759 Waelchi Fords,Aliamouth, PA 92066-3836', '401', 'aliquid', 'North Landenville', 7, '2018-09-29', '984121343v', 1, 4, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657434/profileimages/wpfj83yhhydomrwkbo7a.jpg'),
(8, '+94777098765', 'ruwan.sashreeka@gmail.com', 'sashreeka@123', 'Ruwan', 'Perera', 'Reid Avenue', 'Polgasowita', 'Kottawa', 'Pannipitiya', 9, '2021-02-24', '867337771v', 1, 3, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632085084/profileimages/ztffmmxpmewyn9mcjkji.jpg'),
(9, '+94777994499', 'Madawee.sashreeka@gmail.com', 'sashreeka@123', 'Madawee', 'Madurangi', 'Rathmalgama', 'wallawatta', 'colombo', 'colombo', 10, '2021-07-06', '867774451v', 1, 3, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632085085/profileimages/j7j8nelctcgiqdxs4tok.jpg'),
(10, '+94779997776', 'Ishane.sashreeka@gmail.com', 'sashreeka@123', 'Ishan', 'Ediriweera', '80292 Ashley Falls,Ronnyshire, RI 07958-2065', '554', 'eligendi', 'Hollisborough', 1, '2019-10-23', '984311133v', 1, 11, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657080/profileimages/seir01edigegsc66dx6m.jpg');

-- delivery agent.......................................................................................................................................................

INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetName`, `city`, `availability`, `nic`, `drivingLicence`, `active`, `profileimage`) VALUES
(1, '+94710815451', 'jayawardana@gmail.com', 'shashreeka@123', 'Nipuna', 'Jayawardana', '491/B, Piliyandala Rd, Siddamulla, Kottawa', '491/B', 'Piliyandala Rd', 'Kottawa', 1, '671587486v', 'C1242597', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/ign2gj666mnxwbqzutrs.jpg'),
(2, '+94711499541', 'aththanayaka@gmail.com', 'sashreeka@123', 'Manura ', 'Aththanayake', '254, Sumudu Mawatha, Kottawa, Pannipitiya', '254', 'Sumudu Mawatha', 'Kottawa', 1, '963547158v', 'CE158354', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/gbzxmy8t17yoefwb9bp8.jpg'),
(3, '+94714683683', 'lakshithawelivita@gmail.com', 'sashreeka@123', 'Lakshitha', 'Welivita', '322/A, Arapangama, Kosgama', '322/A', 'Arapangama', 'Kosgama', 1, '701336598v', 'C2589314', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/mfltruoeg4wlfkiqaioc.jpg'),
(4, '+94757648569', 'ajithkarunarathne@gmail.com', 'sashreeka@123', 'Ajith', 'Karunarathne', '366/G, Alla Rd, Wellavaya', '366/G', 'Alla Rd', 'Wellawaya', 1, '593658987v', 'CE145368', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084956/profileimages/y1ul0il13g6earrnoa2b.jpg'),
(5, '+94763316991', 'madawajayaweera@gmail.com', 'shashreeka@123', 'Madawa', 'Jayaweera', '987, Thaldiyawala Rd, Rukmalgama, Athurugiriya', '987', 'Thaldiyawala Rd', 'Athurugiriya', 1, '976585345v', 'C1359685', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/kapmaageou6ogtcqkds3.jpg'),
(6, '+94768094942', 'amalgunarathne@gmail.com', 'sashreeka@123', 'Amal', 'Gunerathne', '369/H, Beragala, Haputhale', '369/H', 'Beragala', 'Haputhale', 1, '635897814v', 'C5478365', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/ekezrllnjeyj4exnphvr.jpg'),
(7, '+94768610084', 'reshmikaediriweera1997@gmail.com', 'sashreeka@123', 'Ishan', 'Ediriweera', '365, Ihalawatta, Arapotha, Hunnadeniya, matara', '365', 'Hunnadeniya', 'matara', 1, '973657894v', 'CE358941', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631657231/profileimages/seir01edigegsc66dx6m.jpg'),
(8, '+94773224257', 'nishanthakirihena@gmail.com', 'sashreeka@123', 'Nishantha', 'Kirihena', '748/A, Mihinthalaya, Anuradhapura.', '748/A', 'Mihinthalaya', 'Anuradhapura', 1, '723698858v', 'CE145589', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/gpngrahelpmxivo7vacc.jpg'),
(9, '+94777813529', 'roshantransport@gmail.com', 'shashreeka@123', 'Roshan', 'Jayathissa', '224, Jalthara, Arama Rd, Hanwella.', '224', 'Arama Rd', 'Hanwella', 1, '572541541v', 'B3823475', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/ikwlqjydzgvpqouwqco8.jpg'),
(10, '+94778339773', 'lakmalfernando@gmail.com', 'sashreeka@123', 'Lakmal', 'Fernando', '455, Pinwatta, Panadura', '455', 'Pinwatta', 'Panadura', 1, '692366855v', 'C3568669', 1, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632084957/profileimages/rkkrmhvl7olj5lgnjxg5.jpg');




-- vehicletype.......................................................................................................................................................

INSERT INTO `vehicletype` (`vehicleTypeId`, `unitPrice`, `fuelCat`, `effectiveDate`) VALUES 
(NULL, '25', 'petrol', '2022-04-15 03:31:06'), 
(NULL, '30', 'diesal', '2022-07-29 03:31:06'),
(NULL, '40', 'petrol', '2022-11-16 03:33:15');

-- vehicles.......................................................................................................................................................

INSERT INTO `vehicle`(`deliveryAgentPhoneNumber`, `vehicleId`, `vehicleTypeId`, `maxLoad`) VALUES 
('+94710815451','AW-3321','1',1),
('+94711499541','AAS-0082','2',5),
('+94714683683','HG-3288','3',3),
('+94757648569','VV-1107','3',1),
('+94763316991','CAT-7666','2',7),
('+94768094942','BK-4441','1',4),
('+94768610084','433-3001','2',13),
('+94773224257','TU-6665','1',24),
('+94777813529','103-4322','2',6),
('+94778339773','CAJ-8886','1',50);


-- fertilizer category.......................................................................................................................................................

INSERT INTO `fertilizercategory` (`fertilizerCategoryId`, `description`, `photo`) VALUES
(1, 'Paddy', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631795194/fertilizercategory/emqlvfvc4jpfc1dho6qb.jpg'),
(2, 'Flowers', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631795192/fertilizercategory/hxmtsb5jnoxbr2blncfv.jpg'),
(3, 'Tea', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631871012/fertilizercategory/aodxtgjaeyubki5iogoi.jpg'),
(4, 'Fruits', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631795190/fertilizercategory/gyrjytbnd2qm3qbbwuh0.jpg'),
(5, 'Pesticides', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631795189/fertilizercategory/y36muojfczqr2apui0bd.jpg'),
(6, 'Coconut', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631795392/fertilizercategory/wdntrsekkp66imoust29.jpg'),
(7, 'Rubber', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631871016/fertilizercategory/wqsxxtlxmhi2imyalmul.jpg'),
(8, 'Vegetables', 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631871196/fertilizercategory/gju6x5hqb9z4fmfpd9q6.jpg');


-- fertilizerss

INSERT INTO `fertilizer` (`fertilizerId`, `name`, `description`, `offer`, `unitPrice`, `unitWeight`, `photo`, `stock`, `reOrderLevel`, `measurementUnit`, `caption`, `arrivalTime`) VALUES
(1, 'Rock Phospate', 'It is sedimentary rock which contains high amount of phosphate minerals. It is used naturally to fix phosphate levels of soil.\r\nFlowers love an application of rock phosphate early in the season and will reward you with big, vibrant blooms. Roses really like rock dust and develop a stronger root system and more buds when it is used. You can also use rock phosphate to encourage healthy tree and lawn root system development.', 0, 3790, 9, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632090125/fertilizerproducts/r7oxluq9xxdofn2ayxkl.png', 30, 10, 'kg', 'contains high amount of phosphate minerals. It is ', '2021-08-21 07:10:47'),
(2, 'Vermicompost', 'It is a product of organic material degradation using various species of worms, to create a heterogeneous mixture of decomposing food waste.\r\n', 5, 1540, 5, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977315/fertilizerproducts/bovqulams9zena7l5kqp.jpg', 50, 15, 'kg', 'mixture of decomposing food waste.', '2021-08-20 07:10:47'),
(3, 'Manure', 'It is made from animal excreta(cow dung & goat droppings). Cattle Manure is a good source of nitrogen and organic carbon while goat manure is rich in nitrogen and potash.', 5, 1000, 5, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977403/fertilizerproducts/djaufefy7mhajetibcff.jpg', 45, 10, 'kg', 'made from animal excreta(cow dung & goat droppings', '2021-08-20 07:10:47'),
(4, 'Chicken Litter', 'It consists of chicken manure and sawdust. It has high levels of nitrogen and potash. Consider superior for conditioning of soil for harvest than chemical fertilizers.\r\n\r\nA good soil amendment, chicken manure adds organic matter and increases the water holding capacity and beneficial biota in soil. A good fertilizer; chicken manure provides Nitrogen, Phosphorus and Potassium to you plants (more than horse, cow or steer manure).', 0, 1500, 5, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977488/fertilizerproducts/vplsqvhsd03mj5o6u4nu.jpg', 25, 5, 'kg', 'consists of chicken manure and sawdust', '2021-08-18 07:10:47'),
(5, 'Liter Seaweed', 'A unique combination of pure seaweed extract\r\nCan be sprayed directly onto foliage, or applied as a root drench\r\nPrevents yellowing (chlorosis) of leaves, especially in acid-low (calcifuge) plants', 5, 3050, 4, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977541/fertilizerproducts/piteunccwns7b53u1zdm.jpg', 20, 5, 'L', 'Fertilizer from seaweed', '2021-08-18 07:10:47'),
(6, 'MorBloom', 'Derived from Atlantic fish, phosphoric acid and potash, Alaska MorBloom stimulates exceptional budding and blooming on all flowering plants. Brightens colors in flowers and foliage and promotes vigorous root growth, too!\r\n\r\nAvailable in quart and gallon sizes.\r\n\r\nDIRECTIONS FOR USE:\r\nMix 1-3 Tbsp per gallon of water to encourage budding in flowers, vegetables and ornamental houseplants. Apply every three weeks during the growing season.\r\n\r\nDerived from phosphoric acid, muriate of potash and seagoing fish emulsion.', 10, 4990, 10, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977688/fertilizerproducts/tqnuwagx9reylylkoghy.jpg', 20, 5, 'L', 'stimulates blooming on flowering plants', '2021-08-17 07:10:47'),
(7, 'Bio Gold', 'Bio Gold is a liquid formulation containing a group of beneficial microorganisms such as nitrogen fixing and plant disease controlling bacteria.', 5, 2679, 4, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089671/fertilizerproducts/ajky5cdeub0y9gmpoqpr.jpg', 50, 15, 'L', 'nitrogen fixing, plant disease controlling bacteri', '2021-08-12 07:10:47'),
(8, 'Bio Vaccine', 'The product is made with natural bio control fungal agent Trichoderma viride. It is simply helps to prevent the plant from rot & wilt diseases at any time. Once applied, Trichoderma viride grows over the pathogens that cause root rot, stem rot, seed rot, fruit rot and wilt diseases and killing by destroying the pathogen cell structure.', 10, 2780, 4, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089671/fertilizerproducts/j5twmceafnaubolye0sa.jpg', 40, 6, 'L', 'helps to prevent the plant from rot & wilt disease', '2021-08-18 07:10:47'),
(9, 'Bio Vermi Compost', 'Phosphorous is an important nutrient for plants and microorganisms. Bio Phos® is a liquid formulation containing phosphorous solubilizing bacterium Bacillus Megatherium.', 5, 2670, 4, 'https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/dd9m7grezhqy9pmnpjrw.jpg', 30, 5, 'kg', 'formulation containing phosphorous', '2021-08-12 07:10:47');



-- fertilizerferlilizercategory

INSERT INTO `fertilizerferlilizercategory` (`fertilizerId`, `fertilizerCategoryId`) VALUES ('1', '1'), ('2', '1'), ('7', '2'), ('8', '5'), ('6', '3'), ('9', '4'), ('3', '5'), ('6', '8'), ('3', '7'), ('4', '1'), ('7', '3'), ('9', '3'), ('2', '7'), ('4', '3'), ('8', '2')


-- contact us.......................................................................................................................................................

INSERT INTO `contactus` (`id`, `name`, `email`, `phoneNumber`, `message`) VALUES (NULL, 'Pavan Kalu Gedara', 'pavan@gmail.com', '+94771562300', 'I would like to buy 25kg of organic fertilizer - Cow Cure. Please contact me if it is available for door delivery.'), (NULL, 'Shivani Madushika', 'madushika@gmail.com', '+94712653210', 'I need to buy organic fertilizer for home cultivation. Please contact me regarding the use of these fertilizers and prices.(Manicure and Paradox)');



-- rate

INSERT INTO `rate` (`rateId`, `farmerPhoneNumber`, `fertilizerId`, `rate`, `dateTime`) VALUES (NULL, '+94756489712', '3', '4', '2021-09-05 04:09:29'), (NULL, '+94778899645', '8', '5', '2021-09-09 04:09:29');


-- comments

INSERT INTO `comment` (`commentId`, `farmerPhoneNumber`, `fertilizerId`, `content`, `dateTime`) VALUES
(1, '+94756489712', 2, 'Very Good for vegetables', '2021-09-05 04:05:44'),
(2, '+94775960321', 6, 'This helped me to get rid of white spots in plants', '2021-09-13 08:30:12');


-- notification

INSERT INTO `notification` (`notificationId`, `subject`, `dateTime`, `notificationType`, `description`) VALUES (NULL, 'Stock Management - Minimum Stock Maintenance', '2021-09-04 04:13:19', 'Stock Management', 'All the fertilizer stocks should be check to have more than the minimum requires stock'), (NULL, 'Sales Management - Monthly Report', '2021-08-02 04:13:19', 'Sales Management ', 'Monthly Sales report of July should be submitted before 10th of August');



-- orders


INSERT INTO `orders` (`orderId`, `amount`, `houseNumber`, `streetName`, `city`, `district`, `quickFlag`, `receiverName`, `deliveryCharge`, `status`, `ordereddate`, `graceenddate`, `farmerPhoneNumber`, `staffPhoneNumber`, `latitude`, `longitude`) VALUES
(1, 295530, '265', 'McCullough Inlet', 'Wilfridside', 'SouthDakota', 1, 'Kaia', 1102, 1, '2019-04-21 06:05:37', '2019-04-22 06:05:37', '+94756489712', '+94771231231', -55.272871, -64.473001),
(2, 198076, '19', 'Hilpert Junction', 'Raeborough', 'Arkansas', 1, 'Zula', 911, 1, '2020-02-15 14:18:28', '2020-02-16 14:18:28', '+94756489712', '+94771231231', 40.42454, -14.048584),
(3, 88488, '435', 'Marquis Coves', 'South Camille', 'Georgia', 0, 'Berta', 1498, 1, '2020-02-28 00:36:06', '2020-03-06 00:36:06', '+94756489712', '+94771231231', -40.612465, -32.67217),
(4, 153368, '402', 'Jacobs Burgs', 'North Leora', 'Iowa', 0, 'Karelle', 1314, 1, '2021-06-12 21:57:56', '2021-06-19 21:57:56', '+94756489712', '+94771231231', -37.546362, -115.265034),
(5, 158848, '31', 'Orville Prairie', 'North Mitchell', 'Arizona', 1, 'Addie', 1873, 1, '2019-07-21 21:17:28', '2019-07-22 21:17:28', '+94756489712', '+94771231231', -87.375787, 63.061087),
(6, 114446, '358', 'Kelley Plain', 'Prohaskaborough', 'Alaska', 1, 'Charlotte', 1025, 1, '2019-03-09 21:12:21', '2019-03-10 21:12:21', '+94756489712', '+94771231231', 40.748155, 125.132092),
(7, 84251, '329', 'Medhurst Falls', 'Reichelland', 'RhodeIsland', 1, 'Zoila', 1519, 1, '2020-03-05 10:12:06', '2020-03-06 10:12:06', '+94756489712', '+94771231231', -36.474403, 11.570296),
(8, 53440, '118', 'Ondricka River', 'Port Magdalen', 'NewJersey', 1, 'Macy', 489, 1, '2020-09-28 22:04:43', '2020-09-29 22:04:43', '+94756489712', '+94771231231', 47.928759, 61.490269),
(9, 7349, '11', 'Geo Cove', 'Allenborough', 'Wyoming', 1, 'Wilfredo', 125, 1, '2017-04-22 21:22:18', '2017-04-23 21:22:18', '+94756489712', '+94771231231', -10.473738, -39.337111),
(10, 119973, '80', 'Mante Parks', 'North Theresafurt', 'Utah', 1, 'Lemuel', 1469, 1, '2020-04-26 08:47:20', '2020-04-27 08:47:20', '+94756489712', '+94771231231', 33.595964, -139.934609),
(11, 81283, '10', 'Lura Mount', 'Lake Alexzanderville', 'Delaware', 1, 'Ahmed', 1433, 1, '2018-02-21 15:38:54', '2018-02-22 15:38:54', '+94756489712', '+94771231231', -30.142364, 33.081177),
(12, 76920, '439', 'Ethelyn Meadow', 'Nolanfurt', 'Maryland', 1, 'Abby', 1393, 1, '2019-05-05 05:32:09', '2019-05-06 05:32:09', '+94756489712', '+94771231231', 23.638025, -33.399898),
(13, 43764, '128', 'Bernier Ramp', 'Port Giovanni', 'NorthDakota', 1, 'Marie', 1365, 1, '2018-04-23 15:59:11', '2018-04-24 15:59:11', '+94756489712', '+94771231231', 83.776725, -176.213926),
(14, 115891, '17', 'Nikolas Ville', 'Lake Nellie', 'Delaware', 0, 'Shyann', 284, 1, '2016-09-23 08:00:02', '2016-09-30 08:00:02', '+94756489712', '+94771231231', -10.46916, -160.941245),
(15, 249627, '330', 'Gudrun Mountains', 'Eichmannfurt', 'Alaska', 1, 'Dale', 1162, 1, '2018-03-21 11:00:03', '2018-03-22 11:00:03', '+94756489712', '+94771231231', 9.862829, -170.0124),
(16, 287728, '172', 'Deontae Light', 'North Delaneyport', 'Alaska', 0, 'Salvador', 871, 1, '2018-06-07 12:11:17', '2018-06-14 12:11:17', '+94756489712', '+94771231231', 1.588128, -84.709437),
(17, 228352, '169', 'Sienna Flats', 'Lake Fredamouth', 'Alaska', 1, 'Alena', 1043, 1, '2017-02-28 20:26:23', '2017-03-01 20:26:23', '+94756489712', '+94771231231', -6.398978, -27.448715),
(18, 123677, '365', 'Gerhold Center', 'South Leland', 'Wisconsin', 1, 'Kaylie', 1862, 1, '2017-09-19 15:46:48', '2017-09-20 15:46:48', '+94756489712', '+94771231231', 77.609289, 105.670024),
(19, 95463, '198', 'Lucious Inlet', 'Raumouth', 'Louisiana', 1, 'Ewald', 196, 1, '2021-06-19 01:02:30', '2021-06-20 01:02:30', '+94756489712', '+94771231231', 78.227574, -174.469294),
(20, 213633, '350', 'Gleichner Coves', 'Port Natasha', 'Washington', 1, 'Chester', 1832, 1, '2018-11-09 14:29:32', '2018-11-10 14:29:32', '+94756489712', '+94771231231', -75.87053, -100.419978),
(21, 253264, '8', 'Will Fields', 'Armanistad', 'NorthDakota', 0, 'Lucinda', 1672, 1, '2017-08-22 10:17:56', '2017-08-29 10:17:56', '+94756489712', '+94771231231', 67.681604, -68.681258),
(22, 138890, '490', 'Abernathy Shoal', 'Annamaehaven', 'Alaska', 0, 'Eliseo', 1190, 1, '2017-12-07 19:55:24', '2017-12-14 19:55:24', '+94756489712', '+94771231231', 38.490067, 167.634105),
(23, 183878, '202', 'Paul Islands', 'Ninaside', 'Utah', 1, 'Daisy', 321, 1, '2020-10-20 20:44:19', '2020-10-21 20:44:19', '+94756489712', '+94771231231', -32.561539, 156.514352),
(24, 26673, '435', 'Jaqueline Island', 'Jaquanfort', 'Alaska', 0, 'Elise', 373, 1, '2019-11-23 06:36:50', '2019-11-30 06:36:50', '+94756489712', '+94771231231', -5.656405, -59.898787),
(25, 24293, '29', 'Robel Lock', 'Jaronmouth', 'NorthCarolina', 0, 'Samir', 1186, 1, '2019-11-17 15:24:52', '2019-11-24 15:24:52', '+94756489712', '+94771231231', 77.228513, 167.574311),
(26, 238165, '167', 'Carter Park', 'Friesenton', 'Nebraska', 0, 'Americo', 1066, 1, '2020-07-25 12:12:43', '2020-08-01 12:12:43', '+94756489712', '+94771231231', -67.592295, -38.308785),
(27, 225239, '460', 'Mireya Flat', 'East Enola', 'District of Columbia', 0, 'Kayla', 1174, 1, '2020-06-01 02:52:23', '2020-06-08 02:52:23', '+94756489712', '+94771231231', 53.940335, -152.514398),
(28, 225444, '13', 'Balistreri Squares', 'South Josefina', 'Ohio', 1, 'Jerald', 720, 1, '2017-05-02 11:48:45', '2017-05-03 11:48:45', '+94756489712', '+94771231231', 19.044482, 75.686227),
(29, 259524, '448', 'Bednar Meadows', 'Emoryfort', 'Ohio', 1, 'Jewell', 345, 1, '2018-12-13 00:49:55', '2018-12-14 00:49:55', '+94756489712', '+94771231231', -26.058851, 29.267371),
(30, 261702, '13', 'Leannon Ranch', 'Nicochester', 'Maryland', 1, 'Roxane', 1952, 1, '2019-06-28 23:38:43', '2019-06-29 23:38:43', '+94756489712', '+94771231231', -14.348315, -129.277715),
(31, 86202, '101', 'Eva River', 'Lake Christianaburgh', 'SouthCarolina', 0, 'Alexandre', 1121, 1, '2017-06-14 08:06:23', '2017-06-21 08:06:23', '+94715680121', '+94774443331', 60.169164, 47.907987),
(32, 24709, '334', 'Bryce Shoal', 'Port Drake', 'Montana', 1, 'Robin', 670, 1, '2017-05-20 16:13:35', '2017-05-21 16:13:35', '+94715680121', '+94774443331', -85.336236, -107.73988),
(33, 50992, '330', 'Hauck Forges', 'Lake Leonora', 'Oregon', 1, 'Reuben', 1531, 1, '2021-09-11 01:19:30', '2021-09-12 01:19:30', '+94715680121', '+94774443331', 5.485511, -174.170651),
(34, 283115, '377', 'Crist Isle', 'Quigleystad', 'Maryland', 0, 'Dovie', 487, 1, '2017-05-09 16:10:31', '2017-05-16 16:10:31', '+94715680121', '+94774443331', 25.043324, -75.219722),
(35, 114352, '425', 'Keith Club', 'Mosestown', 'NewMexico', 0, 'Samson', 111, 1, '2021-05-04 11:17:42', '2021-05-11 11:17:42', '+94715680121', '+94774443331', 39.678837, -114.720943),
(36, 192555, '13', 'Krajcik Causeway', 'North Orieville', 'Kansas', 0, 'Ceasar', 140, 1, '2018-06-22 06:59:12', '2018-06-29 06:59:12', '+94715680121', '+94774443331', -26.283447, 77.717159),
(37, 250626, '357', 'Tyreek Flats', 'South Lyricborough', 'Massachusetts', 1, 'Jermain', 368, 1, '2017-06-09 10:44:35', '2017-06-10 10:44:35', '+94715680121', '+94774443331', 61.52061, 7.779187),
(38, 95761, '416', 'Marquardt Burgs', 'South Terrilltown', 'Ohio', 1, 'Jennifer', 297, 1, '2020-01-28 01:08:10', '2020-01-29 01:08:10', '+94715680121', '+94774443331', 30.084548, 123.206363),
(39, 202703, '267', 'Elsie Brook', 'North Georgette', 'Indiana', 0, 'Rosanna', 775, 1, '2019-02-11 09:26:19', '2019-02-18 09:26:19', '+94715680121', '+94774443331', 63.053664, 64.353339),
(40, 102979, '190', 'Otto Park', 'New Jalyn', 'Minnesota', 0, 'Halie', 1091, 1, '2018-02-11 18:23:36', '2018-02-18 18:23:36', '+94715680121', '+94774443331', 25.987348, 121.229396),
(41, 184058, '242', 'Legros Grove', 'Donnellmouth', 'NorthCarolina', 0, 'Mustafa', 1156, 1, '2019-09-08 13:25:17', '2019-09-15 13:25:17', '+94715680121', '+94774443331', 36.636025, 128.469743),
(42, 166618, '78', 'Sipes Creek', 'North Merritt', 'Oklahoma', 0, 'Annamarie', 1486, 1, '2018-09-12 16:45:49', '2018-09-19 16:45:49', '+94715680121', '+94774443331', -34.228185, -28.258683),
(43, 188427, '385', 'Jannie Prairie', 'Davontemouth', 'Washington', 0, 'Cayla', 1620, 1, '2017-12-15 03:20:02', '2017-12-22 03:20:02', '+94715680121', '+94774443331', -59.676343, 23.344063),
(44, 11485, '232', 'Carey Canyon', 'Stantontown', 'Indiana', 0, 'Dave', 1920, 1, '2019-08-19 10:55:29', '2019-08-26 10:55:29', '+94715680121', '+94774443331', 25.951552, -100.089904),
(45, 96117, '245', 'Erdman Flat', 'Port Parker', 'Oklahoma', 0, 'Hayley', 616, 1, '2020-10-28 22:21:51', '2020-11-04 22:21:51', '+94715680121', '+94774443331', 1.672585, -95.028947),
(46, 222129, '286', 'Pouros Rapids', 'Jordanfort', 'Montana', 0, 'Jeffrey', 913, 1, '2018-11-26 12:11:22', '2018-12-03 12:11:22', '+94715680121', '+94774443331', -18.341783, 139.747635),
(47, 238596, '133', 'Jannie Rapid', 'North Myron', 'SouthCarolina', 1, 'Nia', 1651, 1, '2019-02-01 13:45:11', '2019-02-02 13:45:11', '+94715680121', '+94774443331', -62.501532, 132.586238),
(48, 176844, '274', 'Predovic Causeway', 'Cleoport', 'Tennessee', 1, 'Rosie', 1434, 1, '2020-07-27 15:11:47', '2020-07-28 15:11:47', '+94715680121', '+94774443331', -35.430424, -38.000701),
(49, 42547, '40', 'Dibbert Brooks', 'Lake Gunnar', 'Nebraska', 0, 'Krystal', 1194, 1, '2021-06-28 23:41:15', '2021-07-05 23:41:15', '+94715680121', '+94774443331', -54.388623, 57.61964),
(50, 95080, '476', 'Reichert Club', 'Kulasshire', 'NewJersey', 1, 'Shirley', 1350, 1, '2017-10-14 12:16:25', '2017-10-15 12:16:25', '+94715680121', '+94774443331', 6.591025, 71.922443),
(51, 203071, '175', 'Rosalinda Brooks', 'Matildaville', 'Iowa', 1, 'Ari', 736, 1, '2018-05-30 08:36:23', '2018-05-31 08:36:23', '+94715680121', '+94774443331', -32.821458, 33.287897),
(52, 290835, '223', 'Ran waththa', 'High Level Road', 'Indiana', 0, 'Shakira', 328, 0, '2021-09-25 00:00:00', '2021-10-02 00:00:00', '+94715680121', '+94774443331', -55.085912, 163.765438),
(53, 229721, '23', 'Towne Burg', 'Zackborough', 'Mississippi', 0, 'Maggie', 1698, 0, '2021-09-23 00:00:00', '2021-09-30 00:00:00', '+94715680121', '+94774443331', -72.442359, 165.865405),
(54, 101875, '280', 'Mauricio Glen', 'Zenaberg', 'Massachusetts', 1, 'Martine', 685, 0, '2021-09-23 00:00:00', '2021-09-24 00:00:00', '+94715680121', '+94774443331', -24.341513, -0.637764),
(55, 243689, '148', 'Kris Manor', 'Candidaland', 'Minnesota', 1, 'Cassandre', 854, 0, '2021-09-24 00:00:00', '2021-09-25 00:00:00', '+94715680121', '+94774443331', -70.018617, -104.224966),
(56, 141752, '412', 'Bechtelar Cliffs', 'South Hermina', 'Arizona', 0, 'Lura', 1722, 0, '2021-09-23 00:00:00', '2021-09-30 00:00:00', '+94715680121', '+94774443331', -27.880321, 70.595652),
(57, 83772, '428', 'Breitenberg Ford', 'Trantowland', 'Kentucky', 0, 'Ima', 747, 0, '2021-09-23 00:00:00', '2021-09-30 00:00:00', '+94715680121', '+94774443331', 62.124601, 169.959207),
(58, 142880, '383', 'Kuphal Shoals', 'Masonshire', 'Nevada', 1, 'Earnestine', 263, 0, '2021-09-24 00:00:00', '2021-09-25 00:00:00', '+94715680121', '+94774443331', -31.9321, -97.030851),
(59, 183154, '451', 'Kautzer Neck', 'Ortizchester', 'Missouri', 0, 'Murl', 283, 0, '2021-09-26 00:00:00', '2021-10-03 00:00:00', '+94715680121', '+94774443331', 51.140477, -112.131305),
(112, 12930, '33', 'New City', 'Polonnaruwa', 'Polonnaruwa', 0, 'Mathura', 600, 1, '2021-09-17 08:51:09', '2021-09-24 08:51:09', '+94715680121', '+94779997776', 7.952186, 81.022508),
(113, 3118, '12', 'mal mawatha', 'Polonnaruwa', 'Polonnaruwa', 0, 'Ajith Thilakasiri', 1000, 0, '2021-09-23 00:00:00', '2021-09-30 00:00:00', '+94715680121', '+94779997776', 7.929982, 81.024166),
(114, 7858, '44', 'ran uyana', 'Hambanthota', 'Hambanthota', 0, 'wijethunga B C', 1000, 3, '2021-09-20 12:46:53', '2021-09-27 12:46:53', '+94715680121', '+94779997776', 6.154172, 81.119242),
(115, 7640, '432/A', 'Araliya mawatha', 'Biliaththa', 'Hambanthota', 1, 'G P Rathnapata', 2240, 2, '2021-09-18 12:51:18', '2021-09-19 12:51:18', '+94715680121', '+94779997776', 6.048902, 80.730961),
(116, 34293, '7', 'weligama', 'Mathara', 'Mathara', 0, 'Thissa Vimalarathna', 1000, 2, '2021-09-22 12:54:26', '2021-09-29 12:54:26', '+94715680121', '+94779997776', 5.943853, 80.431833),
(117, 32200, '144', 'renu mawatha', 'Gampaha', 'Gampaha', 1, 'K W Ranbanda', 1000, 0, '2021-09-25 00:00:00', '2021-09-26 00:00:00', '+94713705751', '+94779997776', 7.081071, 80.013),
(118, 26100, 'A4', 'Galwala Road', 'Malabe', 'Malabe', 0, 'rahula withana', 600, 3, '2021-09-17 08:51:09', '2021-09-24 08:51:09', '+94713705751', '+94779997776', 6.915696, 79.970239),
(119, 30797, '54', 'Araliya Uyana', 'Delduwa', 'Kaluthara', 1, 'jaya Gamage', 600, 0, '2021-09-19 08:51:09', '2021-09-20 08:51:09', '+94713705751', '+94779997776', 6.576251, 79.966514),
(120, 20407, '3/B', 'Silagama Road', 'Pitakotuwa', 'kotuwa', 0, 'Mathura Thiruchchelwam', 600, 0, '2021-09-17 08:51:09', '2021-09-24 08:51:09', '+94713705751', '+94779997776', 6.935327, 79.8515),
(121, 5430, '6', 'Kaduwela Road', 'Weerakatiya Rd', 'trinkomalee', 1, 'rahula withana', 600, 4, '2021-09-15 08:51:09', '2021-09-16 08:51:09', '+94713705751', '+94779997776', 8.599832919334585, 81.20566550855705),
(122, 17785, '32/A', 'Makumbura', 'kottawa', 'Colombo', 1, 'Wijaya thunga D D', 400, 3, '2021-09-20 08:51:09', '2021-09-21 08:51:09', '+94713705751', '+94779997776', 6.839851, 79.963901),
(123, 9900, 'Siri Niwasa', 'Malwatta Paara', 'Kalaniya', 'Gampaha', 0, 'Kamal Rathnapala', 600, 3, '2021-09-21 08:51:09', '2021-09-28 08:51:09', '+94713705751', '+94779997776', 7.196276, 80.108829),
(124, 6000, '143', 'Ramanathan Rd', 'wallawaththa', 'Colombo', 1, 'T C Alwis', 600, 2, '2021-09-22 08:51:09', '2021-09-23 08:51:09', '+94713705751', '+94779997776', 6.87559379872321, 79.86004282466106);



-- notificationreceive................................................................
INSERT INTO `notificationreceive` (`phoneNumber`, `notificationId`) VALUES ('+94771231231', '1'), ('+94774443331', '1'), ('+94775557676', '1'), ('+94777994499', '2');



-- complaints..................................................................
INSERT INTO `complaints` (`complaintId`, `orderId`, `phoneNumber`, `deliveryNotRecieved`, `wrongQualityOfOrderedProducts`, `differentProductsRecieved`, `billingOrPaymentMatters`, `other`, `content`) VALUES (NULL, '1', '+94756489712', '0', '1', '0', '0', '0', 'I requested 5kg of Manure fertilizer. But I got only 4kg.');





























-- user table

INSERT INTO `user` (`id`, `phoneNumber`, `password`, `userCategory`) VALUES
(1, '+94712582580', 'sashreeka@123', 'farmer'),
(2, '+94713705751', 'sashreeka@123', 'farmer'),
(3, '+94714593215', 'sashreeka@123', 'farmer'),
(4, '+94715680121', 'sashreeka@123', 'farmer'),
(5, '+94756489712', 'sashreeka@123', 'farmer'),
(6, '+94768778293', 'sashreeka@123', 'farmer'),
(7, '+94771459620', 'sashreeka@123', 'farmer'),
(8, '+94775960321', 'sashreeka@123', 'farmer'),
(9, '+94778899645', 'sashreeka@123', 'farmer'),
(10, '+94778899660', 'sashreeka@123', 'farmer'),
(11, '+94771231231', 'sashreeka@123', 'staff'),
(12, '+94772223331', 'sashreeka@123', 'staff'),
(13, '+94773232323', 'sashreeka@123', 'staff'),
(14, '+94774443331', 'sashreeka@123', 'staff'),
(15, '+94774448889', 'sashreeka@123', 'staff'),
(16, '+94775556665', 'sashreeka@123', 'staff'),
(17, '+94775557676', 'sashreeka@123', 'staff'),
(18, '+94777098765', 'sashreeka@123', 'staff'),
(19, '+94777994499', 'sashreeka@123', 'staff'),
(20, '+94779997776', 'sashreeka@123', 'staff'),
(21, '+94710815451', 'shashreeka@123', 'deliveryAgent'),
(22, '+94711499541', 'sashreeka@gmail.com', 'deliveryAgent'),
(23, '+94714683683', 'sashreeka@123', 'deliveryAgent'),
(24, '+94757648569', 'sashreeka@123', 'deliveryAgent'),
(25, '+94763316991', 'shashreeka@123', 'deliveryAgent'),
(26, '+94768094942', 'sashreeka@123', 'deliveryAgent'),
(27, '+94768610084', 'sashreeka@123', 'deliveryAgent'),
(28, '+94773224257', 'sashreeka@123', 'deliveryAgent'),
(29, '+94777813529', 'shashreeka@123', 'deliveryAgent'),
(30, '+94778339773', 'sashreeka@123', 'deliveryAgent'),

