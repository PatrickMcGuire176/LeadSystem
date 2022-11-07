CREATE DATABASE  IF NOT EXISTS `sys` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sys`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: sys
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1324 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1234,'Cvent'),(1235,'Sanofi'),(1236,'Sanofi'),(1237,'Sanofii'),(1238,'Sanofii'),(1239,'Sanofiii'),(1240,'Sasdf'),(1241,'Sasdf'),(1242,'15123022'),(1243,'15123023'),(1244,'Anothercompany'),(1245,''),(1246,'Amazonn'),(1247,'Amazonnn'),(1248,'Amazonnnn'),(1249,'Amazon5'),(1250,NULL),(1251,NULL),(1252,'Amazon6'),(1253,NULL),(1254,NULL),(1255,'Amazon9'),(1256,'Amazon10'),(1257,'asdf'),(1258,'Amazon11'),(1259,'Amazon8'),(1260,'Amazon12'),(1261,'Amazon13'),(1262,'Amazon14'),(1263,'Amazon15'),(1264,'Amazon16'),(1265,'Amazon17'),(1266,'Amazon18'),(1267,'Amazon19'),(1268,'Amazon20'),(1269,'Amazon21'),(1270,'Amazon22'),(1271,'Amazon23'),(1272,'Amazon24'),(1273,'Amazon25'),(1274,'Amazon26'),(1275,'Amazon28'),(1276,'Amazon29'),(1277,'Amazon30'),(1278,'Amazon31'),(1279,'Amazon32'),(1280,'Amazon33'),(1281,'Amazon35'),(1282,'Amazon36'),(1283,'Amazon37'),(1284,'Amazon39'),(1285,'Amazon40'),(1286,'Amazon41'),(1287,'Amazon42'),(1288,'Amazon43'),(1289,'Amazon44'),(1290,'Amazon45'),(1291,'Amazon1345'),(1292,'2345345'),(1293,'Amazon46'),(1294,'Amazon47'),(1295,'asdfasdfasdf'),(1296,'Amazon48'),(1297,'Amazon49'),(1298,'Amazon50'),(1299,'Amazon51'),(1300,'Amazon52'),(1301,'Amazon53'),(1302,'Amazon54'),(1303,'Amazon01'),(1304,'Amazon57'),(1305,'Amazon60'),(1306,'Amazon61'),(1307,'Amazon62'),(1308,'Amazon63'),(1309,'Amazon64'),(1310,'Amazon65'),(1311,'Amazon66'),(1312,'Amazon70'),(1313,'Amazon71'),(1314,'amazon90'),(1315,'amazon100'),(1316,'amazon101'),(1317,'Amazon1'),(1318,'Amazon2'),(1319,'asdfasdf'),(1320,'asdfiyas'),(1321,'BW'),(1322,'asdfaasdfasdfsdafasdfsda'),(1323,'asdfasdfasdfasdf');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `status_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1234665 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (123456,'Patrick','McGuire','pmcguire@gmail.com','1'),(123457,'John','Smith','JohnSmith@gmail.com','1'),(1234575,'','','test123@gmail.com',NULL),(1234577,'Patrick','McG123','test124@gmail.com','1'),(1234579,'Patrick','McG123','test125@gmail.com','1'),(1234580,'Patrick','McG123','test126@gmail.com',NULL),(1234581,'Patrick','McG123','test127@gmail.com',NULL),(1234582,'Patrick','McG123','test128@gmail.com',NULL),(1234583,'Patrick','McG123','test129@gmail.com',NULL),(1234584,'','','',NULL),(1234585,'Test','User','Test134985745@gmail.com',NULL),(1234586,'Test','User','Test134985746@gmail.com',NULL),(1234587,'Test','User','Test134985747@gmail.com',NULL),(1234588,'Test','User','Test134985748@gmail.com',NULL),(1234589,'Test','User','Test134985749@gmail.com',NULL),(1234590,'Test','User','Test4@gmail.com',NULL),(1234591,'Test','User','Test5@gmail.com',NULL),(1234592,'Test','User','Test6@gmail.com',NULL),(1234593,'Patrick','McGuire','Test9@gmail.com',NULL),(1234594,'Test','User','Test10@gmail.com',NULL),(1234595,'asdf','asdf','asdf',NULL),(1234596,'asdf','asdf','asdf@asdf.com',NULL),(1234597,'asf','asdf','Test11@gmail.com',NULL),(1234598,'Patrick','McGuire','Test8@gmail.com',NULL),(1234599,'Patrick','McGuire','Test12@gmail.com',NULL),(1234600,'Patrick','McGuire','Test13@gmail.com',NULL),(1234601,'Patrick','McGuire','Test14@gmail.com',NULL),(1234602,'Patrick','McGuire','Test15@gmail.com',NULL),(1234603,'Patrick','McGuire','Test16@gmail.com',NULL),(1234604,'Patrick','McGuire','Test17@gmail.com',NULL),(1234605,'Patrick','McGuire','Test18@gmail.com',NULL),(1234606,'Patrick','McGuire','Test19@gmail.com',NULL),(1234607,'Patrick','McGuire','Test20@gmail.com',NULL),(1234608,'Patrick','McGuire','Test21@gmail.com',NULL),(1234609,'Patrick','McGuire','Test22@gmail.com',NULL),(1234610,'Patrick','McGuire','Test23@gmail.com',NULL),(1234611,'Patrick','McGuire','Test24@gmail.com',NULL),(1234612,'Patrick','McGuire','Test25@gmail.com',NULL),(1234613,'Patrick','McGuire','Test26@gmail.com',NULL),(1234614,'Patrick','McGuire','Test28@gmail.com',NULL),(1234615,'Patrick','McGuire','Test29@gmail.com',NULL),(1234616,'Patrick','McGuire','Test30@gmail.com',NULL),(1234617,'Patrick','McGuire','Test31@gmail.com',NULL),(1234618,'Patrick','McGuire','Test32@gmail.com',NULL),(1234619,'Patrick','McGuire','Test33@gmail.com',NULL),(1234620,'Patrick','McGuire','Test35@gmail.com',NULL),(1234621,'Patrick','McGuire','Test36@gmail.com',NULL),(1234622,'Patrick','McGuire','Test37@gmail.com',NULL),(1234623,'Patrick','McGuire','Test38@gmail.com',NULL),(1234624,'Patrick','McGuire','Test39@gmail.com',NULL),(1234625,'Patrick','McGuire','Test40@gmail.com',NULL),(1234626,'Patrick','McGuire','Test41@gmail.com',NULL),(1234627,'Patrick','McGuire','Test42@gmail.com',NULL),(1234628,'Patrick','McGuire','Test43@gmail.com',NULL),(1234629,'Patrick','McGuire','Test44@gmail.com',NULL),(1234630,'Patrick','McGuire','Test45@gmail.com',NULL),(1234631,'Patrick','McGuire','Test2345423@gmail.com',NULL),(1234632,'Test','User','Test46@gmail.com',NULL),(1234633,'Patrick','McGuire','Test47@gmail.com',NULL),(1234634,'asdf','asdf','asdf1234@asdf.com',NULL),(1234635,'Patrick','McGuire','Test48@gmail.com',NULL),(1234636,'Patrick','McGuire','test49@gmail.com',NULL),(1234637,'Patrick','McGuire','test50@gmail.com',NULL),(1234638,'Patrick','Mcg','test51@gmail.com',NULL),(1234639,'Patrick','McGuire','test52@gmail.com',NULL),(1234640,'Patrick','McGuire','test53@gmail.com',NULL),(1234641,'Patrick','McGuire','test54@gmail.com',NULL),(1234642,'Test','User','Test57@gmail.com',NULL),(1234643,'Test','User','Test60@gmail.com',NULL),(1234644,'Test','User','Test61@gmail.com',NULL),(1234645,'Patrick','McGuire','Test62@gmail.com',NULL),(1234646,'Patrick','McGuire','Test63@gmail.com',NULL),(1234647,'Patrick','McGuire','Test64@gmail.com',NULL),(1234648,'Patrick','McGuire','Test65@gmail.com',NULL),(1234649,'Patrick','McGuire','test66@gmail.com',NULL),(1234650,'Patrick','McGuire','test70@gmail.com',NULL),(1234651,'Patrick','McGuire','Test71@gmail.com',NULL),(1234652,'Patrick','McGuire','test80@gmail.com',NULL),(1234653,'patrick','mcguire','test100@gmail.com',NULL),(1234654,'patrick','mcguire','test101@gmail.com',NULL),(1234655,'patrick','mcguire','test1@gmail.com',NULL),(1234656,'Patrick','McGuire','test2@gmail.com',NULL),(1234657,'Patrick','McGuire','asdfa@asd.com',NULL),(1234658,'Patrick','asdf','asdf@asdf1.com',NULL),(1234659,'asdfasdfsadf','asdf','a@a.com',NULL),(1234660,'Patrick','McGuire','patrickmcguire176@gmail.com',NULL),(1234661,'Patrick','McGuire','patrick@bweventstech.com',NULL),(1234662,'Patrick','McGuire','patrickmcguire176+1@gmail.com',NULL),(1234663,'Patrick','asdf','asdfasdfasasdfe@asdf.com',NULL),(1234664,'Patrick','McGuire','asdf@asdf',NULL);
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactcompany`
--

DROP TABLE IF EXISTS `contactcompany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactcompany` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `contact_id` int NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactcompany`
--

LOCK TABLES `contactcompany` WRITE;
/*!40000 ALTER TABLE `contactcompany` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactcompany` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status_id` varchar(36) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'1','Active');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Patrick','Patrick176@gmail.com','Password12');
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

-- Dump completed on 2022-10-29 21:35:26
