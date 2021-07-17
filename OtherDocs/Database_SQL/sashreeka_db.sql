-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2021 at 08:25 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sashreeka_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `farmerPhoneNumber` varchar(10) NOT NULL,
  `fertilizerId` int(11) NOT NULL,
  `content` text NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `compantstaff`
--

CREATE TABLE `compantstaff` (
  `userId` int(10) NOT NULL,
  `phoneNumber` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_bin NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `houseNumber` varchar(100) NOT NULL,
  `streetNumber` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `staffId` int(10) NOT NULL,
  `appointedDate` date NOT NULL,
  `nic` int(11) NOT NULL,
  `active` tinyint(4) NOT NULL,
  `roleId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `complaintId` int(10) NOT NULL,
  `content` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `phoneNumber` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`complaintId`, `content`, `subject`, `phoneNumber`) VALUES
(1, 'Check ', 'Check', '713705751'),
(2, 'Check ', 'Check', '713705751');

-- --------------------------------------------------------

--
-- Table structure for table `deliveries`
--

CREATE TABLE `deliveries` (
  `deliveryId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `famerPhoneNumber` varchar(10) NOT NULL,
  `deliveryAgentPhoneNumber` varchar(10) NOT NULL,
  `deliveryLoad` float NOT NULL,
  `distance` float NOT NULL,
  `deliveryAgentsPayment` float NOT NULL,
  `deliveryAgentsPaymentFlag` float NOT NULL,
  `dateTime` datetime NOT NULL,
  `deliveryRate` int(11) NOT NULL,
  `issue` varchar(255) NOT NULL,
  `confirmationFlag` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `deliveryagent`
--

CREATE TABLE `deliveryagent` (
  `userId` int(11) NOT NULL,
  `phoneNumber` varchar(10) NOT NULL,
  `email` int(11) NOT NULL,
  `password` int(11) NOT NULL,
  `fiirstName` int(11) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `houseNumber` varchar(100) NOT NULL,
  `streetNumber` int(100) NOT NULL,
  `city` varchar(255) NOT NULL,
  `availability` tinyint(4) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `drivingLicence` varchar(20) NOT NULL,
  `active` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `farmer`
--

CREATE TABLE `farmer` (
  `userId` int(10) NOT NULL,
  `phoneNumber` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` int(255) NOT NULL,
  `lastName` int(255) NOT NULL,
  `houseNumber` varchar(255) NOT NULL,
  `streetNumber` varchar(255) NOT NULL,
  `city` text NOT NULL,
  `loyaltyPoints` int(11) NOT NULL,
  `active` tinyint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer`
--

CREATE TABLE `fertilizer` (
  `fertilizerId` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `offer` float NOT NULL,
  `unitPrice` float NOT NULL,
  `unitWeight` int(11) NOT NULL,
  `photo` text NOT NULL,
  `stock` int(11) NOT NULL,
  `reOrderLevel` int(11) NOT NULL,
  `measurementUnit` varchar(3) NOT NULL,
  `caption` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fertilizer`
--

INSERT INTO `fertilizer` (`fertilizerId`, `name`, `description`, `offer`, `unitPrice`, `unitWeight`, `photo`, `stock`, `reOrderLevel`, `measurementUnit`, `caption`) VALUES
(1, 'Rock Phospate', 'It is sedimentary rock which contains high amount of phosphate minerals. It is used naturally to fix phosphate levels of soil.\r\nFlowers love an application of rock phosphate early in the season and will reward you with big, vibrant blooms. Roses really like rock dust and develop a stronger root system and more buds when it is used. You can also use rock phosphate to encourage healthy tree and lawn root system development.', 0, 3790, 9, '', 30, 10, 'kg', 'contains high amount of phosphate minerals. It is '),
(2, 'Vermicompost', 'It is a product of organic material degradation using various species of worms, to create a heterogeneous mixture of decomposing food waste.\r\n', 5, 1540, 5, '', 50, 15, 'kg', 'mixture of decomposing food waste.'),
(3, 'Manure', 'It is made from animal excreta(cow dung & goat droppings). Cattle Manure is a good source of nitrogen and organic carbon while goat manure is rich in nitrogen and potash.', 5, 1000, 5, '', 45, 10, 'kg', 'made from animal excreta(cow dung & goat droppings'),
(4, 'Chicken Litter', 'It consists of chicken manure and sawdust. It has high levels of nitrogen and potash. Consider superior for conditioning of soil for harvest than chemical fertilizers.\r\n\r\nA good soil amendment, chicken manure adds organic matter and increases the water holding capacity and beneficial biota in soil. A good fertilizer; chicken manure provides Nitrogen, Phosphorus and Potassium to you plants (more than horse, cow or steer manure).', 0, 1500, 5, '', 25, 5, 'kg', 'consists of chicken manure and sawdust'),
(5, 'Liter Seaweed', 'A unique combination of pure seaweed extract\r\nCan be sprayed directly onto foliage, or applied as a root drench\r\nPrevents yellowing (chlorosis) of leaves, especially in acid-low (calcifuge) plants', 5, 3050, 4, '', 20, 5, 'L', 'Fertilizer from seaweed'),
(6, 'MorBloom', 'Derived from Atlantic fish, phosphoric acid and potash, Alaska MorBloom stimulates exceptional budding and blooming on all flowering plants. Brightens colors in flowers and foliage and promotes vigorous root growth, too!\r\n\r\nAvailable in quart and gallon sizes.\r\n\r\nDIRECTIONS FOR USE:\r\nMix 1-3 Tbsp per gallon of water to encourage budding in flowers, vegetables and ornamental houseplants. Apply every three weeks during the growing season.\r\n\r\nDerived from phosphoric acid, muriate of potash and seagoing fish emulsion.', 10, 4990, 10, '', 20, 5, 'L', 'stimulates blooming on flowering plants'),
(7, 'Bio Gold', 'Bio Gold is a liquid formulation containing a group of beneficial microorganisms such as nitrogen fixing and plant disease controlling bacteria.', 5, 2679, 4, '', 50, 15, 'L', 'nitrogen fixing, plant disease controlling bacteri'),
(8, 'Bio Vaccine', 'The product is made with natural bio control fungal agent Trichoderma viride. It is simply helps to prevent the plant from rot & wilt diseases at any time. Once applied, Trichoderma viride grows over the pathogens that cause root rot, stem rot, seed rot, fruit rot and wilt diseases and killing by destroying the pathogen cell structure.', 10, 2780, 4, '', 40, 6, 'L', 'helps to prevent the plant from rot & wilt disease'),
(9, 'Bio Phos', 'Phosphorous is an important nutrient for plants and microorganisms. Bio Phos® is a liquid formulation containing phosphorous solubilizing bacterium Bacillus Megatherium.', 5, 2670, 4, '', 30, 5, 'L', 'formulation containing phosphorous');

-- --------------------------------------------------------

--
-- Table structure for table `fertilizercategory`
--

CREATE TABLE `fertilizercategory` (
  `fertilizerCategoryId` int(11) NOT NULL,
  `description` text NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fertilizerferlilizercategory`
--

CREATE TABLE `fertilizerferlilizercategory` (
  `fertilizerId` int(10) NOT NULL,
  `fertilizerCategoryId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notificationId` int(10) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `dateTime` datetime NOT NULL,
  `notificationType` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notificationreceive`
--

CREATE TABLE `notificationreceive` (
  `phoneNumber` varchar(10) NOT NULL,
  `notificationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ordercontainsfertilizer`
--

CREATE TABLE `ordercontainsfertilizer` (
  `orderId` int(11) NOT NULL,
  `fertilizerId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(10) NOT NULL,
  `amount` float NOT NULL,
  `deliveryAddress` varchar(255) NOT NULL,
  `quickFlag` tinyint(4) NOT NULL,
  `offer` float NOT NULL,
  `receiverName` int(11) NOT NULL,
  `deliveryCharge` float NOT NULL,
  `status` int(11) NOT NULL,
  `farmerPhoneNumber` varchar(10) NOT NULL,
  `staffPhoneNumber` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `orderId` int(11) NOT NULL,
  `paymentType` varchar(255) NOT NULL,
  `paymentDateTime` datetime NOT NULL,
  `transactionStatus` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `rateId` int(11) NOT NULL,
  `farmerPhoneNumber` varchar(10) NOT NULL,
  `fertilizerId` int(11) NOT NULL,
  `rate` int(11) NOT NULL DEFAULT 0,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleId` int(11) NOT NULL,
  `addOrders` tinyint(4) NOT NULL DEFAULT 0,
  `manageSales` tinyint(4) NOT NULL DEFAULT 0,
  `manageStocks` tinyint(4) NOT NULL DEFAULT 0,
  `manageDeliveries` tinyint(4) NOT NULL DEFAULT 0,
  `manageLoyaltyPoints` tinyint(4) NOT NULL DEFAULT 0,
  `managePayments` tinyint(4) NOT NULL DEFAULT 0,
  `createCompanyStaff` tinyint(4) NOT NULL DEFAULT 0,
  `addOffers` tinyint(4) NOT NULL DEFAULT 0,
  `roleName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `deliveryAgentPhoneNumber` varchar(10) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `vehicleTypeId` int(11) NOT NULL,
  `maxLoad` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vehicletype`
--

CREATE TABLE `vehicletype` (
  `vehicleTypeId` int(11) NOT NULL,
  `unitPrice` int(11) NOT NULL,
  `fuelCat` int(11) NOT NULL,
  `effectiveDate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentId`,`farmerPhoneNumber`,`fertilizerId`),
  ADD KEY `fertilizerId` (`fertilizerId`),
  ADD KEY `farmerPhoneNumber` (`farmerPhoneNumber`);

--
-- Indexes for table `compantstaff`
--
ALTER TABLE `compantstaff`
  ADD PRIMARY KEY (`phoneNumber`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `assign_role` (`roleId`);

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`complaintId`);

--
-- Indexes for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`deliveryId`,`orderId`,`famerPhoneNumber`,`deliveryAgentPhoneNumber`),
  ADD KEY `farmer_delivery_fk` (`famerPhoneNumber`),
  ADD KEY `deliveryAgent_delivery_fk` (`deliveryAgentPhoneNumber`);

--
-- Indexes for table `deliveryagent`
--
ALTER TABLE `deliveryagent`
  ADD PRIMARY KEY (`phoneNumber`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `farmer`
--
ALTER TABLE `farmer`
  ADD PRIMARY KEY (`phoneNumber`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `userId` (`userId`);

--
-- Indexes for table `fertilizer`
--
ALTER TABLE `fertilizer`
  ADD PRIMARY KEY (`fertilizerId`);

--
-- Indexes for table `fertilizercategory`
--
ALTER TABLE `fertilizercategory`
  ADD PRIMARY KEY (`fertilizerCategoryId`);

--
-- Indexes for table `fertilizerferlilizercategory`
--
ALTER TABLE `fertilizerferlilizercategory`
  ADD PRIMARY KEY (`fertilizerId`,`fertilizerCategoryId`),
  ADD KEY `fertilizerCategoryId` (`fertilizerCategoryId`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notificationId`);

--
-- Indexes for table `notificationreceive`
--
ALTER TABLE `notificationreceive`
  ADD PRIMARY KEY (`phoneNumber`,`notificationId`);

--
-- Indexes for table `ordercontainsfertilizer`
--
ALTER TABLE `ordercontainsfertilizer`
  ADD PRIMARY KEY (`orderId`,`fertilizerId`),
  ADD KEY `fertilizerId` (`fertilizerId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `farmerPhoneNumber` (`farmerPhoneNumber`),
  ADD KEY `staffPhoneNumber` (`staffPhoneNumber`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`rateId`,`farmerPhoneNumber`,`fertilizerId`),
  ADD UNIQUE KEY `rateId` (`rateId`),
  ADD KEY `farmerPhoneNumber` (`farmerPhoneNumber`),
  ADD KEY `fertilizerId` (`fertilizerId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`deliveryAgentPhoneNumber`,`vehicleId`,`vehicleTypeId`),
  ADD UNIQUE KEY `vehicleId` (`vehicleId`),
  ADD KEY `vehicleTypeId` (`vehicleTypeId`);

--
-- Indexes for table `vehicletype`
--
ALTER TABLE `vehicletype`
  ADD PRIMARY KEY (`vehicleTypeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `compantstaff`
--
ALTER TABLE `compantstaff`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `complaintId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `deliveryagent`
--
ALTER TABLE `deliveryagent`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `farmer`
--
ALTER TABLE `farmer`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fertilizer`
--
ALTER TABLE `fertilizer`
  MODIFY `fertilizerId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `fertilizercategory`
--
ALTER TABLE `fertilizercategory`
  MODIFY `fertilizerCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `rateId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `vehicleId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicletype`
--
ALTER TABLE `vehicletype`
  MODIFY `vehicleTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`fertilizerId`) REFERENCES `fertilizer` (`fertilizerId`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`farmerPhoneNumber`) REFERENCES `farmer` (`phoneNumber`);

--
-- Constraints for table `compantstaff`
--
ALTER TABLE `compantstaff`
  ADD CONSTRAINT `assign_role` FOREIGN KEY (`roleId`) REFERENCES `role` (`roleId`);

--
-- Constraints for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveryAgent_delivery_fk` FOREIGN KEY (`deliveryAgentPhoneNumber`) REFERENCES `deliveryagent` (`phoneNumber`),
  ADD CONSTRAINT `farmer_delivery_fk` FOREIGN KEY (`famerPhoneNumber`) REFERENCES `farmer` (`phoneNumber`);

--
-- Constraints for table `fertilizerferlilizercategory`
--
ALTER TABLE `fertilizerferlilizercategory`
  ADD CONSTRAINT `fertilizerferlilizercategory_ibfk_1` FOREIGN KEY (`fertilizerId`) REFERENCES `fertilizer` (`fertilizerId`),
  ADD CONSTRAINT `fertilizerferlilizercategory_ibfk_2` FOREIGN KEY (`fertilizerCategoryId`) REFERENCES `fertilizercategory` (`fertilizerCategoryId`);

--
-- Constraints for table `notificationreceive`
--
ALTER TABLE `notificationreceive`
  ADD CONSTRAINT `notification_reciever` FOREIGN KEY (`phoneNumber`) REFERENCES `farmer` (`phoneNumber`),
  ADD CONSTRAINT `notification_reciever2` FOREIGN KEY (`phoneNumber`) REFERENCES `deliveryagent` (`phoneNumber`),
  ADD CONSTRAINT `notification_reciever3` FOREIGN KEY (`phoneNumber`) REFERENCES `compantstaff` (`phoneNumber`);

--
-- Constraints for table `ordercontainsfertilizer`
--
ALTER TABLE `ordercontainsfertilizer`
  ADD CONSTRAINT `ordercontainsfertilizer_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`),
  ADD CONSTRAINT `ordercontainsfertilizer_ibfk_2` FOREIGN KEY (`fertilizerId`) REFERENCES `fertilizer` (`fertilizerId`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`farmerPhoneNumber`) REFERENCES `farmer` (`phoneNumber`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`staffPhoneNumber`) REFERENCES `compantstaff` (`phoneNumber`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`farmerPhoneNumber`) REFERENCES `farmer` (`phoneNumber`),
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`fertilizerId`) REFERENCES `fertilizer` (`fertilizerId`);

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_deliveryAgent` FOREIGN KEY (`deliveryAgentPhoneNumber`) REFERENCES `deliveryagent` (`phoneNumber`),
  ADD CONSTRAINT `vehicle_vehicleType` FOREIGN KEY (`vehicleTypeId`) REFERENCES `vehicletype` (`vehicleTypeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
