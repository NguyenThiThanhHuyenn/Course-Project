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
-- Table structure for table `chapter`
--

DROP TABLE IF EXISTS `chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapter` (
  `book_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `chapter_name` varchar(255) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`),
  KEY `FKfxaijiug52tyrl5ifextmcfqb` (`book_id`),
  CONSTRAINT `FKfxaijiug52tyrl5ifextmcfqb` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapter`
--

LOCK TABLES `chapter` WRITE;
/*!40000 ALTER TABLE `chapter` DISABLE KEYS */;
INSERT INTO `chapter` VALUES (1,1,'Kazuha Kaedehara','Lần đầu gặp Kaedehara Kazuha, hầu như ai cũng nghĩ rằng cậu ấy chỉ là một thủy thủ thực tập của đội thuyền Nam Thập Tự.\nDẫu sao thì người thiếu niên này tính tình hòa nhã, khi rảnh rỗi lại thích ngâm thơ, dáng vẻ lúc nói chuyện cũng vô cùng khoan thai. Đâu ai ngờ được cậu ấy chính là nhân vật nguy hiểm bị Inazuma Shogunate truy nã chứ?\nNgay cả thuyền trưởng Beidou có mắt nhìn người chuẩn xác, trước khi quyết định thu nhận Kazuha, cũng không nhìn ra thiếu niên nhã nhặn này lại có thể xuất đao nhanh nhạy như thế, rõ ràng đây là một kẻ đã từng trải qua hàng trăm trận chiến.\nKhông biết phong ba bão táp đã mài giũa gai góc của vị thiếu niên này hay chính bản thân anh đã tự giấu đi tài năng của mình.\nDanh xưng người duy nhất đỡ được lưỡi đao của Inazuma Shogunate liệu có phải hữu danh vô thực?'),(1,2,'Neuvillette','Là một Thẩm Phán, Neuvillette làm việc công tư phân minh, không để tình riêng xen lẫn vào việc xử án. Ngài thẩm phán rất tinh tường, có thể nghe thấy tiếng thì thầm của Paimon và có thể suy ra tình tiết từ những chứng cứ trong khi xét xử. Cho dù suy đoán hay linh cảm của ngài thẩm phán về vụ án ra sao, ngài thẩm phán cũng tuân theo phán quyết cuối cùng của Cỗ Máy Chỉ Thị Phán Quyết.\nVị trí Thẩm Phán Tối Cao của Neuvillette gắn chặt với Thủy Thần khiến danh tiếng Neuvillette vang khắp Fontaine. Dù vậy, quý ngài thẩm phán không biết cách biểu đạt cảm xúc và ứng xử của con người. Trước việc cha của Navia là Callas qua đời, Neuvillette lúc đầu đã xin lỗi mấy lần, nhưng Navia đã nhận ra sự thiếu cảm xúc trong lời xin lỗi và rất bực. Neuvillette hiếm khi đi ra ngoài, lúc nào đi ra ngoài cũng là đứng cách xa con người. Tuy nhiên, khi tiếp xúc với Melusine, ngài thẩm phán rất dễ gần đến mức Melusine coi Neuvillette là người cha lý tưởng của mình.\nVì là nhân vật mới xuất hiện nên thông tin sẽ tiếp tục được cập nhật...'),(2,3,'1','Năm tôi 4 tuổi, bố rủ tôi đi chơi và đèo tôi trên chiếc xe đạp cũ kỹ vào trong một ngôi nhà lạ… \nKhi bước vào ngôi nhà, tôi giật nảy mình:Trời ơi, bố định bán mình cho bọn lột da người.  Xung quanh là đầy đủ những dụng cụ nhìn thật tởm lợm, họ đè tôi lên ghế và cột cổ tôi lại, một trong số họ cầm thứ gì đó kêu tè tè.\n\"Không\", tôi giãy giụa. Tôi nhìn ông ta, ông ta cười đểu, ông ta cầm con dao lên và… Trong khoảnh khắc sinh tử đó, tôi với được chiếc kéo bên cạnh và chĩa vào ông ta:\"Phập\".\nTôi là kẻ giết người nhưng tại sao họ lại bắt bố tôi?'),(2,4,'2','Ngày nào tập thể dục xong tôi cũng vào nhà tắm hơi công cộng để thư giãn. Một hôm khi tôi bước vào phòng xông hơi khoảng 1 phút thì có một người đàn ông bước vào.\n\"Để xem ai sẽ phải ra ngoài trước tiên,\" tôi thầm nghĩ bụng. Đây là một thói quen khó bỏ của tôi.\n10 phút trôi qua, gã đàn ông ngồi cùng tôi là một tên rất to béo, chắc hắn phải nặng đến cả tạ mất.\n15 phút nữa trôi qua, tên béo kia mồ hôi túa đầm đìa như tắm vậy mà vẫn không chịu bỏ cuộc. Khốn kiếp thật.\n18 phút trôi qua rồi, cuối cùng gã béo múp ấy cũng chịu nhúc nhích, hắn lảo đảo đứng dậy và bước về phía cửa ra vào.\nThắng rồi! Tôi giơ hai nắm đấm lên trời, lòng hết sức tự hào về bản thân.\n………………………………………………\nKhi tôi tỉnh lại, phát hiện ra mình đang ở một căn phòng lạ lẫm, và một người phụ nữ lớn tuổi đang nhìn xuống tôi. Đó là bà nhân viên phục vụ của nhà tắm công cộng này.\nBà ta nói: \"Khi tôi đi kiểm tra thì phát hiện anh nằm ngất ngoài cửa phòng tắm hơi đấy.\"\nXem ra ở trong đó lâu quá nên tôi bị choáng thì phải.\n\"Lần sau chú ý nhé, đưa cậu vào đây làm tôi đau hết cả mình mẩy.\"\nTôi vờ như không nghe thấy, cảm ơn bà nhân viên rồi lấy đồ ra về.');
/*!40000 ALTER TABLE `chapter` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-19 22:35:00
