-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: roydb
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `view_count` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `describe_info` varchar(5000) DEFAULT NULL,
  `book_name` varchar(255) NOT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT 'PENDING',
  PRIMARY KEY (`id`),
  KEY `FK1wxwagv6cm3vjrxqhmv884hir` (`user_id`),
  CONSTRAINT `FK1wxwagv6cm3vjrxqhmv884hir` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (8,'2023-10-08 23:06:10.405963',1,1,'Giới thiệu về các nhân vật trong GENSHIN IMPACT','SƠ LƯỢC VỀ CÁC PLAYABLE CHARACTER TRONG GENSHIN IMPACT','https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696786024/ckhgfwh3gfuzp0sa98dz.jpg','APPROVED'),(9,'2023-10-09 00:28:29.182640',2,2,'Series những mẩu truyện ngắn kinh dị hack não.','Cryptic','https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696787838/rrp4lwqdinuqmelqfubv.jpg','APPROVED'),(8,'2023-10-09 01:02:28.817803',3,2,'Audio book Tát Dã [Ngang tàng]\nTác giả: Vu Triết\nChương: 1 - 20\nThể loại: đam mỹ, tâm lý xã hội, trưởng thành, vườn trường, 1x1, chữa lành.','Tát dã - Vu Triết','https://res.cloudinary.com/dhbx0nbwf/image/upload/v1696788203/l7zqhc9rmrceg2qcbpg7.jpg','APPROVED'),(0,'2023-10-20 00:40:40.436873',4,4,'Tồng hợp các câu chuyện cổ tích dành cho bé','Truyện cổ tích','https://res.cloudinary.com/dhbx0nbwf/image/upload/v1697738025/hffr9fjg2z48pkc253qv.jpg','APPROVED'),(0,'2023-10-20 01:06:44.640253',5,6,'Tổng hợp các câu chuyện ngụ ngôn trong và ngoài nước','Truyện ngụ ngôn','https://res.cloudinary.com/dhbx0nbwf/image/upload/v1697794804/u5gcarfwtrhfk03jo9ur.jpg','PENDING');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-20 17:54:02
