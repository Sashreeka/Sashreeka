INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (1, 1, 1, 1, 1, 0, 0, 0, 1, 'manager');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (2, 1, 1, 0, 1, 1, 1, 1, 0, 'sales-head');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (3, 1, 0, 1, 0, 1, 0, 0, 1, 'HR');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (4, 0, 0, 1, 1, 0, 1, 0, 1, 'Clerk');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (5, 1, 0, 0, 1, 1, 1, 1, 0, 'Call manager');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (6, 0, 1, 1, 1, 0, 0, 1, 0, 'Products-head');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (7, 1, 0, 0, 1, 1, 0, 0, 1, 'Delivery-head');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (8, 1, 0, 0, 0, 0, 0, 0, 0, 'Order-head');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (9, 1, 0, 1, 0, 0, 1, 0, 0, 'Users manager');
INSERT INTO `role` (`roleId`, `addOrders`, `manageSales`, `manageStocks`, `manageDeliveries`, `manageLoyaltyPoints`, `managePayments`, `createCompanyStaff`, `addOffers`, `roleName`) VALUES (10, 0, 1, 0, 1, 0, 1, 0, 0, 'Book-Head');


INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (4, '071234567', 'raoul.stiedemann@example.com', '111', 'Jayne', 'Schaden', '0481 Brandi Falls Suite 171,Dachfurt, NE 30978-9088', '749', 'nostrum', 'South', 0, '75', '801', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (6, '071234767', 'kohler.fermin@example.net', '111', 'Loma', 'Klocko', '9630 Abshire Vista,Darrelshire, OK 76368-5002', '817990215', 'quia', 'West', 0, '3', '557809', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (14, '0716548546', 'janice.cole@example.org', '111', 'Gabrielle', 'Kirlin', '8927 Koch Springs Apt. 766,Mayerside, AK 30271-3820', '133', 'et', 'Port', 0, '2', '16436', 0);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (10, '0716545848', 'parker57@example.org', '111', 'Mckayla', 'Paucek', '618 Cortez Forge Suite 784,Wildermanland, FL 47278-4289', '2785798', 'in', 'North', 0, '829448', '86380', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (5, '0775216548', 'sydni.macejkovic@example.com', '111', 'Brandi', 'Sipes', '727 Labadie Ford,Opheliaborough, MN 20207', '334206', 'voluptate', 'West', 1, '22591829', '953184206', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (7, '0741516548', 'mwisozk@example.net', '111', 'Dan', 'Russel', '225 Alicia Curve Apt. 558,North Minaborough, CA 16405', '', 'omnis', 'South', 1, '48', '96233154', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (15, '0769516548', 'von.laurel@example.net', '111', 'Kennedy', 'Monahan', '69754 Margarett Valleys Apt. 330,Daphnemouth, IL 24512-4962', '4136399', 'eius', 'New', 1, '245', '85258959', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (11, '0712356548', 'buck68@example.net', '111', 'Calista', 'Tremblay', '515 Lafayette Land Suite 186,Kellieview, KY 93723-2700', '', 'hic', 'Lake', 0, '93783', '1', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (12, '0716525848', 'euna.swift@example.com', '111', 'Serenity', 'Stokes', '3788 Schneider Squares Suite 252,Lempimouth, MN 88593-9106', '862661', 'voluptatum', 'Lake', 0, '', '5', 0);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (1, '0716035548', 'czulauf@example.com', '111', 'Coy', 'Streich', '208 Eichmann Rest,Bartolettimouth, RI 44608', '69917173', 'fugit', 'New', 1, '6882', '3', 0);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (8, '0716505248', 'jaycee02@example.com', '111', 'Caesar', 'Wisoky', '611 Chase Vista Suite 711,Steubermouth, TN 83657-5544', '87', 'ratione', 'New', 1, '5', '17651413', 1);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (2, '0716506548', 'ryder.hammes@example.net', '111', 'Janick', 'Pfeffer', '68640 Dejah Lane Apt. 152,Davionton, MS 39072-9659', '43123051', 'similique', 'West', 1, '5', '', 0);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (3, '0716258548', 'wilbert.streich@example.net', '111', 'Lonny', 'Rolfson', '794 Amelie Knolls Suite 517,Creolaport, CA 34317', '7556', 'quae', 'Lake', 0, '118', '87249', 0);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (9, '0719566548', 'lbrown@example.org', '111', 'Tierra', 'Lueilwitz', '22149 Ron Park,Kuphalmouth, HI 04940', '158528070', 'laboriosam', 'East', 1, '624872', '8', 0);
INSERT INTO `deliveryagent` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `availability`, `nic`, `drivingLicence`, `active`) VALUES (13, '0712586548', 'fae67@example.org', '111', 'Marcelo', 'Mayert', '68056 Dovie Unions Apt. 226,South Bertrand, IN 45382-6696', '5592', 'enim', 'Lake', 0, '', '93040', 0);


INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (1, '0711205934', 'akoepp@example.com', '111', 'Christina', 'Franecki', '49046 Guiseppe Centers,West Dejon, GA 71735', '12', 'molestiae', 'New Adela', 0, '1997-10-25', '8', 1, 7);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (2, '0715135934', 'grady.jesus@example.org', '111', 'Durward', 'Feil', '94273 Sporer Mount,Emmerichbury, WV 76101-5753', '', 'et', 'South Roseport', 0, '1993-05-14', '131', 1, 2);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (3, '0775315934', 'igaylord@example.org', '111', 'May', 'Hane', '748 Lilian Station Suite 827,Port Maymie, HI 52226-5605', '2', 'eveniet', 'North Stephen', 0, '1973-07-31', '33598', 0, 8);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (4, '0758615934', 'bayer.wade@example.org', '111', 'Leone', 'Bins', '069 Grayson Green,North Tracy, IN 66180', '474191772', 'qui', 'Kunzeport', 0, '1999-07-11', '7062534', 1, 3);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (5, '0715954234', 'hettinger.mable@example.net', '111', 'Verner', 'Cole', '05244 Von Burg,Beckerview, GA 26570-5010', '9', 'voluptas', 'Port Berta', 0, '1971-03-07', '585', 1, 9);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (6, '0715032934', 'jlynch@example.com', '111', 'Kelvin', 'Rau', '70552 Larkin Place Apt. 907,West Queenie, MD 55367', '439', 'in', 'Port Elisabethfort', 0, '1997-08-31', '6', 0, 5);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (7, '0715586934', 'kwuckert@example.com', '111', 'Zoie', 'Franecki', '759 Waelchi Fords,Aliamouth, PA 92066-3836', '401', 'aliquid', 'North Landenville', 0, '1991-09-29', '4', 0, 4);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (8, '0715951934', 'kilback.sid@example.org', '111', 'Kyle', 'Sauer', '9423 Pouros Radial Suite 330,Reynoldsview, MT 69022-9587', '', 'blanditiis', 'Gardnerport', 0, '1993-03-10', '', 0, 4);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (9, '0715280934', 'nolan.emelie@example.com', '111', 'Albin', 'Volkman', '80292 Ashley Falls,Ronnyshire, RI 07958-2065', '', 'eligendi', 'Hollisborough', 0, '1993-10-23', '12', 0, 1);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (10, '071305934', 'cecelia67@example.net', '111', 'Emmanuelle', 'Ritchie', '3525 Karl Fords Suite 429,Konopelskichester, AK 12188-2502', '33', 'nostrum', 'Corwinview', 0, '2008-11-18', '922711', 0, 1);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (11, '0715250934', 'richard.macejkovic@example.com', '111', 'Janice', 'Grimes', '12171 Crooks Path Suite 296,Keelingfort, ME 70405-1128', '975968000', 'quibusdam', 'New Lutherfort', 0, '2018-04-01', '678555186', 1, 7);
INSERT INTO `companystaff` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `staffId`, `appointedDate`, `nic`, `active`, `roleId`) VALUES (12, '0775615934', 'evan.hahn@example.com', '111', 'Ruth', 'Schultz', '9344 Craig Knolls,Bartellville, PA 24328', '452949218', 'et', 'New Marcel', 0, '1997-06-23', '', 0, 7);

INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (1, '0752016924', 'tianna.funk@example.org', '111', 'Jaylan', 'Herman', '9710 Alejandra Highway\nSouth Mohammedport, WV 51883-2225', '26263397', '738648', 'Breitenbergborough', 0, 0);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (11, '0756369924', 'rosie73@example.net', '111', 'Leilani', 'Friesen', '886 Pfeffer Prairie Apt. 534\nSouth Dennis, MN 63742-6502', '344', '', 'Treutelland', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (15, '0784556924', 'graham.dell@example.com', '111', 'Velva', 'Quitzon', '90541 Stracke Radial Suite 127\nSouth Elveramouth, MS 36232', '18872', '556084', 'East Elody', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (12, '0725956924', 'dan21@example.org', '111', 'Emmett', 'Boyer', '75764 Kreiger Pass Apt. 903\nEast Darrick, OH 03995-5521', '2', '289414', 'Greenfelderstad', 0, 0);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (7, '0756203924', 'maryse48@example.com', '111', 'Rashawn', 'Champlin', '09239 Bell Keys Suite 505\nWest Destinitown, MO 53997', '14', '867892', 'South Jazminhaven', 0, 0);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (8, '0755966924', 'schmitt.tessie@example.com', '111', 'Damien', 'Kautzer', '1222 Larson Fall Apt. 517\nElodyborough, GA 22629-0620', '293792', '33899', 'West Una', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (4, '0755846924', 'walter.helena@example.net', '111', 'Luella', 'Thompson', '91469 Johns Loaf\nReingerchester, MS 16707', '35298', '4333746', 'Port Stevie', 0, 0);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (9, '0752536924', 'kaley.kling@example.org', '111', 'Nikita', 'Schinner', '901 Treva Hill\nNew Kayleyfort, VT 45385', '6850', '6094', 'East Noble', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (6, '0756564924', 'oliver.leffler@example.com', '111', 'Rosetta', 'Lebsack', '4198 Elyssa Cliffs Suite 846\nEast Delmershire, CT 57824', '420', '5341420', 'Sengerstad', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (3, '0775656924', 'edgardo.kuhlman@example.org', '111', 'Shea', 'Feest', '2763 Marquardt Mountains Suite 116\nWest Cicero, CT 14143', '10136', '25', 'North Clara', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (5, '0774156924', 'norris21@example.net', '111', 'Juliana', 'Bosco', '32202 Langosh Mount Apt. 849\nNorth Tod, DE 42178-5145', '', '1', 'Wisokybury', 0, 0);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (14, '0716556924', 'gleason.braden@example.org', '111', 'Macie', 'Ortiz', '2517 Delmer Locks Apt. 425\nSipesburgh, AK 71810-2559', '429348', '899318353', 'Millerhaven', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (13, '0756592924', 'estell13@example.com', '111', 'Isabella', 'Fadel', '835 Yundt Burgs Apt. 624\nWest Cletamouth, HI 39621', '608052824', '3496410', 'Lake Kalefort', 0, 1);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (2, '0750326924', 'jason53@example.com', '111', 'Cindy', 'Erdman', '5560 Jon Creek\nWalshbury, NJ 00066-7251', '59', '115', 'Lake Sheldon', 0, 0);
INSERT INTO `farmer` (`userId`, `phoneNumber`, `email`, `password`, `firstName`, `lastName`, `address`, `houseNumber`, `streetNumber`, `city`, `loyaltyPoints`, `active`) VALUES (10, '0785656924', 'madelynn42@example.net', '111', 'Margaret', 'White', '59433 Hilll Overpass Apt. 125\nNikolausmouth, IA 06818', '', '8', 'Karlieside', 0, 1);



INSERT INTO `fertilizer` (`fertilizerId`, `name`, `description`, `offer`, `unitPrice`, `unitWeight`, `photo`, `stock`, `reOrderLevel`, `measurementUnit`, `caption`) VALUES
(1, 'Rock Phospate', 'It is sedimentary rock which contains high amount of phosphate minerals. It is used naturally to fix phosphate levels of soil.\r\nFlowers love an application of rock phosphate early in the season and will reward you with big, vibrant blooms. Roses really like rock dust and develop a stronger root system and more buds when it is used. You can also use rock phosphate to encourage healthy tree and lawn root system development.', 0, 3790, 9, 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg', 30, 10, 'kg', 'contains high amount of phosphate minerals. It is '),
(2, 'Vermicompost', 'It is a product of organic material degradation using various species of worms, to create a heterogeneous mixture of decomposing food waste.\r\n', 5, 1540, 5, 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg', 50, 15, 'kg', 'mixture of decomposing food waste.'),
(3, 'Manure', 'It is made from animal excreta(cow dung & goat droppings). Cattle Manure is a good source of nitrogen and organic carbon while goat manure is rich in nitrogen and potash.', 5, 1000, 5, 'https://www.stones4homes.co.uk/wp-content/uploads/2021/04/Farmyard-Manure-1-004.jpg', 45, 10, 'kg', 'made from animal excreta(cow dung & goat droppings'),
(4, 'Chicken Litter', 'It consists of chicken manure and sawdust. It has high levels of nitrogen and potash. Consider superior for conditioning of soil for harvest than chemical fertilizers.\r\n\r\nA good soil amendment, chicken manure adds organic matter and increases the water holding capacity and beneficial biota in soil. A good fertilizer; chicken manure provides Nitrogen, Phosphorus and Potassium to you plants (more than horse, cow or steer manure).', 0, 1500, 5, 'https://homedepot.scene7.com/is/image/homedepotcanada/p_1001238278.jpg?wid=1000&hei=1000&op_sharpen=1', 25, 5, 'kg', 'consists of chicken manure and sawdust'),
(5, 'Liter Seaweed', 'A unique combination of pure seaweed extract\r\nCan be sprayed directly onto foliage, or applied as a root drench\r\nPrevents yellowing (chlorosis) of leaves, especially in acid-low (calcifuge) plants', 5, 3050, 4, 'https://images-na.ssl-images-amazon.com/images/I/81uaIFazqHL.jpg', 20, 5, 'L', 'Fertilizer from seaweed'),
(6, 'MorBloom', 'Derived from Atlantic fish, phosphoric acid and potash, Alaska MorBloom stimulates exceptional budding and blooming on all flowering plants. Brightens colors in flowers and foliage and promotes vigorous root growth, too!\r\n\r\nAvailable in quart and gallon sizes.\r\n\r\nDIRECTIONS FOR USE:\r\nMix 1-3 Tbsp per gallon of water to encourage budding in flowers, vegetables and ornamental houseplants. Apply every three weeks during the growing season.\r\n\r\nDerived from phosphoric acid, muriate of potash and seagoing fish emulsion.', 10, 4990, 10, 'https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMjZjODRlOWEtYzBlMS00OTRiLThkNGQtNzE5YTVlMjBkNjBjXzEuNGYxYTBmMGVjMmJhMWM3MTU5NDBlZjgzNDFjOWI4YjcuanBlZz9vZG5XaWR0aD00MDAmYW1wO29kbkhlaWdodD00MDAmYW1wO29kbkJnPWZmZmZmZg.jpg', 20, 5, 'L', 'stimulates blooming on flowering plants'),
(7, 'Bio Gold', 'Bio Gold is a liquid formulation containing a group of beneficial microorganisms such as nitrogen fixing and plant disease controlling bacteria.', 5, 2679, 4, 'http://www.biopowerlanka.com/images/bio-gold.jpg', 50, 15, 'L', 'nitrogen fixing, plant disease controlling bacteri'),
(8, 'Bio Vaccine', 'The product is made with natural bio control fungal agent Trichoderma viride. It is simply helps to prevent the plant from rot & wilt diseases at any time. Once applied, Trichoderma viride grows over the pathogens that cause root rot, stem rot, seed rot, fruit rot and wilt diseases and killing by destroying the pathogen cell structure.', 10, 2780, 4, 'http://www.biopowerlanka.com/images/bio-vaccine.jpg', 40, 6, 'L', 'helps to prevent the plant from rot & wilt disease'),
(9, 'Bio Phos', 'Phosphorous is an important nutrient for plants and microorganisms. Bio Phos® is a liquid formulation containing phosphorous solubilizing bacterium Bacillus Megatherium.', 5, 2670, 4, 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg', 30, 5, 'L', 'formulation containing phosphorous');



INSERT INTO `orders`(`orderId`, `amount`, `deliveryAddress`, `quickFlag`, `offer`, `receiverName`, `deliveryCharge`, `status`, `farmerPhoneNumber`, `staffPhoneNumber`) VALUES ('3424434361','20220.00','Malabe','2','5','Mr.rahul','600.00','2','0752016924','0711205934');
INSERT INTO `orders`(`orderId`, `amount`, `deliveryAddress`, `quickFlag`, `offer`, `receiverName`, `deliveryCharge`, `status`, `farmerPhoneNumber`, `staffPhoneNumber`) VALUES ('234112130','34000.00','kotuwa','0','10','Mr.Mathura','600.00','1','0752016924','0711205934');



INSERT INTO `deliveries` (`deliveryId`, `orderId`, `famerPhoneNumber`, `deliveryAgentPhoneNumber`, `deliveryLoad`, `distance`, `deliveryAgentsPayment`, `deliveryAgentsPaymentFlag`, `dateTime`, `deliveryRate`, `issue`, `confirmationFlag`) VALUES ('2', '1114434361', '0752016924', '0712345678', '1000', '450.00', '450000', NULL, '2021-07-21 04:11:13.000000', '0', '', '0'), ('3', '112130000', '0752016924', '0712345678', '1000', '450.00', '450000', NULL, '2021-07-21 04:11:13.000000', '0', '', '0'), ('4', '214748360', '0752016924', '0712345678', '600', '650.00', '456000', NULL, '2021-07-21 04:11:14.000000', '0', '', '0'), ('5', '231121310', '0752016924', '0712345678', '16600', '250.00', '450000', NULL, '2021-07-21 04:11:55.000000', '0', '', '0'), ('6', '231121311', '0752016924', '0712345678', '10030', '150.00', '150000', NULL, '2021-07-21 04:11:16.000000', '0', '', '0')
INSERT INTO `user` (`phoneNumber`, `password`, `userCategory`) VALUES ('071111111', '111', 'admin');
INSERT INTO `user` (`phoneNumber`, `password`, `userCategory`) VALUES ('072222222', '222', 'staff');
INSERT INTO `user` (`phoneNumber`, `password`, `userCategory`) VALUES ('073333333', '333', 'deliveryAgent');
INSERT INTO `user` (`phoneNumber`, `password`, `userCategory`) VALUES ('074444444', '444', 'farmer');

UPDATE `deliveryagent` SET `phoneNumber` = '073333333' WHERE `deliveryagent`.`phoneNumber` = '0716035548';
UPDATE `deliveryagent` SET `password` = '333' WHERE `deliveryagent`.`phoneNumber` = '073333333';
UPDATE `farmer` SET `phoneNumber` = '074444444' WHERE `farmer`.`phoneNumber` = '0752016924';
UPDATE `farmer` SET `password` = '444' WHERE `farmer`.`phoneNumber` = '074444444';
UPDATE `companystaff` SET `phoneNumber` = '072222222' WHERE `companystaff`.`phoneNumber` = '0715135934';
UPDATE `companystaff` SET `password` = '222' WHERE `companystaff`.`phoneNumber` = '072222222';
