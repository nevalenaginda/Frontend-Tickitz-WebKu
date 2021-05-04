-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Apr 2021 pada 22.09
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz_webku`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_activations`
--

CREATE TABLE `tb_activations` (
  `id` int(10) NOT NULL,
  `email` varchar(64) NOT NULL,
  `token` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_activations`
--

INSERT INTO `tb_activations` (`id`, `email`, `token`, `date`) VALUES
(14, 'nevalenaginda@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmeSI6eyJpZF91c2VyIjoiN2ZmNmJjZGItMTRiZC00NjJjLWJkZDYtYjY1OTYzYmJhNjZjIiwiZW1haWwiOiJuZXZhbGVuYWdpbmRhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGc5S01Jb21DdThkV2xJVWRrLmQ1U092OTdGdmpLQm9ta096cGVVbzJHZEFSS0hyREFNYnd5IiwiY3JlYXRlZF9hdCI6IjIwMjEtMDMtMjNUMjE6MDg6MzEuMTYxWiIsInVwZGF0ZWRfYXQiOiIyMDIxLTAzLTIzVDIxOjA4OjMxLjE2MVoifSwiaWF0IjoxNjE2NTMzNzExfQ.1lI7objjFa-YmDNS9BHEU4A1CHoOFVTQuh1sK7v55dM', '2021-03-23 21:08:31'),
(15, 'nevalenagindaprasetyo@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmeSI6eyJpZF91c2VyIjoiZWY1Y2NjZWYtNTE4MC00NzYzLWFjNjEtN2E3ZWEwY2E2N2IyIiwiZW1haWwiOiJuZXZhbGVuYWdpbmRhcHJhc2V0eW9AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkdHZCWU5kMXRxSWNZSEVoaDczSldlT2pwOU1sN0l2UThnbFY4SG1JaGhFdWNuZ2VvS3YvcTYiLCJjcmVhdGVkX2F0IjoiMjAyMS0wMy0yNVQwNDoxODozOS43MTRaIiwidXBkYXRlZF9hdCI6IjIwMjEtMDMtMjVUMDQ6MTg6MzkuNzE0WiJ9LCJpYXQiOjE2MTY2NDU5MTl9.n01N-ocghoS9kvfqlaDkt0Vu-wioHAUxctT8SXCJniU', '2021-03-25 04:18:39'),
(17, 'dnjhsdfgmngfx@dfgsf', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmeSI6eyJpZF91c2VyIjoiZTc2YjEyZmMtYTYzNS00ZWRiLTg2ZjctOWVhZTMwZTBmMmNjIiwiZW1haWwiOiJkbmpoc2RmZ21uZ2Z4QGRmZ3NmIiwicGFzc3dvcmQiOiIkMmIkMTAkR1QxVXhyNDF5OGxhalM4WmFQUGtoLlI1V2xDY2pSOC9EMmF0bHQ0UkcydGVzZGpES2ltQTIiLCJjcmVhdGVkX2F0IjoiMjAyMS0wMy0yOFQxOToyNjoyMi4wODlaIiwidXBkYXRlZF9hdCI6IjIwMjEtMDMtMjhUMTk6MjY6MjIuMDg5WiJ9LCJpYXQiOjE2MTY5NTk1ODJ9.X-eGF0Ixme6wfFMs7buVkzHs2lJNyVINWzatjf9SBeA', '2021-03-28 19:26:22'),
(18, 'dnjhsdfgmngfx@dfgsf.con', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmeSI6eyJpZF91c2VyIjoiYTM0MjhkNjEtNzI0ZC00NzNmLWI3MGMtZjA5NTU5YjllNzRlIiwiZW1haWwiOiJkbmpoc2RmZ21uZ2Z4QGRmZ3NmLmNvbiIsInBhc3N3b3JkIjoiJDJiJDEwJDlMSGN5eGMxUVVCWlNYd2ZlV2FQMmU4ODVNaWFrVTgyUi9pSTFTYVBESEtjWFNNNnk5WmZ5IiwiY3JlYXRlZF9hdCI6IjIwMjEtMDMtMjhUMTk6MjY6MzAuNDA2WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTAzLTI4VDE5OjI2OjMwLjQwNloifSwiaWF0IjoxNjE2OTU5NTkwfQ.OhUT38fqjDrBIl91o394tGHCvveDVb0eDevzVaBxJUM', '2021-03-28 19:26:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_cinemas`
--

CREATE TABLE `tb_cinemas` (
  `id_cinema` int(10) NOT NULL,
  `cinema_name` varchar(150) NOT NULL,
  `logo_cinema` varchar(150) NOT NULL,
  `address_cinema` text NOT NULL,
  `city_cinema` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_cinemas`
--

INSERT INTO `tb_cinemas` (`id_cinema`, `cinema_name`, `logo_cinema`, `address_cinema`, `city_cinema`, `created_at`, `updated_at`) VALUES
(6, 'hiflix', 'http://localhost:5000/img/1616493612743-hiflix.png', 'Jl. Raden Intan No. 40, Tanjung Karang, Bandar Lampung', 'Lampung', '2021-03-23 09:51:34', '2021-03-23 10:00:12'),
(7, 'CineOne21', 'http://localhost:5000/img/1616493648731-CineOne21.png', 'Whatever street No. 01, Bandar Lampung', 'Lampung', '2021-03-23 10:00:48', '2021-03-23 10:00:48'),
(8, 'CineOne21', 'http://localhost:5000/img/1616493705429-CineOne21.png', 'Whatever street No. 99, Jagakarsa, Jakarta Selatan', 'Jakarta', '2021-03-23 10:01:45', '2021-03-23 10:01:45'),
(9, 'ebv.id', 'http://localhost:5000/img/1616493755309-ebv.id.png', 'Whatever street No. 99, Kebayoran Baru, Jakarta Utara', 'Jakarta', '2021-03-23 10:02:35', '2021-03-23 10:02:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_movies`
--

CREATE TABLE `tb_movies` (
  `id_movie` int(10) NOT NULL,
  `movie_title` varchar(150) NOT NULL,
  `image` varchar(150) NOT NULL DEFAULT 'http://localhost:5000/img/default_poster.jpg',
  `synopsis` text NOT NULL,
  `genre` varchar(150) NOT NULL,
  `duration_hours` varchar(18) NOT NULL,
  `duration_minutes` varchar(18) NOT NULL,
  `casts` varchar(64) NOT NULL,
  `director` varchar(64) NOT NULL,
  `category` varchar(18) NOT NULL,
  `release_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_movies`
--

INSERT INTO `tb_movies` (`id_movie`, `movie_title`, `image`, `synopsis`, `genre`, `duration_hours`, `duration_minutes`, `casts`, `director`, `category`, `release_date`, `created_at`, `updated_at`) VALUES
(11, 'Happiest Season', '1617565026815-Happiest_Season_poster.png', 'This romantic comedy is about longtime lesbian couple Abby (Kristen Stewart) and Harper (Mackenzie Davis), who made plans to go home to the latter’s family for the Christmas holidays. Aside from spending the yuletide season with Harper’s conservative parents, Abby is also planning to spring a marriage proposal on Harper. Trouble begins, though, when she discovers that Harper hasn’t come out as a lesbian yet to her family, leaving them clueless as to who Abby really is in her life. Co-written and directed by Clea Duvall. Co-starring Dan Levy, Victor Garber, and Mary Steenburgen. ', 'Comedy, Drama, Romance', '1', '42', 'Alison Brie, Mackenzie Davis, Kristen Stewart, Aubrey Plaza, etc', 'Clea DuVall', '', '2020-11-23', '2021-03-12 14:20:07', '2021-04-04 19:37:06'),
(12, 'Godzilla vs. Kong', '1617565413729-Godzilla_vs._Kong.png', 'In the company of his guardians and Jia (Kaylee Hottle), an enigmatic orphan, Kong embarks on a journey to return to his birthplace. However, the awakening of a brutal creature soon threatens humanity\'s safety, forcing Kong and his unlikely allies to abandon their quest and fight to protect the earth. As the two mythical creatures clash, a more profound mystery soon rises to the surface. Directed by Adam Wingard. Alexander Skarsgård, Millie Bobby Brown, and Rebecca Hall co-star. ', 'Action, Science Fiction ', '1', '53', 'Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, etc.', 'Adam Wingard', '', '2021-03-28', '2021-03-12 00:25:56', '2021-04-04 19:43:33'),
(13, 'Black Widow 2021', '1617566401107-085141800_1584514176-Black_Widow.jpg', 'Avenger Natasha Romanoff (Scarlett Johansson) becomes separated from the rest of her crime-fighting team in the wake of a significant battle. Natasha must reconnect with her former allies Yelena Belova (Florence Pugh), Alexei Shostakov (David Harbour), and Melina Vostokoff (Rachel Weisz) to take down a notorious assassin while grappling with her past in an elite KGB assassin force. Directed by Cate Shortland. O.T. Fagbenle and Ray Winstone co-star. ', 'Action ', '2', '13', 'Scarlett Johansson, Florence Pugh, David Harbour, etc', 'Cate Shortland', '', '2021-05-05', '2021-03-12 07:36:01', '2021-04-04 20:00:01'),
(14, 'The Courier', '1617565663223-220px-The_Courier_poster.jpg', 'Director Dominic Cooke’s historical drama stars Benedict Cumberbatch, Rachel Brosnahan, Jessie Buckley, and Merab Ninidze. Cumberbatch plays Greville Wynne, a British electrical engineer and businessman turned M16 agent who relays crucial intelligence about the Soviet nuclear program to the CIA. With the help of his Russian informant, Oleg Penkovsky (a.k.a. Ironbark), he aids the Western Bloc in defusing the Cuban missile crisis of 1962. ', 'Thriller, War ', '1', '51', 'Benedict Cumberbatch, Rachel Brosnahan, Jessie Buckley , etc.', 'Dominic Cooke', '', '2020-01-23', '2021-03-12 14:42:46', '2021-04-04 19:47:43'),
(15, 'Peter Rabbit', '1617566474526-Peterrabbit2teaser.jpg', 'Though he strives to make good, the other rabbits cannot see past Peter\'s (James Corden) playful and mischievous ways. Peter then embarks on a journey into the world beyond his garden in hopes of finding a group of friends who enjoy causing trouble. Yet unbeknownst to him, his family tries to track him down in hopes of convincing him to return to where he truly belongs. Directed by Will Gluck, the film co-stars Margot Robbie, Rose Byrne, and Domhnall Gleeson. ', 'Adventure, Family, Comedy', '1', '53', 'James Corden, Margot Robbie, Elizabeth Debicki, etc.', 'Will Gluck', '', '2021-04-05', '2021-03-09 23:47:22', '2021-04-04 20:01:14'),
(16, 'The Lion King', '1617549982254-poster-the-lionking.jpg', 'Director Jon Favreau’s fantasy drama film is a computer animated remake of the 1994 animated Disney film of the same name. It features the voice talents of Donald Glover, Seth Rogen, Billy Eichner, John Oliver, Beyoncé, and James Earl Jones. A young lion returns from exile in adulthood, ready to reclaim the throne that was stolen from him and his father by his treacherous uncle. ', 'Action, Adventure, Drama', '2', '58', 'Donald Glover, Seth Rogen, Chiwetel Ejiofor, etc.', 'Jon Favreau', '', '2021-04-06', '2021-03-12 07:53:56', '2021-04-04 15:26:22'),
(17, 'Detective Pikachu', '1617565588001-Pokémon_Detective_Pikachu_teaser_poster.jpg', 'When skilled detective Harry Goodman (Paul Kitson) disappears suddenly, his son Tim (Justice Smith) is determined to find out where he is. Also taking on the investigation is Detective Pikachu (Ryan Reynolds), the former Pokémon partner to Harry. Pikachu and Tim work well together, finding and following clues across the metropolis of Ryme City, a place where Pokémon and humans live together in harmony. Not everything is as it seems, as the two discover a terrible secret that may ruin the Pokémon universe in this action-adventure animation film. Written and directed by Rob Letterman.', 'Action, Adventure, Fantasy', '1', '44', 'Ryan Reynolds, Justice Smith, Kathryn Newton, etc.', 'Rob Letterman', '', '2019-05-02', '2021-03-12 14:59:12', '2021-04-04 19:46:28'),
(18, 'Shorta', '1617565726202-shorta-et00300226-22-01-2021-05-35-33.jpg', 'Jens and Mike, two police officers on routine patrol, find themselves trapped in a maze of buildings when unrest spreads. ', 'Action, Crime ', '1', '48', 'Jacob Lohmann, Simon Sears, Tarek Zayat, etc.', 'Frederik Louis Hviid, Anders Ølholm', '', '2021-03-18', '2021-03-12 15:06:47', '2021-04-04 19:48:46'),
(19, 'Top Gun: Maverick', '1617566542362-220px-Top_Gun_Maverick.jpg', 'Tom Cruise stars in the sequel to the 1986 action drama Top Gun, Top Gun 2. In this film, Maverick (played by Cruise) is called back into action to fight a different type of enemy: drones. The film is being written by Peter Graig, Justin Marks, Ashley Miller and Zack Stentz. ', 'Action ', '2', '10', 'Tom Cruise, Miles Teller, Jennifer Connelly, etc.', 'Joseph Kosinski', '', '2021-07-01', '2021-03-12 15:16:46', '2021-04-04 20:02:22'),
(20, 'A Quiet Place Part II', '1617566221334-220px-A_Quiet_Place_Part_II.jpg', 'Following the deadly events at home, the Abbott family (Emily Blunt, Millicent Simmonds, Noah Jupe) must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path. Directed by John Krasinski. ', ' Action, Horror, Thriller', '1', '33', 'Emily Blunt, Cillian Murphy, Millicent Simmonds, etc.', 'John Krasinski', '', '2021-05-27', '2021-03-12 15:21:23', '2021-04-04 19:57:01'),
(21, 'Fighting with My Family', '1617565811720-fighting with family.jpg', 'This biographical story follows Brits Raya Knight (Florence Pugh) and her brother Zak Knight (Jack Lowden) as they attempt a career in the US as professional wrestlers in the WWE. Even coming from a family of wrestlers doesn\'t prepare these two for the obstacles ahead as they hear some harsh truths from straight talking professional coach Hutch (Vince Vaughn) and Dwayne “The Rock” Johnson himself. Directed and written by Stephen Merchant. ', ' Comedy Drama', '1', '50', 'Florence Pugh, Lena Headey, Nick Frost, etc.', 'Stephen Merchant', '', '2019-02-28', '2021-03-12 15:28:59', '2021-04-04 19:50:11'),
(22, 'Can You Ever Forgive Me?', '1617565512112-Can-You-Ever.jpg', 'This true story begins with frumpy Manhattan celebrity biography Lee Israel (Melissa McCarthy) as her luck begins to change. Her cat is unwell, her job has just been lost and she’s received an eviction warning meaning that she needs to make some money, and fast. She turns her creative hand to forging letters from well-known writers to earn a living. It works, but after getting her best friend Jack (Richard E. Grant) to help her stave off the authorities, it seems this money-making deception is drawing glances from all the wrong places. Directed by Marielle Heller. ', 'Comedy, Drama, Crime', '1', '46', 'Melissa McCarthy, Richard E. Grant, Dolly Wells, etc.', 'Marielle Heller', '', '2018-10-18', '2021-03-12 15:33:03', '2021-04-04 19:45:12'),
(23, 'Spontaneous', '1617566080575-Spontaneous_(film).jpg', 'When students in their high school begin inexplicably exploding (literally), seniors Mara (Katherine Langford) and Dylan (Charlie Plummer) struggle to survive in a world where each moment may be their last. As an unexpected romance blossoms between them, Mara and Dylan discover that when tomorrow is no longer promised, they can finally start living for today. ', 'Comedy, Romance', '1', '42', 'Katherine Langford, Charlie Plummer, Hayley Law, etc.', 'Brian Duffield', '', '2020-10-01', '2021-03-12 15:38:04', '2021-04-04 19:54:40'),
(24, 'Long Shot', '1617565927445-long-shot.png', 'Fred Flarsky (Seth Rogen) is a talented but troublesome journalist who unexpectedly bumps into his former babysitter Charlotte Field (Charlize Theron) who is now running for President of the United States. Feeling a deep connection, she hires him on a whim to be on her team as her speechwriter. Totally unprepared for her high profile lifestyle, Fred nevertheless helps her on her campaign as a romantic relationship develops between the two. Directed by Jonathan Levine. ', 'Comedy, Romance', '2', '5', 'Seth Rogen, Charlize Theron, Aviva Mongillo , etc.', 'Jonathan Levine', '', '2019-05-02', '2021-03-12 15:42:08', '2021-04-04 19:52:07'),
(43, 'sdaS', '1617170728815-other-profile.jpeg', 'ASDGDSHSHG', 'SSS', '1', '2', 'GSDG', 'AFDSG', 'sdsa', '2021-03-31', '2021-03-31 06:05:28', '2021-03-31 06:05:28'),
(45, 'safdsaf', '1617171032334-Pas Foto.jpg', 'agadsg', 'SSS', '1', '8', 'gsda', 'asdg', 'fasfaf', '2021-03-02', '2021-03-31 06:10:32', '2021-03-31 06:10:32'),
(50, 'Spiderman Home Coming', 'default_poster.jpg', 'belum ada ', 'science fiction', '2', '14', 'steven wilbert', 'anunaski', 'pg-12', '2021-03-29', '2021-04-04 18:33:57', '2021-04-04 18:33:57'),
(51, 'Spiderman Home Comings', 'default_poster.jpg', 'belum ada ', 'science fiction', '2', '14', 'steven wilbert', 'anunaski', 'pg-12', '2021-03-29', '2021-04-04 18:34:43', '2021-04-04 18:34:43'),
(52, 'Spiderman Home Comingszz', '1617561320547-Pas Foto.jpg', 'belum ada ', 'science fiction', '2', '14', 'steven wilbert', 'anunaski', 'pg-12', '2021-03-29', '2021-04-04 18:35:20', '2021-04-04 18:35:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_schedule_movies`
--

CREATE TABLE `tb_schedule_movies` (
  `id_schedule` int(10) NOT NULL,
  `id_movie` int(10) NOT NULL,
  `id_cinema` int(10) NOT NULL,
  `playing_time` time DEFAULT NULL,
  `playing_date` date DEFAULT NULL,
  `price` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_schedule_movies`
--

INSERT INTO `tb_schedule_movies` (`id_schedule`, `id_movie`, `id_cinema`, `playing_time`, `playing_date`, `price`, `created_at`, `updated_at`) VALUES
(5, 11, 7, '11:00:03', '2021-03-25', '35000', '2021-03-22 15:39:49', '2021-03-22 15:39:49'),
(7, 13, 9, '19:00:00', '2021-03-28', '35000', '2021-03-22 16:15:16', '2021-03-22 16:15:16'),
(8, 14, 6, '10:00:00', '2021-03-29', '50000', '2021-03-24 17:23:56', '2021-03-24 17:23:56'),
(9, 11, 6, '17:00:00', '2021-03-25', '50000', '2021-03-24 17:25:56', '2021-03-24 17:25:56'),
(10, 12, 8, '19:00:00', '2021-03-25', '50000', '2021-03-24 17:27:22', '2021-03-24 17:27:22'),
(11, 14, 7, '19:00:00', '2021-03-29', '50000', '2021-03-24 17:28:41', '2021-03-24 17:28:41'),
(12, 15, 6, '15:00:00', '2021-03-25', '50000', '2021-03-24 17:29:51', '2021-03-24 17:29:51'),
(13, 11, 6, '17:00:00', '2021-03-29', '75000', '2021-03-24 20:24:26', '2021-03-24 20:24:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_seats`
--

CREATE TABLE `tb_seats` (
  `id_seat` int(10) NOT NULL,
  `id_schedule` int(10) NOT NULL,
  `id_transaction` int(10) NOT NULL,
  `id_cinema` int(10) NOT NULL,
  `seat_row` varchar(8) NOT NULL,
  `seat_col` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_seats`
--

INSERT INTO `tb_seats` (`id_seat`, `id_schedule`, `id_transaction`, `id_cinema`, `seat_row`, `seat_col`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'C', 3, '2021-03-21 19:45:55', '2021-03-21 19:57:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_tickets`
--

CREATE TABLE `tb_tickets` (
  `id_ticket` int(10) NOT NULL,
  `id_schedule` int(10) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `id_transaction` int(10) NOT NULL,
  `id_cinema` int(10) NOT NULL,
  `id_seat` int(10) NOT NULL,
  `ticket_status` varchar(20) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_tickets`
--

INSERT INTO `tb_tickets` (`id_ticket`, `id_schedule`, `id_user`, `id_transaction`, `id_cinema`, `id_seat`, `ticket_status`, `updated_at`, `created_at`) VALUES
(16, 1, '1', 1, 1, 3, 'In Active', '2021-03-22 18:53:33', '2021-03-22 18:53:33');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_transactions`
--

CREATE TABLE `tb_transactions` (
  `id_transaction` int(10) NOT NULL,
  `id_ticket` int(10) NOT NULL,
  `id_movie` int(10) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `id_schedule` int(10) NOT NULL,
  `total_payment` varchar(64) NOT NULL,
  `payment_methods` varchar(64) NOT NULL,
  `status_payment` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_users`
--

CREATE TABLE `tb_users` (
  `id_user` varchar(64) NOT NULL,
  `first_name` varchar(64) NOT NULL DEFAULT 'first name',
  `last_name` varchar(64) NOT NULL DEFAULT 'last name',
  `profil_image` varchar(64) NOT NULL DEFAULT 'default_profile.jpg',
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `phone_number` varchar(14) DEFAULT NULL,
  `access` int(10) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_verify` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_users`
--

INSERT INTO `tb_users` (`id_user`, `first_name`, `last_name`, `profil_image`, `email`, `password`, `phone_number`, `access`, `created_at`, `updated_at`, `is_verify`) VALUES
('087a094e-5a48-4ca2-96b1-6f6e561904bc', 'first name', 'last name', '1617560034064-Pas Foto.jpg', 'nevalenagindaprasetyo@gmail.com', '$2b$10$5nA6GIJ8bd7rVHOBKDxHe.R3l46jDzjUaByVxM7/yzimFiF9DOtkG', 'null', 1, '2021-04-04 17:31:07', '2021-04-04 17:31:07', 1),
('59caaf14-9b2f-4070-ad68-211076289bac', 'nevalen', 'aginda', '1617566616830-other-profile.jpeg', 'nevalenaginda10@gmail.com', '$2b$10$LzH77xG9a88Vr7yj8tFQ/.tryZlOH/zJus59xSoBY5fLNCyTA7bJK', '81438064057', 0, '2021-03-23 21:07:36', '2021-03-23 21:07:36', 1),
('7ff6bcdb-14bd-462c-bdd6-b65963bba66c', 'Aginda', 'prasetyo', 'default_profile.jpg', 'nevalenaginda@gmail.com', '$2b$10$g9KMIomCu8dWlIUdk.d5SOv97FvjKBomkOzpeUo2GdARKHrDAMbwy', '88', 1, '2021-03-23 21:08:31', '2021-03-23 21:08:31', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_activations`
--
ALTER TABLE `tb_activations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_cinemas`
--
ALTER TABLE `tb_cinemas`
  ADD PRIMARY KEY (`id_cinema`);

--
-- Indeks untuk tabel `tb_movies`
--
ALTER TABLE `tb_movies`
  ADD PRIMARY KEY (`id_movie`);

--
-- Indeks untuk tabel `tb_schedule_movies`
--
ALTER TABLE `tb_schedule_movies`
  ADD PRIMARY KEY (`id_schedule`);

--
-- Indeks untuk tabel `tb_seats`
--
ALTER TABLE `tb_seats`
  ADD PRIMARY KEY (`id_seat`);

--
-- Indeks untuk tabel `tb_tickets`
--
ALTER TABLE `tb_tickets`
  ADD PRIMARY KEY (`id_ticket`);

--
-- Indeks untuk tabel `tb_transactions`
--
ALTER TABLE `tb_transactions`
  ADD PRIMARY KEY (`id_transaction`),
  ADD KEY `id_movie` (`id_movie`);

--
-- Indeks untuk tabel `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_activations`
--
ALTER TABLE `tb_activations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `tb_cinemas`
--
ALTER TABLE `tb_cinemas`
  MODIFY `id_cinema` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `tb_movies`
--
ALTER TABLE `tb_movies`
  MODIFY `id_movie` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT untuk tabel `tb_schedule_movies`
--
ALTER TABLE `tb_schedule_movies`
  MODIFY `id_schedule` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `tb_seats`
--
ALTER TABLE `tb_seats`
  MODIFY `id_seat` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tb_tickets`
--
ALTER TABLE `tb_tickets`
  MODIFY `id_ticket` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `tb_transactions`
--
ALTER TABLE `tb_transactions`
  MODIFY `id_transaction` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
