-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: roy-project
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `created_at` datetime(6) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'ROLE_USER',
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('2023-10-08 22:59:50.838153',1,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696785357/jiztwajabagkue8th6bt.jpg','neuvillette@gmail.com','$2a$10$MvMH0DkJc1UsOGQjfA3.4uQHw5HU5C.3Q1axOnkmmxM7EzAOYzu.6','ROLE_ADMIN','Neuvillette'),('2023-10-08 23:01:39.772210',2,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696781967/osjkp8mgbaycloucg6yw.jpg','hyhyne@gmail.com','$2a$10$iOpYELShTVVDW33p7oYXau3r3iQhGsAa7nm2SHI1i60rlGQbaQTMa','ROLE_USER','hyhyne'),('2023-10-08 23:02:16.527146',3,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696781855/zvrkqzxsnabgjxgnlgpa.png','kazuhahaha@gmail.com','$2a$10$ghOWKazhXmJDutcGLFWVIeggFmNasesuDEsB0w7jN/GfJArnND2mm','ROLE_USER','kazuha'),('2023-10-08 23:03:08.728008',4,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696782623/xq2orutx9djiq2fhycym.jpg','shogunmaidinh@gmail.com','$2a$10$X1yGO39slTAvZ4gCpD/Vtef.wgZnRsT0I.5v9ryafnXfAZKYzOP7G','ROLE_USER','longTrapBoiz'),('2023-10-08 23:03:59.761242',5,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696782864/hz90zbyz5quyz2avl7z1.jpg','nhanthubdsm@gmail.com','$2a$10$TPUEvhSgNg8grX8EtdrdOO7Nbp2VvQpilZ0ugcn8lzXvKn08Y7.rO','ROLE_USER','phong@nhan@thu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-09  1:04:37
