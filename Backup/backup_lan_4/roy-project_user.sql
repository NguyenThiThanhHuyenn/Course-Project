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
  `user_name` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'USER',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('2023-09-19 22:16:10.758630',1,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1695136620/ea10fqgdiuw3vnavc1p7.jpg','hau27@gmail.com','654321','hau','ROLE_ADMIN'),('2023-09-19 22:16:19.110645',2,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1695136642/u054rabochcy2imhk8iy.jpg','hyhy@gmail.com','123456','hyhy','ROLE_USER'),('2023-10-01 17:45:57.222343',11,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696178000/yiorbxjnspewoivyt5pz.jpg','neuvillette@gmail.com','$2a$10$/FMVP81IyQi1zeBZzakUkukT3PzrJVfty/jo3SG4r.FJHfxUdHqgu','Neuvillette','ROLE_ADMIN'),('2023-10-01 23:05:09.105363',12,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696176462/dj88nfprzc0ugovzxvnx.jpg','hyhyne@gmail.com','$2a$10$9FrqF10TNmnIttG0.vnmN.HSNSMiW/7BSxeUSrCRpXlGNZhRbsGku','hyhyne','ROLE_USER'),('2023-10-01 23:12:29.868741',13,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696178077/z3axrzafnypp305f9kqx.jpg','DungNe@gmail.com','$2a$10$DxBbczox/P62KsVtFJHw1uATTJWrrgaw9cJA1piBWm6FV5To5o/W6','DungNe','ROLE_USER'),('2023-10-01 23:22:00.952182',15,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696178176/qz4jtr72yfdzcqgs93w9.jpg','DungNeHye@gmail.com','$2a$10$s6nidPdxYm.rymarLBmVnOra08j0s6L1ic9QRD7Z323z654sIZ0D6','DungNeHy','ROLE_USER'),('2023-10-01 23:24:53.476936',16,'https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696178200/b4vlqmsk66qs23enuq9s.jpg','DungNuaNe@gmail.com','$2a$10$x8G/OJZtpcIfvUmbAd3pAug7oFvX2jNBN6o/P.0iHqZeGnJzvu5wG','DungNuaNe','ROLE_USER');
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

-- Dump completed on 2023-10-06 16:12:52
