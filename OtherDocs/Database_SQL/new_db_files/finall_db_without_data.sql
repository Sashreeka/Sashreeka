-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2021 at 10:20 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `farmerPhoneNumber` varchar(13) NOT NULL,
  `fertilizerId` int(11) NOT NULL,
  `content` text NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `companystaff`
--

CREATE TABLE `companystaff` (
  `userId` int(10) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_bin NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `houseNumber` varchar(100) NOT NULL,
  `streetName` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `staffId` int(10) NOT NULL,
  `appointedDate` date NOT NULL,
  `nic` varchar(255) NOT NULL,
  `active` tinyint(4) NOT NULL,
  `roleId` int(10) NOT NULL,
  `profileimage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Triggers `companystaff`
--
DELIMITER $$
CREATE TRIGGER `addStaffToUser` BEFORE INSERT ON `companystaff` FOR EACH ROW INSERT INTO user(phoneNumber, password, userCategory) VALUE (NEW.phoneNumber,NEW.password,'staff')
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `complaintId` int(10) NOT NULL,
  `orderId` int(11) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `deliveryNotRecieved` tinyint(4) NOT NULL,
  `wrongQualityOfOrderedProducts` tinyint(4) NOT NULL,
  `differentProductsRecieved` tinyint(4) NOT NULL,
  `billingOrPaymentMatters` tinyint(4) NOT NULL,
  `other` tinyint(4) NOT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `deliveries`
--

CREATE TABLE `deliveries` (
  `deliveryId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `famerPhoneNumber` varchar(13) NOT NULL,
  `deliveryAgentPhoneNumber` varchar(13) NOT NULL,
  `deliveryLoad` float NOT NULL,
  `distance` float NOT NULL,
  `deliveryAgentsPayment` float NOT NULL,
  `deliveryAgentsPaymentFlag` tinyint(4) DEFAULT NULL,
  `deliveryassigneddate` datetime NOT NULL,
  `deliveryconfirmdate` datetime NOT NULL,
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
  `phoneNumber` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `houseNumber` varchar(100) NOT NULL,
  `streetName` varchar(100) NOT NULL,
  `city` varchar(255) NOT NULL,
  `availability` tinyint(4) NOT NULL,
  `nic` varchar(100) NOT NULL,
  `drivingLicence` varchar(100) NOT NULL,
  `active` tinyint(4) NOT NULL,
  `profileimage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Triggers `deliveryagent`
--
DELIMITER $$
CREATE TRIGGER `addDeliveryAgentToUser` BEFORE INSERT ON `deliveryagent` FOR EACH ROW INSERT INTO user(phoneNumber, password, userCategory) VALUE (NEW.phoneNumber,NEW.password,'deliveryAgent')
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `farmer`
--

CREATE TABLE `farmer` (
  `userId` int(10) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `houseNumber` varchar(100) NOT NULL,
  `streetName` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `loyaltyPoints` int(11) NOT NULL DEFAULT 0,
  `active` tinyint(11) NOT NULL DEFAULT 0,
  `profileimage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Triggers `farmer`
--
DELIMITER $$
CREATE TRIGGER `addFarmerToUser` BEFORE INSERT ON `farmer` FOR EACH ROW INSERT INTO user(phoneNumber, password, userCategory) VALUE (NEW.phoneNumber,NEW.password,'farmer')
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer`
--

CREATE TABLE `fertilizer` (
  `fertilizerId` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `offer` float NOT NULL DEFAULT 0,
  `unitPrice` float NOT NULL,
  `unitWeight` float NOT NULL,
  `photo` text NOT NULL,
  `stock` int(11) NOT NULL,
  `reOrderLevel` int(11) NOT NULL,
  `measurementUnit` varchar(3) NOT NULL,
  `caption` varchar(50) NOT NULL,
  `arrivalTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `dateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `notificationType` varchar(255) DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notificationreceive`
--

CREATE TABLE `notificationreceive` (
  `phoneNumber` varchar(13) NOT NULL,
  `notificationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ordercontainsfertilizer`
--

CREATE TABLE `ordercontainsfertilizer` (
  `orderId` int(11) NOT NULL,
  `fertilizerId` int(11) NOT NULL,
  `fertilizerName` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `weight` float NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(10) NOT NULL,
  `amount` float NOT NULL,
  `houseNumber` varchar(255) NOT NULL,
  `streetName` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `quickFlag` tinyint(4) NOT NULL,
  `receiverName` varchar(255) NOT NULL,
  `deliveryCharge` float NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `ordereddate` datetime NOT NULL DEFAULT current_timestamp(),
  `graceenddate` datetime DEFAULT NULL,
  `farmerPhoneNumber` varchar(13) NOT NULL,
  `staffPhoneNumber` varchar(13) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `orderId` int(11) NOT NULL,
  `paymentType` varchar(255) NOT NULL,
  `paymentDateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `transactionStatus` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `rateId` int(11) NOT NULL,
  `farmerPhoneNumber` varchar(13) NOT NULL,
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
  `roleName` varchar(255) NOT NULL,
  `addOrders` tinyint(4) NOT NULL DEFAULT 0,
  `manageSales` tinyint(4) NOT NULL DEFAULT 0,
  `manageStocks` tinyint(4) NOT NULL DEFAULT 0,
  `manageDeliveries` tinyint(4) NOT NULL DEFAULT 0,
  `manageLoyaltyPoints` tinyint(4) NOT NULL DEFAULT 0,
  `managePayments` tinyint(4) NOT NULL DEFAULT 0,
  `createCompanyStaff` tinyint(4) NOT NULL DEFAULT 0,
  `addOffers` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `password` text NOT NULL,
  `userCategory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `deliveryAgentPhoneNumber` varchar(13) NOT NULL,
  `vehicleId` varchar(30) NOT NULL,
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
  `fuelCat` varchar(255) NOT NULL,
  `effectiveDate` datetime NOT NULL
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
-- Indexes for table `companystaff`
--
ALTER TABLE `companystaff`
  ADD PRIMARY KEY (`phoneNumber`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `assign_role` (`roleId`);

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`complaintId`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `phoneNumber` (`phoneNumber`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`deliveryId`,`orderId`,`famerPhoneNumber`,`deliveryAgentPhoneNumber`),
  ADD KEY `farmer_delivery_fk` (`famerPhoneNumber`),
  ADD KEY `deliveryAgent_delivery_fk` (`deliveryAgentPhoneNumber`),
  ADD KEY `orderId` (`orderId`);

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
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`phoneNumber`);

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
-- AUTO_INCREMENT for table `companystaff`
--
ALTER TABLE `companystaff`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `complaintId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `fertilizerId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fertilizercategory`
--
ALTER TABLE `fertilizercategory`
  MODIFY `fertilizerCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notificationId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(10) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

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
-- Constraints for table `companystaff`
--
ALTER TABLE `companystaff`
  ADD CONSTRAINT `assign_role` FOREIGN KEY (`roleId`) REFERENCES `role` (`roleId`);

--
-- Constraints for table `complaints`
--
ALTER TABLE `complaints`
  ADD CONSTRAINT `complaints_ibfk_2` FOREIGN KEY (`phoneNumber`) REFERENCES `farmer` (`phoneNumber`),
  ADD CONSTRAINT `complaints_ibfk_3` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`);

--
-- Constraints for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`),
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
  ADD CONSTRAINT `notification_reciever3` FOREIGN KEY (`phoneNumber`) REFERENCES `companystaff` (`phoneNumber`);

--
-- Constraints for table `ordercontainsfertilizer`
--
ALTER TABLE `ordercontainsfertilizer`
  ADD CONSTRAINT `ordercontainsfertilizer_ibfk_2` FOREIGN KEY (`fertilizerId`) REFERENCES `fertilizer` (`fertilizerId`),
  ADD CONSTRAINT `ordercontainsfertilizer_ibfk_3` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`farmerPhoneNumber`) REFERENCES `farmer` (`phoneNumber`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`staffPhoneNumber`) REFERENCES `companystaff` (`phoneNumber`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`);

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
