-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2022 at 09:46 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `restaurant_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `restaurant_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `veg_only` tinyint(1) DEFAULT 0,
  `cost` varchar(255) DEFAULT 'HIGH',
  `cusine_types` varchar(255) NOT NULL,
  `is_open` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`restaurant_id`, `restaurant_name`, `address`, `veg_only`, `cost`, `cusine_types`, `is_open`, `createdAt`, `updatedAt`) VALUES
('17851587-faa3-11ec-bff2-98e7f430feee', 'Taj Hotel', 'Bombay Maharastha', 0, 'HIGH', 'south indian,north indian,italian,french,chinese', 1, '2022-07-03 09:36:09', '2022-07-03 09:36:09'),
('1785813c-faa3-11ec-bff2-98e7f430feee', 'sri sairam parlour', 'diamond park visakhapatnam', 1, 'HIGH', 'north indian,all typeof tiffins,curd rice', 1, '2022-07-03 09:36:09', '2022-07-03 09:36:09'),
('79a93c7c-faa3-11ec-bff2-98e7f430feee', 'Alpha Hotel', 'Jagadamba Visakhapatnam', 0, 'LOW', 'south indian,north indian,italian,chicken dum biryani,mutton dum biryani,tandoori,chicken tikka,tandoori roti', 1, '2022-07-03 09:38:23', '2022-07-03 09:38:23'),
('79a96df3-faa3-11ec-bff2-98e7f430feee', 'Bombay Hotel', 'Dabagardens visakhapatnam', 1, 'MEDIUM', 'south indian,north indian,chicken dum birayani,mutton dum biryani', 0, '2022-07-03 09:38:23', '2022-07-03 09:38:23'),
('c6aa6aa1-faa2-11ec-bff2-98e7f430feee', 'AKA WHITE HOUSE', '1710 H STREET NW', 0, 'HIGH', 'chicken dum biryani,mutton dum biryani,tandoori,chicken tikka', 1, '2022-07-03 09:22:27', '2022-07-03 09:22:27'),
('c6aa9632-faa2-11ec-bff2-98e7f430feee', 'IVY CITY HOTEL', '1615 NEW YORK AVENUE NE', 1, 'LOW', 'tiffins,french,south indian', 1, '2022-07-03 09:22:27', '2022-07-03 09:22:27'),
('ea9d814f-faa3-11ec-bff2-98e7f430feee', 'tenali hotel', 'complex visakhapatnam', 1, 'HIGH', 'tiffins,paneer biryani', 1, '2022-07-03 09:41:05', '2022-07-03 09:41:05'),
('ea9db8e4-faa3-11ec-bff2-98e7f430feee', 'THE DARCY HOTEL', '1515 RHODE ISLAND AVENUE NW', 1, 'LOW', 'south indian,north indian,italian,french,chinese', 1, '2022-07-03 09:41:05', '2022-07-03 09:41:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`restaurant_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
