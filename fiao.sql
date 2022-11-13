-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-11-2022 a las 20:10:18
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fiao`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_spanish2_ci NOT NULL,
  `dir` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `tel` text COLLATE utf8_spanish2_ci NOT NULL,
  `uid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `client`
--

INSERT INTO `client` (`id`, `name`, `dir`, `tel`, `uid`) VALUES
(36, 'Michael ', '', '', 6),
(35, 'Michael Encarnacion', '', '', 1),
(34, 'Michael ', '', '', 1),
(33, 'sads', '', '8294455432', 1),
(32, 'Ana', '', '', 1),
(31, 'Andrea', '', '', 1),
(29, 'Michael ', 'xxxx', '8294455432', 1),
(30, 'Juana', '', '8294455432', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sold`
--

DROP TABLE IF EXISTS `sold`;
CREATE TABLE IF NOT EXISTS `sold` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `description` text COLLATE utf8_spanish2_ci NOT NULL,
  `date` text COLLATE utf8_spanish2_ci NOT NULL,
  `cid` int NOT NULL,
  `uid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sold`
--

INSERT INTO `sold` (`id`, `amount`, `description`, `date`, `cid`, `uid`) VALUES
(23, 320, 'Cebolla', '11-11-2022', 33, 1),
(22, 320, 'Cebolla', '11-11-2022', 33, 1),
(21, 50, '', '11-11-2022', 33, 1),
(20, 320, '', '11-11-2022', 33, 1),
(19, 200, '', '11-11-2022', 33, 1),
(18, 8, '', '11-11-2022', 33, 1),
(17, 320, '', '11-11-2022', 33, 1),
(24, 600, '', '11-11-2022', 32, 1),
(25, 8, '', '11-11-2022', 33, 1),
(26, 8, 'HOLA MUNDO', '11-11-2022', 0, 1),
(27, 320, '', '11-11-2022', 0, 1),
(28, 100, '', '11-11-2022', 0, 1),
(29, 500, '', '11-11-2022', 33, 1),
(30, 320, '', '11-11-2022', 0, 1),
(31, 200, '', '11-11-2022', 32, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `total`
--

DROP TABLE IF EXISTS `total`;
CREATE TABLE IF NOT EXISTS `total` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `cid` text COLLATE utf8_spanish2_ci NOT NULL,
  `uid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `total`
--

INSERT INTO `total` (`id`, `amount`, `cid`, `uid`) VALUES
(1, 500, '33', 1),
(2, 700, '32', 1),
(3, -952, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` text COLLATE utf8_spanish2_ci NOT NULL,
  `fname` text COLLATE utf8_spanish2_ci NOT NULL,
  `lname` text COLLATE utf8_spanish2_ci NOT NULL,
  `password` text COLLATE utf8_spanish2_ci NOT NULL,
  `commerce` text COLLATE utf8_spanish2_ci NOT NULL,
  `date` text COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `fname`, `lname`, `password`, `commerce`, `date`) VALUES
(1, 'Frito', 'Michael', 'Encarnación', '$2y$10$gPhFkPR.nujUVgyrkQO3OuO.Ht9Xg462JSMjxQvos9mI/Gp3M/5bO', 'Esq frito', ''),
(6, 'jd1', 'Juana', 'Diaz', '$2y$10$oCjTMvl76YLXhmSq5hqece8iv/t3.DeIsAQjmIvQJo21uJwzKWsNW', 'ss', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
