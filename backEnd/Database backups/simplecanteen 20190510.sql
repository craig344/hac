-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 10, 2019 at 10:04 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `simplecanteen`
--
CREATE DATABASE IF NOT EXISTS `simplecanteen` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `simplecanteen`;

-- --------------------------------------------------------

--
-- Table structure for table `canteen`
--

CREATE TABLE IF NOT EXISTS `canteen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(50) DEFAULT NULL,
  `startTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `endTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `rating` decimal(11,0) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `client_user`
--

CREATE TABLE IF NOT EXISTS `client_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `pay_balance` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `client_user`
--

INSERT INTO `client_user` (`id`, `user_id`, `pay_balance`) VALUES
(1, 1, 0),
(2, 2, 0),
(3, 5, 0),
(4, 7, 0),
(5, 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `description`, `price`, `category`, `available`, `updated_at`, `created_at`) VALUES
(1, 'new veg thali', 'same old veggies', 45, 'veg,new', 0, '2019-05-10 07:08:46', '2019-05-10 06:43:21'),
(2, 'fish thali', 'some fishy', 50, 'thali,fish', 1, '2019-05-10 09:53:45', '2019-05-10 09:53:45'),
(3, 'chicken fried rice', 'chk', 70, 'chicken,fr', 1, '2019-05-10 09:54:39', '2019-05-10 09:54:39');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer_id` bigint(20) NOT NULL,
  `total` float DEFAULT NULL,
  `item_count` int(11) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'active',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `total`, `item_count`, `status`, `updated_at`, `created_at`) VALUES
(1, 1, 65, 3, 'completed', '2019-05-10 07:47:26', '2019-05-10 07:25:59'),
(2, 1, 20, 2, 'active', '2019-05-10 07:27:34', '2019-05-10 07:27:34');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE IF NOT EXISTS `order_items` (
  `order_id` bigint(20) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`,`item_id`),
  KEY `item_id` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_id`, `item_id`, `quantity`, `rate`, `updated_at`, `created_at`) VALUES
(1, 1, NULL, 45, '2019-05-10 09:46:46', '2019-05-10 09:46:46'),
(2, 1, 2, 45, '2019-05-10 09:48:01', '2019-05-10 09:48:01'),
(2, 2, 2, 50, '2019-05-10 09:56:26', '2019-05-10 09:56:26'),
(2, 3, 1, 70, '2019-05-10 09:56:26', '2019-05-10 09:56:26');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_card_no` varchar(15) NOT NULL,
  `name` varchar(80) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(150) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(200) NOT NULL,
  `salt` varchar(50) NOT NULL,
  `passwordHash` varchar(150) NOT NULL,
  `approve_status` tinyint(1) NOT NULL DEFAULT '0',
  `user_type` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `salt` (`salt`),
  UNIQUE KEY `id_card_no` (`id_card_no`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `id_card_no`, `name`, `phone`, `email`, `dob`, `address`, `salt`, `passwordHash`, `approve_status`, `user_type`) VALUES
(1, 'a1', 'rohit customer', '9873215544', '', '0000-00-00', '', '055a4a95c9d2353e', '6f9651a0c01b3cd7cc7f51a07fc76181671bc304caba86d570f32e0dc8e16e787ccd9239929b75a4beeb32167f7f60c9712b3c2cc9f336a0cba1823a4e80a246', 0, 'customer'),
(2, 'a2', 'santan customer', '9877885543', '', '0000-00-00', '', '4e8466324ee2bfc8', '41d07fffc7d964bc31f1abbb026b7a382493f4cca8bcced3002998bd545a4d6566159a08e3ad21b774585564931dfa28d58bf8f35d4909d6292f295bcabe65d1', 0, 'customer'),
(5, 'a3', 'Ulhas Naik', '2233456754', '', '0000-00-00', '', 'c6e04ef0bf736efa', 'b4d01603edb3ac91decd5a84aa376b2735b9b0e130685924da587784be8bd4ddef798d5895a023d4331b21c0c6f44aadb5606abb9a3690414b6cd950d12e20e1', 0, 'customer'),
(7, 'a4', 'Kelsier Mist', '2233456756', '', '0000-00-00', '', '2a274e71a80db5c2', '3b68459a3d5be952e5d330796d0344a2c2dcf66fd7e43b945bf942a0b9f9176a71e6ff4ce9473e3878d6d66bf9c09b2d5a47a04376fcfad2fe433cc71a76f057', 0, 'customer'),
(8, '2233456756', 'Kelsier Mist', '', '', '0000-00-00', '', '86f0bc4c23ff5fb2', 'af9655efb199494581bfa2d1e0622cd7ce46af2d3b992b76136894f0cc80392774f0e9c2f2d59bd5960f1ae0a2af01ea6346e7316c5489fb1e1e27ccd07b9961', 0, 'customer'),
(11, 'skaa123456', 'Veden Union', '', '', '0000-00-00', '', '0eb07b3218e3d2e6', '9cf4aed87d7e5ff91c40a514c70656e8400633d2642b8c624cdf3a0b1cec738f1f1384bd4d7a354a0b5f9bd1060e2c55d7f17b2be0cfa0e1a878cc8d39ec1dd9', 0, 'kitchen');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `client_user`
--
ALTER TABLE `client_user`
  ADD CONSTRAINT `client_user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `client_user` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
