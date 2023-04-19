-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 19, 2023 at 08:00 AM
-- Server version: 8.0.33
-- PHP Version: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gctest`
--

-- --------------------------------------------------------

--
-- Table structure for table `computer`
--

CREATE TABLE `computer` (
  `id` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `type` varchar(30) NOT NULL,
  `processor` varchar(15) NOT NULL,
  `amount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `computer`
--

INSERT INTO `computer` (`id`, `name`, `type`, `processor`, `amount`) VALUES
(1, 'Beast II', 'server', 'Selenium II', 100),
(2, 'Cera 2400', 'laptop', 'Brain 456', 25),
(3, 'alienWares', 'Expert Gaming Laptop', 'Intel i9 10900', 100);

-- --------------------------------------------------------

--
-- Table structure for table `finance`
--

CREATE TABLE `finance` (
  `id` int NOT NULL,
  `month` varchar(15) NOT NULL,
  `year` year NOT NULL,
  `profit` decimal(10,2) NOT NULL,
  `revenue` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `finance`
--

INSERT INTO `finance` (`id`, `month`, `year`, `profit`, `revenue`) VALUES
(1, 'January', '2018', 1000.00, 45000.00),
(2, 'February', '2018', 4573.23, 35000.00),
(3, 'March', '2018', 3450.23, 17000.00),
(4, 'April', '2018', 23456.46, 55000.00),
(5, 'May', '2018', 12390.00, 45000.00),
(6, 'June', '2018', 4532.11, 34000.00),
(7, 'July', '2018', 5000.00, 30000.00),
(8, 'August', '2018', -2030.89, 9000.00),
(9, 'September', '2018', 6790.54, 32499.00),
(10, 'October', '2018', 4321.34, 24500.00),
(11, 'November', '2018', 7890.54, 27000.00),
(12, 'December', '2018', 10000.00, 54000.00);

-- --------------------------------------------------------

--
-- Table structure for table `Reports`
--

CREATE TABLE `Reports` (
  `id` int NOT NULL,
  `Company` varchar(255) NOT NULL,
  `Businessid` int DEFAULT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Phonenumber` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Agentinnimi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Tila` varchar(255) DEFAULT NULL,
  `Comment` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `Soitonlopputulos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Soitonlopputuloslisätieto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Soittolista` varchar(255) DEFAULT NULL,
  `Kampanja` varchar(255) DEFAULT NULL,
  `Calltime` date DEFAULT NULL,
  `Kellonaika` time DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Duration_min` int DEFAULT NULL,
  `Talktime_min` int DEFAULT NULL,
  `Profit` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Reports`
--

INSERT INTO `Reports` (`id`, `Company`, `Businessid`, `firstname`, `lastname`, `Phonenumber`, `Agentinnimi`, `Tila`, `Comment`, `Soitonlopputulos`, `Soitonlopputuloslisätieto`, `Soittolista`, `Kampanja`, `Calltime`, `Kellonaika`, `Title`, `Category`, `Duration_min`, `Talktime_min`, `Profit`, `createdAt`, `updatedAt`) VALUES
(1, 'Lillbacka Powerco Oy', NULL, 'Heikki', 'Koivisto', NULL, 'Kristiina Laihi', 'Ei vastausta', NULL, 'Meeting', NULL, 'Vincit - Teollisuus 12.9.', 'Vincit - Teollisuus 12.9.', '2020-11-02', '09:40:46', NULL, NULL, NULL, NULL, 160, '2023-04-16 22:09:48', '2023-04-16 22:09:48'),
(2, 'Vahterus Oy ', NULL, 'Mauri', 'Kontu', '0284070', 'Kristiina Laihi', 'Vastattu', 'Asia on hyvin ajankohtainen heillä.\nViimeksi tapaamisessa ei ollut Paavo Pitkänen mukana. Hänelle ei tuttu VincitEAM mutta heillä on M-files käytössä. Ottaa tapaamiseen muutaman muun mukaan.\n\nArrow Pinja Novi ohjelmisto käytössä ja se on ollut kunnosspidon ja laitteiden hallinta mutta ovat miettineet laajentaa sitä osto- ja varastomoduulilla. mutta toisaalta voisi miettiä jotain muutakin. Heiläoli viime viikolla pari palaveria aiheesta. ERPin vaihtoakin miettivät parhaillaan. Heillä on  L7 Visma siinä. Tässä kuussa tulee ERP asia toivon mukaan päätökseen. Jatkavatko vanhalla vai lähtevätkö uutta etsimään, miettivät. Miten muut jatkavatko Pinja tuotteelal vai miten. Rakentavat koneita omaan valmistukseen, Ne suunnitellaan ja nyt ne on laitetunnuksen alla serverillä. On M files käytössä. Ovat miettineet mikä olis sellainen paikka, että hallitsivat näitä olisko M-files vai PDM järjestelmä mutta sekin tarvis hahmottaa mihin suuntaan lähtevät tästä.', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-02', '10:22:56', 'CEO', NULL, NULL, NULL, 0, '2023-04-16 22:10:02', '2023-04-16 22:10:02'),
(3, 'Väylävirasto', NULL, 'Jan', 'Juslen', '0295343527', 'Lisa Katajavuori', 'Vastattu', NULL, 'Meeting', NULL, 'Synesa - Valtionhallinto', 'Synesa - Valtionhallinto', '2020-11-02', '14:29:58', NULL, NULL, NULL, NULL, 200, '2023-04-16 22:10:03', '2023-04-16 22:10:03'),
(4, 'Janavalo Oy', NULL, 'Riikka', 'Huopainen', '0405852445', 'Sarastus Hietanen', 'Vastattu', 'Heillä on nakitettu kunnossapito ja huolto muille tekijöille ja joka tehtaalla on muutama kaveri jotka hoitaa näitä. Hänellä on toive, että saataisiin kaikki järjestelmät toimimaan selkeämmin yhdessä. Laittavat juuri uutta erppiä ja sitten katsovat mitä muuta yhdistävät siihen. Haluavat kaikki sitten siihen uuden alle. Erpissä tuotannonohjaus on heille kriittiisin aspekti. ', 'Meeting', NULL, 'Vincit - Teollisuus 12.9.', 'Vincit - Teollisuus 12.9.', '2020-11-04', '10:26:29', 'Toimitusjohtaja', NULL, NULL, NULL, 160, '2023-04-16 22:10:03', '2023-04-16 22:10:03'),
(5, 'Logistic TKT Systems Oy', NULL, 'Antti', 'Kiviniemi', '0504138872', 'Sarastus Hietanen', 'Vastattu', 'Aina on kehityskohtia ja nyt on juuri alkamassa joku it projekti joka kestaa kesään. Erp projekti. Nyt eivät halua mitään muuta siihen rinnalle mutta hänelle sopis silti palaveli.  Ei halunnut enää loppuvuoteen palaveria, mutta ehdotti, että sellainen sopisi maaliskuulle. Sovittiin sitten helmikuun ekalle tiistaille niin asia etenee.  ', 'Meeting', NULL, 'Vincit - Teollisuus 12.9.', 'Vincit - Teollisuus 12.9.', '2020-11-04', '10:39:48', 'Tuotantojohtaja', NULL, NULL, NULL, 160, '2023-04-16 22:10:03', '2023-04-16 22:10:03'),
(6, 'Oy Hollmen & Co', NULL, 'Marko', 'Mäkelä', '026305900', 'Kristiina Laihi', 'Vastattu', 'Tarvitsisivat todella paojon apuja tekemiseen mutta tällä hetkellä on myllerrystä muutenkin menossa. AJoituksellisesti on mahdollisimman epäkiitollinen kohta kun on organisaatio muuttumassa. Roolit ja vastuumatriisit muovautumassa uudestaa. On 2 toimipaikkaa yhdistämäss yhteen osoitteeseen. Nyt on selätettäviä asioita tässä että pääsisivät normaaliin toimintaan taas niin voitaisiin paremmin palata näihin asioihin. Tammikuun lopulle  jatkokeskustelu aika.', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-04', '10:58:54', '(It)', NULL, NULL, NULL, 0, '2023-04-16 22:10:03', '2023-04-16 22:10:03'),
(7, 'Neste Oyj', NULL, 'Mika', 'Rytkönen', '0504580821', 'Tuomo Nyyssönen', 'Vastattu', 'Synesan eDromos tuotteen esittely kiinnostaa Nesteen palvelujen ja prosessien datan analysointia ajatellen.', 'Meeting', NULL, 'Synesa - Teollisuus', 'Synesa - Teollisuus', '2020-11-04', '14:37:02', 'kehitysjohtaja ICT', NULL, NULL, NULL, 0, '2023-04-16 22:10:04', '2023-04-16 22:10:04'),
(8, 'Loimi-Hämeen Jätehuolto', NULL, 'Mika', 'Helkearo', '0505298835', 'Kristiina Laihi', 'Vastattu', '2. tapaaminen, 1, ollut 1,5 vuottaq sitten. Katsotaan uudestaan järjestlemää. ihan alusta. Miten käytösännössä toimii ja ja mitä hyötyjä heille voisi olla. On konserni.', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-05', '08:33:14', 'Käyttöpäällikkö', NULL, NULL, NULL, 0, '2023-04-16 22:10:04', '2023-04-16 22:10:04'),
(9, 'POHJOIS-KARJALAN SÄHKÖ OY', NULL, 'Jukka', 'Leppänen', '0503258874', 'Kristiina Laihi', 'Vastattu', 'On Ajankohtainen. HUOM! Haluaa heti 1,5 tunnin esittelyn ja teamsillä. Lähetätkö hänelle teams linkin. Sähköaseman hallinta ja kunnossapito on suurin haaste, jossa kunnossapito-ohjelman osalta  on ensi vuoden puolella tavoiteeena löytää ratkaisu. Heillä on hajautetusti arkistoja ja dokumentteja. Sähköasemien hallinta. on ensi vuoden tavoitteena että löytävät. Haluaa jo alustavan muistutusesittelyn tämän vuoden puolella. Verkoston kunnossapito , Verkkotieto-omaisuus on Tieto ts unise mutta sähköseman kunnossapito on ollut haasteena koska sitä ei saada verkkotietojärjestelmään ja siihen ollana etismässä raktaisua.  Sähköaseman kunnossapidon pyörittäminen että päästäisiin exceleistä eroon koska on eri vuosittaisia eri kausipitoisuus asioita esim. 2 tai 6 vuotta. Että saisi ohjemaan suoraan ohjelmoitua tarkastuskierron, kunnossapitokirerron pidemällä aikaikkunalla. Heillä on Head power työohjausjärjestelmä, jolla tilaavat  kaupalliset tilaukset urakoitsijoilta. ', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-05', '08:46:16', NULL, NULL, NULL, NULL, 0, '2023-04-16 22:10:05', '2023-04-16 22:10:05'),
(10, 'Pemamek Oy', NULL, 'Petri', 'Martti', '01050161', 'Kristiina Laihi', 'Vastattu', 'Tuotantopäällikkö Petri Martin kanssa ollut demo kiinteistön kunnossapidosta. Muistaa hyvin tapaamisen. Välitti ehdotukset Tuomas Elolle. Hän on huoltopuolen päällikkö. Ajatus, että kun ovat vientiyritys ,automaattisia hitsausjärjestelmiä 90 psosenttia vientiä. Maailmalla on laitteet. Käyttötuntien perusteella tulisi varaosalistaa ja ehdotusta asiakkaalle. \n\nTuomas Elo oli saanut materiaalin viime keväänä ja haluaa nyt tapaamisen service puolelle.\nEi ole kunnossapitojärjestelmää. ERP powered. muuten CRM Microsoftin Dynamics,  office 365 työkalut ovat katsoneet muutaman toimijan kanssa monikäyttöistä Microsoftin 365. Heillä on monta projektia meneillään. Konedatan kerääminen IOT, on oma projekti menossa. Tarvitsevat käyttöliittymää asiakas suuntaan. Asiakasportaali on kehityshankkeena. Web tyyppistä ja filt service työkalua ovat miettineet myös. Haluaa katsoa mitä eri ratkaisuja Vincitillä on. ', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-05', '10:50:00', 'Tuotantopäällikkö', NULL, NULL, NULL, 0, '2023-04-16 22:10:05', '2023-04-16 22:10:05'),
(11, 'Opus Capita Group Oy', NULL, 'Noora', 'Luutonen', '0291565000', 'Annika Dahlström', 'Vastattu', 'Juha / 5.1120 AD Teams-tapaaminen 17.11.2020 klo 13 - 14\nAGENDA:  Esitellään ES:n palvelut tulevaa ajatellen, erityisesti ajankohtaisia ja kiinnostavia aiheita ovat muutosjohtaminen, strategian jalkauttainen käytäntöön sekä etäjohtaminen ja etätyöskentelyyn liittyvät haasteet.\nMuuta:  Kiva puhelu, Noora sanoi, että eivät ole vielä ensi vuotta suunnitelleet, vaan ovat parin viikon sisällä aloittamassa budjetoimaan ja suunnittelemaan. Heillä esimiesten kehittäminen toteutetaan lähtökohtaisesti sisäisesti, mutta aina välillä on joku ulkopuolinen kouluttamassa. Muutoksia heillä tapahtuu paljon ja juuri yritysten yhdistymistä, näistä syistä muutokseen liittyvät asiat ovat ajankohtaisia. Noora kuulee mielellään ES:n palveluista ja erityisesti mainitsemistaan asioista ajatellen ensi vuotta ja tulevia panostuksia. En saanut suoraa numeroa, puhelu katkesi ja vaihde ei sitä antanut..', 'Meeting', NULL, '16-02-2018', 'Corporate Spirit soittolista', '2020-11-05', '15:46:32', 'HR Manager', NULL, NULL, NULL, 150, '2023-04-16 22:10:05', '2023-04-16 22:10:05'),
(12, 'SHT-Tukku Oy', NULL, 'Mika', 'Kulkkula', '027636700', 'Kristiina Laihi', 'Vastattu', NULL, 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-03', '14:43:19', 'N/A', NULL, NULL, NULL, 0, '2023-04-16 22:10:05', '2023-04-16 22:10:05'),
(13, 'Ofa Oy/Nordic Traction Oy', NULL, 'Jari', 'Toiviainen', '0207927500', 'Kristiina Laihi', 'Vastattu', 'Ajankohtainen. Huom! Haluaa teamsillä esittelyn. Jonne Roininen. Arrow tällä hetkellä. Ovat saaneet Novasta viime viikolla esitelmä. Kilpailevaa tarjousta ovat kiinnostuneita. Kysyin heille tärkeitä asioita ja kertoi, etä on itse automaatiopuolelta. Käytännön asiat tärkeitä: saavatko reaaliaikaista dataa ja saavatko ne mobiilisti.  On Skotlannissa sisaryhtiö, jossa ei ole mitään järjestelmää. Eli sinne myös tarkoitus saada järjestelmä. Pyysi materiaalin myös englannin kielellä. Arrows on tällä hetkellä, josta löytyy perusfunktiot. Ja jos VIncit EAMissa on jotain muuta mitä kokevat tarvitsevansa niin miettivät vaihtoa. ', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-05', '09:55:13', NULL, NULL, NULL, NULL, 0, '2023-04-16 22:10:06', '2023-04-16 22:10:06'),
(14, 'Suomen Talotekniikka Oy', NULL, 'Minna', 'Himanen', '0405301388', 'Annika Dahlström', 'Vastattu', 'Juha/6.11.20 AD/Teams-tapaaminen 8.12.2020 klo 13:00\nAGENDA: ES palveluiden esittely ja molemminpuoleinen tilannekartoitus\nMuuta: Kiva puhelu Minnan kanssa. Hän sanoi, etteivät ole vielä suunnitelleete ensi vuotta. HIljattain aloittanut uusi tj ja katsovat mihin suuntaan hän haluaa yritystä lähteä viemään ja mihin tulevat jatkossa panostamaan. On toteutettu henkilöstökyselyjä ja erinäisiä projekteja, joissa on ollut kumppaneita mukana. Nyt ei tällä hetkellä mitään lukkoon lyötyä ja sovittua, joten hyvä hetki päästä kertoa laajasta palveluvalikoimasta ja saada projetkia kun suunnittelevat tulevaa.', 'Meeting', NULL, '16-02-2018', 'Corporate Spirit soittolista', '2020-11-06', '08:56:16', 'Henkilöstöpäällikkö', NULL, NULL, NULL, 150, '2023-04-16 22:10:06', '2023-04-16 22:10:06'),
(15, 'Suomalainen Lehtipaino Oy', NULL, 'Marja', 'Niemi', '0447795236', 'Kristiina Laihi', 'Vastattu', 'Heillä on tällä hetkellä etsinnässä järjestelmä, jossa on työnkulku sekä huolto- ja kunnossapito samassa järjestelmässä. Että etsivät laajempaa järjestelmää. Kysyin onko ERP hakusessa ja sanoi, että on vähän niin kuin. \n\nOlisko tästä voinut vielä jatkaa keskustelua ?\n\n\nTässä puhelun muistiinpanot viime keväältä ennen 1. tapaamista\nOvat miettineet toiminnanohjausjärjestelmän hankkimista lähitulevaisuudessa. Tuotannonohjaus. tuotannonohjaus siten, että saavat veike raportit ja laskutusta varten tietoja. Ovat katsoneet sellaista järjestelmää, joka lähettää suoraan laskun\nja kaikki huoltoon liittyvät asiat. Materiaalinhallinta myös .\n\n\n', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-06', '13:47:57', 'Tuotantopäällikkö', NULL, NULL, NULL, 0, '2023-04-16 22:10:06', '2023-04-16 22:10:06'),
(16, 'Tevo Lokomo Oy', NULL, 'Jarmo', 'Lehtonen', '0405904854', 'Kristiina Laihi', 'Vastattu', 'Haluavat nyt tarjouksen VincitEAMista.\nTeräsvalimo, heillä on kunnossapidettävää laitekantaa valimon laitteet: sulatto, kaavamo puhdistamo ja erilaisia sulatusuuneja ja hiekankäsittelylaitteita. Puhdistamossa on erilaisia valujen puhdistuslaitteita eli kaikki ovat isoja laitteita. On työstökoneita. Väkeä on kunnossapidossa noin 10 henkeä ja kaikkiaan noin sata henkeä.\n\nSanoi, että katsovat ensin omalla porukalla tarjouksen ja sitten otetaan keskustelu. arjouspyyntö', 'Meeting', NULL, 'Vincit - Teollisuus 12.9.', 'Vincit - Teollisuus 12.9.', '2020-11-06', '14:10:05', NULL, NULL, NULL, NULL, 160, '2023-04-16 22:10:07', '2023-04-16 22:10:07'),
(17, 'Relicomp Oy', NULL, 'Kimi', 'Salo', '0207404467', 'Kristiina Laihi', 'Vastattu', 'Koneita ja laitteistoa on hallissa noin 30. Työntekijöitä hallissa on noin 130 mutta itse kunnosapitoa tekee täyspäiväisesti 3 henkilöä.\nTällä hetkellä on excel pohjainen ja hyödyntävät teamsejä. Olisi hienoa, että saisi kaikki samaan järjestselmään:  koko koneen elinkaari yksiin kirjoihin, varaosat ja pystyisi näkemään mitä varaosia heillä on, huoltotiedot ym. \nHalusi tarjouksen mutta ei ole ihan polttava. Ensin on muita ajankohtaisempia projekteja heillä mutta hakusessa on edelleen järjestelmä ja halusi tarjouksen siitä.', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-06', '14:30:54', 'N/A', NULL, NULL, NULL, 0, '2023-04-16 22:10:07', '2023-04-16 22:10:07'),
(18, 'Bronto Skylift Oy Ab', NULL, 'Ari-Pekka', 'Semi', '0207927111', 'Kristiina Laihi', 'Vastattu', NULL, 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-10-13', '14:42:22', 'Tuotantojohtaja', NULL, NULL, NULL, 0, '2023-04-16 22:10:08', '2023-04-16 22:10:08'),
(19, 'Andritz Oy', NULL, 'Tomi', 'Suikki', '0204505555', 'Taru Österlund', 'Vastattu', NULL, 'Meeting', NULL, 'Synesa - Soittolista', 'Synesa - Soittolista', '2020-11-06', '08:57:02', NULL, NULL, NULL, NULL, 200, '2023-04-16 22:10:09', '2023-04-16 22:10:09'),
(20, 'Dinolift Oy', NULL, 'Juha', 'Jalonen', '0201772400', 'Kristiina Laihi', 'Vastattu', 'Dinolift haluaa tarjouksen.\nSiellä on tapahtunut sukupolven vaihdosn ja uusi työntekijä vastaa kunnosspidosta. 1/20 ollut 1. tapaaminen.\n\nHaluaa osan hommista järjestelmään. Tarvitsee Muistijärjestelmän ja vuosikellotoiminnat. Että saisi jatkuvia vuosittaisia tehtäviä, kuten nuohous, kaivojen tyhjennys, jätevesijärjestelmän huolto. Sekä Akuutit korjaukset ja pikku jutut, että jotkut muutkin kuin hän pystyisi niitä lisäämään. Mobiilisovellusosio ei varma onko niin tärkeä mutta olisi hyvä tänä päivänä.Henkilöresurssi puolta ei tarvita .Mutta että muistutttaaa automaattisesti ja työtilauksia muilta tehtailta tehdä. Pikku tikettejä . \n\n\nHaluaa tarjouksen. Paljonko hankintahinta sekä tarjous kuukausimaksu. 3 henkilöä. Käyttävät ulkopuolisia. sähkäri, putkimies, rakennusmiehet on talon ulkopuolelta. Henkilöstöhallinto puoli ei laske painoarvoa nyt. Ei halua kokonaisvaltaista järjestelmää tällä erää. \n\nHeillä on 3 tehdasta.\n\n', 'Meeting', NULL, 'Vincit - 2 Tapaamiset', 'Vincit - 2 tapaamiset lista', '2020-11-09', '08:30:15', 'N/A', NULL, NULL, NULL, 0, '2023-04-16 22:10:09', '2023-04-16 22:10:09'),
(21, 'Fujitsu Finland Oy', NULL, 'Maarit', 'Sippola', '0504670462', 'Lisa Katajavuori', 'Vastattu', NULL, 'Meeting', NULL, 'Synesa - Teollisuus', 'Synesa - Teollisuus', '2020-11-10', '14:58:52', NULL, NULL, NULL, NULL, 0, '2023-04-16 22:10:10', '2023-04-16 22:10:10'),
(22, 'Metsä Board Oyj', NULL, 'Tomi', 'Vähä-Ruohola', '0403503210', 'Lisa Katajavuori', 'Vastattu', NULL, 'Meeting', NULL, 'Synesa - Teollisuus', 'Synesa - Teollisuus', '2020-11-10', '15:55:10', 'Technical Development Manager', NULL, NULL, NULL, 0, '2023-04-16 22:10:10', '2023-04-16 22:10:10'),
(23, 'RKM Group Oy', 18922572, 'Riikka', 'Wirpi', '0415466587', 'Kristiina Laihi', 'Vastattu', 'Tarjouspyyntö\n\nRKM Group Oy\n\nRiikka Wirpi\n\n0415466587\n\nriikka.wirpi@rkmgroup.fi\n\n\nRKM Group Oy:llä on auki muutamia posotioita, joista kahteen heillä on ollut avikeuksia löytä sopivaa asiantuntijaa. Halusi tarjouksen pääkaupunkiseudulle kahteen positioon. Myös mm. Porissa avoin paikka.  Eivät ole aikaisemmin käyttäneet suorahakua mutta halusi nyt tarjouksen ja sen läpikäyminen olisi torstaina klo 14.\n\nTässä speksit. Tarvitaanko muuta tietoa?\nPaikat ovat avoinna duunitorilla, josta ne löytyy.\n\n\n1. Sisäilma asiantuntija ja 2. timpuri.\n\n \n\n2. Pitää olla\n\nOma auto, työauto käytössä, pakettiauto tai vetokoukullinen auto ja työkaluja omasta takaa.\n\nYritys maksaa työkalu ja kilometrikorvaukset.\n\nPitää olla\n\nMonipuolinen ja itsenäinen tekijä\n\n Työskentelevät asiakkaiden kodeissa\n\nItsenäiseen työskentelyyn pitää olla valmis.\n\n\nYrityksellä on Espoossa konttori\n\n \n\n 1.\n\nTärkeää RCA pätevyys rakennusterveys ammattilaisen tutknto\n\nTarvitaan erilaisten sopimusten takia.', 'Meeting', NULL, 'Taito research - Tampere', 'Taito Research - Tampereen lista', '2020-11-10', '15:40:55', NULL, NULL, NULL, NULL, 165, '2023-04-16 22:10:10', '2023-04-16 22:10:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL,
  `photoFilename` varchar(250) NOT NULL,
  `createdBy` int NOT NULL,
  `accessId` int NOT NULL,
  `enabled` int NOT NULL,
  `position` varchar(50) NOT NULL,
  `company` varchar(125) NOT NULL,
  `resetPassword` tinyint(1) NOT NULL,
  `resetPasswordTime` date NOT NULL,
  `createdAt` date NOT NULL DEFAULT '2023-03-01',
  `updatedAt` date NOT NULL DEFAULT '2023-03-01'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastName`, `email`, `password`, `photoFilename`, `createdBy`, `accessId`, `enabled`, `position`, `company`, `resetPassword`, `resetPasswordTime`, `createdAt`, `updatedAt`) VALUES
(1, 'Jason', 'Dansie', 'jasondansie@gmail.com', 'Passwd123', 'jason.jpg', 0, 1, 1, 'owner', 'Good Call Oy', 0, '2023-03-01', '2023-03-01', '2023-03-01'),
(2, 'Stina', 'Dansie', 'test2@email.com', 'Passwd123', 'stina.jpg', 0, 2, 1, 'ower/CEO', 'Good Call Oy', 0, '2023-03-01', '2023-03-01', '2023-03-01'),
(3, 'John', 'Doe', 'john@email.com', 'Passwd123', 'jason.jpg', 1, 3, 1, 'caller', 'Good Call', 0, '2023-03-01', '2023-04-13', '2023-04-13'),
(4, 'Jane', 'Doe', 'jane@email.com', 'Passwd123', 'stina.jpg', 1, 3, 1, 'caller', 'Good Call', 0, '2023-03-01', '2023-04-13', '2023-04-13'),
(5, 'jack', 'sparrow', 'jack@email.com', 'Passwd123', 'jason.jpg', 1, 2, 1, 'manager', 'Good Call', 0, '2023-03-01', '2023-04-13', '2023-04-13'),
(6, 'axel', 'eff', 'axel@email.com', 'Passwd123', 'jason.jpg', 1, 3, 1, 'caller', 'Good Call', 0, '2023-03-01', '2023-04-13', '2023-04-13'),
(7, 'Kristiina', 'Laihi', 'kristiina@email.com', 'Passwd123', 'stina.jpg', 1, 3, 1, 'caller', 'Good Call', 0, '2023-03-01', '2023-04-17', '2023-04-17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `computer`
--
ALTER TABLE `computer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finance`
--
ALTER TABLE `finance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Reports`
--
ALTER TABLE `Reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `finance`
--
ALTER TABLE `finance`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Reports`
--
ALTER TABLE `Reports`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
