-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2021 at 09:53 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `appraisals`
--

CREATE TABLE `appraisals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `period` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sap_timestamp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `np_timestamp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branches` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departments` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `staff` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appraisals`
--

INSERT INTO `appraisals` (`id`, `name`, `period`, `sap_timestamp`, `np_timestamp`, `description`, `branches`, `departments`, `roles`, `staff`, `created_at`, `updated_at`) VALUES
(1, 'Appraisal for HR-Q3 2021', '{\"from\":\"2021-07-01T00:00:00.000Z\",\"to\":\"2021-09-30T00:00:00.000Z\"}', '{\"open\":\"2021-07-01T00:00:00.000Z\",\"close\":\"2021-07-15T00:00:00.000Z\"}', '{\"open\":\"2021-09-15T00:00:00.000Z\",\"close\":\"2021-09-30T00:00:00.000Z\"}', NULL, '[1,2,3]', '[2]', '[\"ESS\"]', '[8,12]', '2021-06-12 14:20:17', '2021-06-12 14:20:17');

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `landmark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `city`, `telephone`, `landmark`, `email`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Adenta Branch', 'Accra - Adenta', '0265518694', 'Opposite Goil Filling Station', 'fedelityadentan@mail.com', 'P.O. Box ADM 4500', '2021-05-04 10:59:16', '2021-05-04 10:59:16'),
(2, 'Ho Branch', 'Ho - Sokode', '0265518694', 'Behind Ho Central Market', 'prikahaeyram@gmail.com', 'Adenta Goil Filling station', '2021-05-04 11:49:01', '2021-05-04 11:49:01'),
(3, 'Hohoe Branch', 'Hohoe', '0265518694', 'Opposite Bank of Ghana', 'prikahaeyramm@gmail.com', 'Hohoe Goil Filling station', '2021-05-04 11:54:17', '2021-05-04 14:30:09');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'MIS Department', '2021-05-04 10:59:55', '2021-05-04 10:59:55'),
(2, 'HR Department', '2021-05-04 12:01:22', '2021-05-04 12:01:22'),
(3, 'Revenue Department', '2021-05-04 12:03:17', '2021-05-04 12:03:17');

-- --------------------------------------------------------

--
-- Table structure for table `employment_statuses`
--

CREATE TABLE `employment_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employment_statuses`
--

INSERT INTO `employment_statuses` (`id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Full-Time', '2021-05-01 05:26:59', '2021-05-01 06:28:19'),
(2, 'Part-Time', '2021-05-01 05:27:34', '2021-05-01 06:31:41');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `failed_jobs`
--

INSERT INTO `failed_jobs` (`id`, `uuid`, `connection`, `queue`, `payload`, `exception`, `failed_at`) VALUES
(1, 'fca176f2-2d51-4be3-b145-d913b2e1c710', 'database', 'default', '{\"uuid\":\"fca176f2-2d51-4be3-b145-d913b2e1c710\",\"displayName\":\"App\\\\Jobs\\\\AccountCreated\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\AccountCreated\",\"command\":\"O:23:\\\"App\\\\Jobs\\\\AccountCreated\\\":12:{s:7:\\\"\\u0000*\\u0000user\\\";N;s:11:\\\"\\u0000*\\u0000password\\\";N;s:10:\\\"\\u0000*\\u0000request\\\";N;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 'Illuminate\\Queue\\MaxAttemptsExceededException: App\\Jobs\\AccountCreated has been attempted too many times or run too long. The job may have previously timed out. in C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php:713\nStack trace:\n#0 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(482): Illuminate\\Queue\\Worker->maxAttemptsExceededException(Object(Illuminate\\Queue\\Jobs\\DatabaseJob))\n#1 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(396): Illuminate\\Queue\\Worker->markJobAsFailedIfAlreadyExceedsMaxAttempts(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), 1)\n#2 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(356): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#3 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(307): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#4 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(116): Illuminate\\Queue\\Worker->runNextJob(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#5 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(100): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#6 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#7 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#8 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#9 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#10 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#11 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(136): Illuminate\\Container\\Container->call(Array)\n#12 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Command\\Command.php(258): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#13 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#14 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(920): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#15 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(266): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#16 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(142): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#17 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php(93): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 {main}', '2021-06-16 08:47:47'),
(2, '95929260-19eb-43f4-9200-56710eaadec2', 'database', 'default', '{\"uuid\":\"95929260-19eb-43f4-9200-56710eaadec2\",\"displayName\":\"App\\\\Jobs\\\\AccountCreated\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\AccountCreated\",\"command\":\"O:23:\\\"App\\\\Jobs\\\\AccountCreated\\\":12:{s:7:\\\"\\u0000*\\u0000user\\\";N;s:11:\\\"\\u0000*\\u0000password\\\";N;s:10:\\\"\\u0000*\\u0000request\\\";N;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 'Illuminate\\Queue\\MaxAttemptsExceededException: App\\Jobs\\AccountCreated has been attempted too many times or run too long. The job may have previously timed out. in C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php:713\nStack trace:\n#0 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(482): Illuminate\\Queue\\Worker->maxAttemptsExceededException(Object(Illuminate\\Queue\\Jobs\\DatabaseJob))\n#1 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(396): Illuminate\\Queue\\Worker->markJobAsFailedIfAlreadyExceedsMaxAttempts(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), 1)\n#2 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(356): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#3 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(307): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#4 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(116): Illuminate\\Queue\\Worker->runNextJob(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#5 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(100): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#6 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#7 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#8 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#9 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#10 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#11 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(136): Illuminate\\Container\\Container->call(Array)\n#12 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Command\\Command.php(258): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#13 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#14 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(920): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#15 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(266): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#16 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(142): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#17 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php(93): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 {main}', '2021-06-16 08:49:17'),
(3, '708a909a-b262-4e09-8100-1f207c13150c', 'database', 'default', '{\"uuid\":\"708a909a-b262-4e09-8100-1f207c13150c\",\"displayName\":\"App\\\\Jobs\\\\AccountCreated\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\AccountCreated\",\"command\":\"O:23:\\\"App\\\\Jobs\\\\AccountCreated\\\":12:{s:7:\\\"\\u0000*\\u0000user\\\";N;s:11:\\\"\\u0000*\\u0000password\\\";N;s:10:\\\"\\u0000*\\u0000request\\\";N;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 'Illuminate\\Queue\\MaxAttemptsExceededException: App\\Jobs\\AccountCreated has been attempted too many times or run too long. The job may have previously timed out. in C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php:713\nStack trace:\n#0 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(482): Illuminate\\Queue\\Worker->maxAttemptsExceededException(Object(Illuminate\\Queue\\Jobs\\DatabaseJob))\n#1 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(396): Illuminate\\Queue\\Worker->markJobAsFailedIfAlreadyExceedsMaxAttempts(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), 1)\n#2 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(356): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#3 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(307): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#4 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(116): Illuminate\\Queue\\Worker->runNextJob(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#5 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(100): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#6 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#7 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#8 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#9 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#10 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#11 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(136): Illuminate\\Container\\Container->call(Array)\n#12 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Command\\Command.php(258): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#13 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#14 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(920): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#15 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(266): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#16 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(142): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#17 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php(93): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 {main}', '2021-06-16 08:49:18'),
(4, '3c226187-9dff-4eab-b012-08fcca3a4606', 'database', 'default', '{\"uuid\":\"3c226187-9dff-4eab-b012-08fcca3a4606\",\"displayName\":\"App\\\\Notifications\\\\NewAccountCreated\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":3,\"maxExceptions\":null,\"backoff\":\"\",\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":14:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";a:1:{i:0;i:12;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:12:\\\"notification\\\";O:35:\\\"App\\\\Notifications\\\\NewAccountCreated\\\":14:{s:7:\\\"\\u0000*\\u0000user\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";i:12;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:11:\\\"\\u0000*\\u0000password\\\";s:9:\\\"sdfdsfdsf\\\";s:10:\\\"\\u0000*\\u0000request\\\";a:2:{s:10:\\\"first_name\\\";s:7:\\\"Woodson\\\";s:9:\\\"last_name\\\";s:6:\\\"Prikah\\\";}s:5:\\\"tries\\\";i:3;s:2:\\\"id\\\";s:36:\\\"03554a15-1dbe-4a2a-a3c4-ba3d10d2f405\\\";s:6:\\\"locale\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}s:8:\\\"channels\\\";a:1:{i:0;s:4:\\\"mail\\\";}s:5:\\\"tries\\\";i:3;s:7:\\\"timeout\\\";N;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 'Swift_TransportException: Expected response code 250 but got code \"553\", with message \"553 Envelope FROM \'no-reply@hrms.com\' email address not allowed.\r\n\" in C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php:457\nStack trace:\n#0 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(341): Swift_Transport_AbstractSmtpTransport->assertResponseCode(\'553 Envelope FR...\', Array)\n#1 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\EsmtpTransport.php(305): Swift_Transport_AbstractSmtpTransport->executeCommand(\'MAIL FROM:<no-r...\', Array, Array, false, NULL)\n#2 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(390): Swift_Transport_EsmtpTransport->executeCommand(\'DATA\\r\\n\', Array, Array)\n#3 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(497): Swift_Transport_AbstractSmtpTransport->doDataCommand(Array)\n#4 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(516): Swift_Transport_AbstractSmtpTransport->doMailTransaction(Object(Swift_Message), \'no-reply@hrms.c...\', Array, Array)\n#5 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(206): Swift_Transport_AbstractSmtpTransport->sendTo(Object(Swift_Message), \'no-reply@hrms.c...\', Array, Array)\n#6 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Mailer.php(71): Swift_Transport_AbstractSmtpTransport->send(Object(Swift_Message), Array)\n#7 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(521): Swift_Mailer->send(Object(Swift_Message), Array)\n#8 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(288): Illuminate\\Mail\\Mailer->sendSwiftMessage(Object(Swift_Message))\n#9 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\Channels\\MailChannel.php(65): Illuminate\\Mail\\Mailer->send(Object(Illuminate\\Support\\HtmlString), Array, Object(Closure))\n#10 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(148): Illuminate\\Notifications\\Channels\\MailChannel->send(Object(App\\Models\\User), Object(App\\Notifications\\NewAccountCreated))\n#11 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(106): Illuminate\\Notifications\\NotificationSender->sendToNotifiable(Object(App\\Models\\User), \'4c05771c-2b1b-4...\', Object(App\\Notifications\\NewAccountCreated), \'mail\')\n#12 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Support\\Traits\\Localizable.php(19): Illuminate\\Notifications\\NotificationSender->Illuminate\\Notifications\\{closure}()\n#13 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(109): Illuminate\\Notifications\\NotificationSender->withLocale(NULL, Object(Closure))\n#14 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\ChannelManager.php(54): Illuminate\\Notifications\\NotificationSender->sendNow(Object(Illuminate\\Database\\Eloquent\\Collection), Object(App\\Notifications\\NewAccountCreated), Array)\n#15 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\SendQueuedNotifications.php(94): Illuminate\\Notifications\\ChannelManager->sendNow(Object(Illuminate\\Database\\Eloquent\\Collection), Object(App\\Notifications\\NewAccountCreated), Array)\n#16 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Notifications\\SendQueuedNotifications->handle(Object(Illuminate\\Notifications\\ChannelManager))\n#17 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#18 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#19 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#20 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#21 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(128): Illuminate\\Container\\Container->call(Array)\n#22 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(128): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#23 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#24 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(132): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#25 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(96): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Illuminate\\Notifications\\SendQueuedNotifications), false)\n#26 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(128): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#27 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#28 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(98): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#29 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(67): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#30 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Jobs\\Job.php(98): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#31 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(406): Illuminate\\Queue\\Jobs\\Job->fire()\n#32 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(356): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#33 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(307): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#34 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(116): Illuminate\\Queue\\Worker->runNextJob(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#35 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(100): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#36 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#37 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#38 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#39 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#40 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#41 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(136): Illuminate\\Container\\Container->call(Array)\n#42 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Command\\Command.php(258): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#43 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#44 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(920): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#45 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(266): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#46 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(142): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#47 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php(93): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#48 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#49 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#50 {main}', '2021-06-16 19:23:05'),
(5, '5c1751cc-8cb1-42ac-9cae-b8a3c3e98dc5', 'database', 'default', '{\"uuid\":\"5c1751cc-8cb1-42ac-9cae-b8a3c3e98dc5\",\"displayName\":\"App\\\\Notifications\\\\NewAccountCreated\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":3,\"maxExceptions\":null,\"backoff\":\"\",\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":14:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";a:1:{i:0;i:12;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:12:\\\"notification\\\";O:35:\\\"App\\\\Notifications\\\\NewAccountCreated\\\":14:{s:7:\\\"\\u0000*\\u0000user\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";i:12;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:11:\\\"\\u0000*\\u0000password\\\";s:9:\\\"sdfdsfdsf\\\";s:10:\\\"\\u0000*\\u0000request\\\";a:2:{s:10:\\\"first_name\\\";s:7:\\\"Woodson\\\";s:9:\\\"last_name\\\";s:6:\\\"Prikah\\\";}s:5:\\\"tries\\\";i:3;s:2:\\\"id\\\";s:36:\\\"e9ee133e-ed90-4e60-9a76-3fd8c2eebc3f\\\";s:6:\\\"locale\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}s:8:\\\"channels\\\";a:1:{i:0;s:4:\\\"mail\\\";}s:5:\\\"tries\\\";i:3;s:7:\\\"timeout\\\";N;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 'Swift_TransportException: Expected response code 250 but got code \"553\", with message \"553 Envelope FROM \'no-reply@hrms.com\' email address not allowed.\r\n\" in C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php:457\nStack trace:\n#0 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(341): Swift_Transport_AbstractSmtpTransport->assertResponseCode(\'553 Envelope FR...\', Array)\n#1 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\EsmtpTransport.php(305): Swift_Transport_AbstractSmtpTransport->executeCommand(\'MAIL FROM:<no-r...\', Array, Array, false, NULL)\n#2 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(390): Swift_Transport_EsmtpTransport->executeCommand(\'DATA\\r\\n\', Array, Array)\n#3 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(497): Swift_Transport_AbstractSmtpTransport->doDataCommand(Array)\n#4 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(516): Swift_Transport_AbstractSmtpTransport->doMailTransaction(Object(Swift_Message), \'no-reply@hrms.c...\', Array, Array)\n#5 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(206): Swift_Transport_AbstractSmtpTransport->sendTo(Object(Swift_Message), \'no-reply@hrms.c...\', Array, Array)\n#6 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Mailer.php(71): Swift_Transport_AbstractSmtpTransport->send(Object(Swift_Message), Array)\n#7 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(521): Swift_Mailer->send(Object(Swift_Message), Array)\n#8 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(288): Illuminate\\Mail\\Mailer->sendSwiftMessage(Object(Swift_Message))\n#9 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\Channels\\MailChannel.php(65): Illuminate\\Mail\\Mailer->send(Object(Illuminate\\Support\\HtmlString), Array, Object(Closure))\n#10 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(148): Illuminate\\Notifications\\Channels\\MailChannel->send(Object(App\\Models\\User), Object(App\\Notifications\\NewAccountCreated))\n#11 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(106): Illuminate\\Notifications\\NotificationSender->sendToNotifiable(Object(App\\Models\\User), \'6eb93eb0-73a0-4...\', Object(App\\Notifications\\NewAccountCreated), \'mail\')\n#12 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Support\\Traits\\Localizable.php(19): Illuminate\\Notifications\\NotificationSender->Illuminate\\Notifications\\{closure}()\n#13 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(109): Illuminate\\Notifications\\NotificationSender->withLocale(NULL, Object(Closure))\n#14 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\ChannelManager.php(54): Illuminate\\Notifications\\NotificationSender->sendNow(Object(Illuminate\\Database\\Eloquent\\Collection), Object(App\\Notifications\\NewAccountCreated), Array)\n#15 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\SendQueuedNotifications.php(94): Illuminate\\Notifications\\ChannelManager->sendNow(Object(Illuminate\\Database\\Eloquent\\Collection), Object(App\\Notifications\\NewAccountCreated), Array)\n#16 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Notifications\\SendQueuedNotifications->handle(Object(Illuminate\\Notifications\\ChannelManager))\n#17 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#18 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#19 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#20 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#21 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(128): Illuminate\\Container\\Container->call(Array)\n#22 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(128): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#23 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#24 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(132): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#25 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(96): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Illuminate\\Notifications\\SendQueuedNotifications), false)\n#26 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(128): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#27 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#28 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(98): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#29 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(67): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#30 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Jobs\\Job.php(98): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#31 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(406): Illuminate\\Queue\\Jobs\\Job->fire()\n#32 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(356): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#33 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(307): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#34 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(116): Illuminate\\Queue\\Worker->runNextJob(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#35 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(100): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#36 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#37 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#38 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#39 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#40 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#41 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(136): Illuminate\\Container\\Container->call(Array)\n#42 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Command\\Command.php(258): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#43 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#44 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(920): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#45 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(266): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#46 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(142): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#47 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php(93): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#48 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#49 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#50 {main}', '2021-06-16 19:25:19');
INSERT INTO `failed_jobs` (`id`, `uuid`, `connection`, `queue`, `payload`, `exception`, `failed_at`) VALUES
(6, 'cd0df970-fa1f-4ac7-9293-b2a55c3b0915', 'database', 'default', '{\"uuid\":\"cd0df970-fa1f-4ac7-9293-b2a55c3b0915\",\"displayName\":\"App\\\\Notifications\\\\NewAccountCreated\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":3,\"maxExceptions\":null,\"backoff\":\"\",\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":14:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";a:1:{i:0;i:12;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:12:\\\"notification\\\";O:35:\\\"App\\\\Notifications\\\\NewAccountCreated\\\":14:{s:7:\\\"\\u0000*\\u0000user\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";i:12;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:11:\\\"\\u0000*\\u0000password\\\";s:9:\\\"sdfdsfdsf\\\";s:10:\\\"\\u0000*\\u0000request\\\";a:2:{s:10:\\\"first_name\\\";s:7:\\\"Woodson\\\";s:9:\\\"last_name\\\";s:6:\\\"Prikah\\\";}s:5:\\\"tries\\\";i:3;s:2:\\\"id\\\";s:36:\\\"203fcddc-6099-495d-8bc9-015e4ab68641\\\";s:6:\\\"locale\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}s:8:\\\"channels\\\";a:1:{i:0;s:4:\\\"mail\\\";}s:5:\\\"tries\\\";i:3;s:7:\\\"timeout\\\";N;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 'Swift_TransportException: Expected response code 250 but got code \"553\", with message \"553 Envelope FROM \'no-reply@hrms.com\' email address not allowed.\r\n\" in C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php:457\nStack trace:\n#0 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(341): Swift_Transport_AbstractSmtpTransport->assertResponseCode(\'553 Envelope FR...\', Array)\n#1 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\EsmtpTransport.php(305): Swift_Transport_AbstractSmtpTransport->executeCommand(\'MAIL FROM:<no-r...\', Array, Array, false, NULL)\n#2 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(390): Swift_Transport_EsmtpTransport->executeCommand(\'DATA\\r\\n\', Array, Array)\n#3 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(497): Swift_Transport_AbstractSmtpTransport->doDataCommand(Array)\n#4 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(516): Swift_Transport_AbstractSmtpTransport->doMailTransaction(Object(Swift_Message), \'no-reply@hrms.c...\', Array, Array)\n#5 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Transport\\AbstractSmtpTransport.php(206): Swift_Transport_AbstractSmtpTransport->sendTo(Object(Swift_Message), \'no-reply@hrms.c...\', Array, Array)\n#6 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\swiftmailer\\swiftmailer\\lib\\classes\\Swift\\Mailer.php(71): Swift_Transport_AbstractSmtpTransport->send(Object(Swift_Message), Array)\n#7 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(521): Swift_Mailer->send(Object(Swift_Message), Array)\n#8 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(288): Illuminate\\Mail\\Mailer->sendSwiftMessage(Object(Swift_Message))\n#9 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\Channels\\MailChannel.php(65): Illuminate\\Mail\\Mailer->send(Object(Illuminate\\Support\\HtmlString), Array, Object(Closure))\n#10 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(148): Illuminate\\Notifications\\Channels\\MailChannel->send(Object(App\\Models\\User), Object(App\\Notifications\\NewAccountCreated))\n#11 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(106): Illuminate\\Notifications\\NotificationSender->sendToNotifiable(Object(App\\Models\\User), \'6bc22d82-6809-4...\', Object(App\\Notifications\\NewAccountCreated), \'mail\')\n#12 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Support\\Traits\\Localizable.php(19): Illuminate\\Notifications\\NotificationSender->Illuminate\\Notifications\\{closure}()\n#13 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\NotificationSender.php(109): Illuminate\\Notifications\\NotificationSender->withLocale(NULL, Object(Closure))\n#14 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\ChannelManager.php(54): Illuminate\\Notifications\\NotificationSender->sendNow(Object(Illuminate\\Database\\Eloquent\\Collection), Object(App\\Notifications\\NewAccountCreated), Array)\n#15 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Notifications\\SendQueuedNotifications.php(94): Illuminate\\Notifications\\ChannelManager->sendNow(Object(Illuminate\\Database\\Eloquent\\Collection), Object(App\\Notifications\\NewAccountCreated), Array)\n#16 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Notifications\\SendQueuedNotifications->handle(Object(Illuminate\\Notifications\\ChannelManager))\n#17 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#18 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#19 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#20 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#21 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(128): Illuminate\\Container\\Container->call(Array)\n#22 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(128): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#23 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#24 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(132): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#25 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(96): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Illuminate\\Notifications\\SendQueuedNotifications), false)\n#26 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(128): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#27 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#28 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(98): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#29 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(67): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Notifications\\SendQueuedNotifications))\n#30 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Jobs\\Job.php(98): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#31 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(406): Illuminate\\Queue\\Jobs\\Job->fire()\n#32 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(356): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#33 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(158): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#34 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(116): Illuminate\\Queue\\Worker->daemon(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#35 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(100): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#36 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#37 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#38 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#39 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#40 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(610): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#41 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(136): Illuminate\\Container\\Container->call(Array)\n#42 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Command\\Command.php(258): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#43 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#44 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(920): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#45 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(266): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#46 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\symfony\\console\\Application.php(142): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#47 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php(93): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#48 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#49 C:\\Users\\Seyram\\Desktop\\projects\\hrm\\artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#50 {main}', '2021-06-16 19:28:01');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_categories`
--

CREATE TABLE `job_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_categories`
--

INSERT INTO `job_categories` (`id`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Application Development', '2021-04-30 15:50:05', '2021-04-30 15:50:05'),
(2, 'Human Resource', '2021-04-30 15:52:43', '2021-05-01 07:09:44');

-- --------------------------------------------------------

--
-- Table structure for table `job_titles`
--

CREATE TABLE `job_titles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `specification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_titles`
--

INSERT INTO `job_titles` (`id`, `job_category_id`, `title`, `description`, `specification`, `created_at`, `updated_at`) VALUES
(2, 2, 'Human Resource Manager', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, veniam sequi tenetur quam qui, exercitationem delectus provident quas ratione minus explicabo totam assumenda harum molestias accusamus impedit, nam unde adipisci.', 'human_resource_manager_1620052775.pdf', '2021-05-01 07:16:45', '2021-05-03 14:39:36'),
(7, 1, 'Web App Developer', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, veniam sequi tenetur quam qui, exercitationem delectus provident quas ratione minus explicabo totam assumenda harum molestias accusamus impedit, nam unde adipisci.\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, veniam sequi tenetur quam qui, exercitationem delectus provident quas ratione minus explicabo totam assumenda harum molestias accusamus impedit, nam unde adipisci.', 'web_app_developer_1622310317.pdf', '2021-05-29 17:45:18', '2021-05-29 17:45:18');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_04_26_142808_create_profiles_table', 1),
(5, '2021_04_26_142903_create_work_shifts_table', 1),
(7, '2021_04_30_124621_create_job_categories_table', 2),
(8, '2021_04_30_124817_create_job_titles_table', 2),
(9, '2021_04_30_125247_create_employment_statuses_table', 2),
(10, '2021_05_03_171110_create_branches_table', 3),
(11, '2021_05_03_171257_create_departments_table', 3),
(12, '2021_05_04_164632_create_organization_metadata_table', 4),
(13, '2021_05_06_175251_create_positions_table', 5),
(14, '2021_05_27_102339_create_role_permissions_table', 6),
(17, '2021_06_11_142534_create_appraisals_table', 8),
(18, '2021_06_15_151334_create_jobs_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `organization_metadata`
--

CREATE TABLE `organization_metadata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `landmark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_staff` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pass_staff` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_staff` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization_metadata`
--

INSERT INTO `organization_metadata` (`id`, `logo`, `name`, `telephone`, `email`, `address`, `landmark`, `city`, `district`, `region`, `reg_number`, `tin`, `current_staff`, `pass_staff`, `total_staff`, `created_at`, `updated_at`) VALUES
(1, 'w5xds68liibr.png', 'African Development University', '265518694', 'info@adumail.com', 'P.O. Box ADM 4500', 'Tuidu, opposite Accra City Hotel', 'Accra Central - Accra', 'Accra Municipal Assembly', 'GREATER ACCRA', 'GH-BRN-5466465464', 'P2020564654', NULL, NULL, NULL, '2021-05-06 04:03:20', '2021-05-06 04:03:20');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Department supervisor', '2021-05-06 18:06:24', '2021-05-06 18:26:59'),
(2, 'Operations manager', '2021-05-06 18:06:36', '2021-05-06 18:26:47');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `branch_id` bigint(20) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `managers` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `supervisors` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'current',
  `personal_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `contact_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `emergency_contacts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `job` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `report_to` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `qualifications` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `memberships` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `branch_id`, `department_id`, `managers`, `supervisors`, `employee_status`, `personal_details`, `contact_details`, `emergency_contacts`, `job`, `report_to`, `qualifications`, `memberships`, `slug`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, NULL, NULL, 'current', '{\"avatar\": \"admin_admin_avatar_l9dmizZEQL5H.jpeg\", \"title\": \"Dr.\", \"firstName\": \"Admin\", \"middleName\": \"Admin\", \"lastName\": \"Super Admin\", \"staffId\": \"DFG-5415656\", \"otherId\": null, \"birthDate\": \"1992-07-19T00:00:00.000Z\", \"maritalStatus\": \"Single\", \"nationality\": \"Ghana\", \"gender\": \"Male\", \"attachments\": []}', NULL, NULL, NULL, NULL, '{\"workExperience\":[],\"education\":[],\"skills\":[],\"languages\":[],\"attachments\":[]}', NULL, 'admin-admin-super-admin', '2021-04-28 09:50:37', '2021-05-07 14:45:16'),
(4, 4, NULL, NULL, NULL, NULL, 'current', '{\"avatar\": \"thomas_afatorwu_avatar_kyytUM5i82fa.jpeg\", \"title\": null, \"firstName\": \"Thomas\", \"middleName\": \"Kwame\", \"lastName\": \"Afatorwu\", \"staffId\": null, \"otherId\": null, \"birthDate\": null, \"maritalStatus\": null, \"nationality\": null, \"gender\": null, \"attachments\": []}', NULL, NULL, NULL, NULL, '{\"workExperience\":[],\"education\":[],\"skills\":[],\"languages\":[],\"attachments\":[]}', NULL, 'thomas-kwame-afatorwu', '2021-04-29 17:46:32', '2021-05-07 20:20:28'),
(7, 7, 2, 1, '[8]', NULL, 'current', '{\"avatar\": \"francis_agbevor_avatar_4l4CImcP8UKQ.jpeg\", \"title\": \"Mr.\", \"firstName\": \"Francis\", \"middleName\": null, \"lastName\": \"Agbevor\", \"staffId\": \"hhfjhfjh\", \"otherId\": null, \"birthDate\": \"2021-06-12T13:39:50.513Z\", \"maritalStatus\": \"Single\", \"nationality\": \"Nigeria\", \"gender\": \"Male\", \"attachments\": []}', NULL, NULL, '{\"category\":\"2\",\"title\":\"2\",\"employmentStatus\":\"2\",\"department\":\"1\",\"branch\":\"2\",\"startDate\":\"2021-05-04T00:00:00.000Z\",\"endDate\":\"2021-05-04T00:00:00.000Z\",\"contractDetails\":\"contract_francis_agbevor_uVPKVTsX.pdf\"}', NULL, '{\"workExperience\":[],\"education\":[],\"skills\":[],\"languages\":[],\"attachments\":[]}', NULL, 'francis-agbevor', '2021-05-07 08:04:48', '2021-06-10 09:43:48'),
(8, 8, 2, 2, NULL, '[7]', 'current', '{\"avatar\": \"enyonam_agoha-kumah_avatar_8BSSwswPFmRm.jpeg\", \"title\": \"Mrs.\", \"firstName\": \"Enyonam\", \"middleName\": null, \"lastName\": \"Agoha-Kumah\", \"staffId\": \"AD-5456477\", \"otherId\": null, \"birthDate\": \"1992-03-24T00:00:00.000Z\", \"maritalStatus\": \"Married\", \"nationality\": \"Ghana\", \"gender\": \"Female\", \"attachments\": \"[{\\\"id\\\":\\\"0lYhM71q5zzAJSej\\\",\\\"file\\\":\\\"enyonam_agoha-kumah_3E68zlyK.pdf\\\",\\\"comment\\\":null}]\"}', '{\"address1\":\"Adenta\",\"address2\":null,\"city\":\"Adenta\",\"region\":\"GREATER ACCRA\",\"country\":\"Ghana\",\"mobile\":\"0265518694\",\"homeTelephone\":null,\"workTelephone\":null,\"workEmail\":\"enyonam@gmail.com\",\"otherEmail\":\"prikahaeyram@gmail.com\"}', '[{\"id\":\"yZuWJuBLPQUcPZKN\",\"name\":\"Wood Prikah\",\"relationship\":\"Brother\",\"mobile\":\"0265518694\",\"homeTelephone\":\"0557467520\",\"workTelephone\":null}]', '{\"category\": \"2\", \"title\": \"2\", \"employmentStatus\": \"1\", \"department\": 2, \"branch\": 2, \"startDate\": \"2021-06-30T22:00:00.000Z\", \"endDate\": \"2021-06-01T22:00:00.000Z\", \"contractDetails\": \"contract_enyonam_agoha-kumah_QBoC0FAt.pdf\", \"contractStatus\": \"award\"}', NULL, '{\"workExperience\": \"[{\\\"id\\\":\\\"cXYKDoMR7tu1FTqu\\\",\\\"company\\\":\\\"Goldem LTD\\\",\\\"jobTitle\\\":\\\"IT Manager\\\",\\\"from\\\":2010,\\\"to\\\":2015,\\\"comment\\\":null},{\\\"id\\\":\\\"S1ylRHTVsiCS7823\\\",\\\"company\\\":\\\"afsfsafsa\\\",\\\"jobTitle\\\":\\\"fasfsaf\\\",\\\"from\\\":2009,\\\"to\\\":2014,\\\"comment\\\":null}]\", \"education\": \"[{\\\"id\\\":\\\"tYY86hRz0HM4pRfc\\\",\\\"institution\\\":\\\"Accra Technical University\\\",\\\"specialization\\\":\\\"Computer Science\\\",\\\"gpa\\\":\\\"4.5\\\",\\\"started\\\":2016,\\\"completed\\\":2019}]\", \"skills\": \"[{\\\"id\\\":\\\"u9YdwbZSYOUjesZJ\\\",\\\"skill\\\":\\\"Programming\\\",\\\"yearOfExperience\\\":\\\"2\\\",\\\"comment\\\":null},{\\\"id\\\":\\\"HdI7ctfRYjH25nTX\\\",\\\"skill\\\":\\\"Developer\\\",\\\"yearOfExperience\\\":\\\"5\\\",\\\"comment\\\":null}]\", \"languages\": \"[{\\\"id\\\":\\\"jervZnjaY18X7s4C\\\",\\\"language\\\":\\\"English\\\",\\\"fluency\\\":\\\"Very Good\\\",\\\"comment\\\":null},{\\\"id\\\":\\\"H9PNxGMg8XzGe4xA\\\",\\\"language\\\":\\\"Ewe\\\",\\\"fluency\\\":\\\"Mother Tongue\\\",\\\"comment\\\":null}]\", \"attachments\": \"[{\\\"id\\\":\\\"8KpVDkxRtpcMlLRk\\\",\\\"file\\\":\\\"enyonam_agoha-kumah_n40wucZd.pdf\\\",\\\"comment\\\":\\\"Comment updated\\\"}]\"}', NULL, 'enyonam-agoha', '2021-05-21 17:08:51', '2021-06-09 12:39:32'),
(11, 12, 1, 2, NULL, NULL, 'current', '{\"avatar\": null, \"title\": \"Mr.\", \"firstName\": \"Wood\", \"middleName\": \"Seyram\", \"lastName\": \"Prikah\", \"staffId\": \"sdsdhshgfdghf\", \"otherId\": null, \"birthDate\": \"2021-06-12T11:23:13.988Z\", \"maritalStatus\": \"Single\", \"nationality\": \"Ghana\", \"gender\": \"Male\", \"attachments\": []}', '{\"address1\":\"dfgfdg\",\"address2\":null,\"city\":\"Jasikan\",\"region\":null,\"country\":\"Ghana\",\"mobile\":\"0265518694\",\"homeTelephone\":null,\"workTelephone\":null,\"workEmail\":\"wooo@gmail.com\",\"otherEmail\":null}', '[{\"id\":\"PwZm452Tu9pcoHtR\",\"name\":\"Wood Prikah\",\"relationship\":\"Brother\",\"mobile\":\"0265518694\",\"homeTelephone\":null,\"workTelephone\":null}]', '{\"category\":\"1\",\"title\":\"7\",\"employmentStatus\":\"1\",\"department\":\"2\",\"branch\":\"1\",\"startDate\":\"2021-06-01T08:00:00.000Z\",\"endDate\":\"2025-06-30T08:00:00.000Z\",\"contractDetails\":\"contract_wood_prikah_pCXQo1ym.pdf\"}', NULL, '{\"workExperience\":[],\"education\":[],\"skills\":[],\"languages\":[],\"attachments\":[]}', NULL, 'wood-seyram-prikah', '2021-05-28 13:21:25', '2021-06-12 15:18:57'),
(23, 24, NULL, NULL, NULL, NULL, 'current', '{\"avatar\":null,\"title\":null,\"firstName\":\"Woodson\",\"middleName\":null,\"lastName\":\"Prikah\",\"staffId\":null,\"otherId\":null,\"birthDate\":null,\"maritalStatus\":null,\"nationality\":null,\"gender\":null,\"attachments\":[]}', NULL, NULL, NULL, NULL, '{\"workExperience\":[],\"education\":[],\"skills\":[],\"languages\":[],\"attachments\":[]}', NULL, 'woodson-prikah', '2021-06-16 12:45:40', '2021-06-16 12:45:40');

-- --------------------------------------------------------

--
-- Table structure for table `role_permissions`
--

CREATE TABLE `role_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_permission` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`role_permission`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_permissions`
--

INSERT INTO `role_permissions` (`id`, `role_permission`, `created_at`, `updated_at`) VALUES
(1, '[{\"role\":\"ESS\",\"permission\":4},{\"role\":\"Supervisor\",\"permission\":3},{\"role\":\"Manager\",\"permission\":2},{\"role\":\"Admin\",\"permission\":1}]', '2021-05-27 10:50:28', '2021-05-27 10:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `role`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin@mail.com', '2021-04-28 09:50:37', '$2y$10$r5t7.1848OzDyo6/XN6q5eNpBGFzDhvDdAD5dSYlH71J4Xn68G/qC', '[\"ESS\",\"Admin\"]', 1, 'DXHpm2JPAyU8wkoikJLmCwINlrhrzfQzi43FpABZbzFdYbWA4Hw8G5q1jTui', '2021-04-28 09:50:37', '2021-06-09 13:50:21'),
(4, 'thomas@mail.com', NULL, '$2y$10$oYa7U/TnPzHaZVji86g71udZD1sFmLNIdi3IKZMYRdv5dWdD3Ir6y', '[\"ESS\",\"Manager\"]', 0, 'Imq12I3kFUiHiAmSIdK1qBnkFjNx4QmNFNrgPtOCbSOSIo8QjdwAIBff2VXP', '2021-04-29 17:46:31', '2021-06-09 13:51:25'),
(7, 'agbevor@mail.com', NULL, '$2y$10$W4keNH2KZ2F4nCPxRvfXzeBuCvZheVcyiHanOfCRgwblXtC9MKjGK', '[\"ESS\",\"Supervisor\"]', 0, NULL, '2021-05-07 08:04:47', '2021-06-12 12:22:24'),
(8, 'enyonam@gmail.com', NULL, '$2y$10$oYa7U/TnPzHaZVji86g71udZD1sFmLNIdi3IKZMYRdv5dWdD3Ir6y', '[\"ESS\",\"Manager\"]', 1, 'CaoGUfIWamNH93AdeVjwFDWYPoSPQ6RU52gkEw5yorFDD3vrXT9MlL0qkl84', '2021-05-21 17:08:50', '2021-06-10 09:49:54'),
(12, 'seyram.developer@gmail.com', NULL, '$2y$10$Kf9pqu/U7ICsqPgyGVQy6eJEw4OjQe2p1cXXM.KWWyfNWgxylmZPW', '[\"ESS\",\"Admin\"]', 1, 'm4Na7cUNkBd9op02O5jCD6JpvsRJPXpIbTFVuWh8eKfuT9zAXXi5sQ1APCZa', '2021-05-28 13:21:25', '2021-06-15 09:27:35'),
(24, 'prikahaeyram@gmail.com', NULL, '$2y$10$m4au/K1fExHyjNUCrxin9um4VuTZnJjZYbDvR0BCKmUAe/1IfS.ia', '[\"ESS\"]', 1, NULL, '2021-06-16 12:45:40', '2021-06-16 12:45:40');

-- --------------------------------------------------------

--
-- Table structure for table `work_shifts`
--

CREATE TABLE `work_shifts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `days` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `staff` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `work_shifts`
--

INSERT INTO `work_shifts` (`id`, `name`, `from`, `to`, `duration`, `days`, `staff`, `created_at`, `updated_at`) VALUES
(1, 'Morning Shift', '2021-06-01T08:00:00.963Z', '2021-06-01T16:30:00.963Z', '8 hours 30 minutes', '[\"Weekdays\"]', NULL, '2021-06-01 15:45:27', '2021-06-01 15:45:27'),
(8, 'Evening Shift', '2021-06-01T16:00:00.528Z', '2021-06-01T22:00:00.528Z', '6 hours', '[\"Monday\",\"Wednesday\",\"Friday\"]', NULL, '2021-06-01 19:49:45', '2021-06-01 19:49:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appraisals`
--
ALTER TABLE `appraisals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employment_statuses`
--
ALTER TABLE `employment_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_categories`
--
ALTER TABLE `job_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_titles`
--
ALTER TABLE `job_titles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_titles_job_category_id_foreign` (`job_category_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organization_metadata`
--
ALTER TABLE `organization_metadata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profiles_user_id_foreign` (`user_id`);

--
-- Indexes for table `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `work_shifts`
--
ALTER TABLE `work_shifts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appraisals`
--
ALTER TABLE `appraisals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `employment_statuses`
--
ALTER TABLE `employment_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `job_categories`
--
ALTER TABLE `job_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `job_titles`
--
ALTER TABLE `job_titles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `organization_metadata`
--
ALTER TABLE `organization_metadata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `role_permissions`
--
ALTER TABLE `role_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `work_shifts`
--
ALTER TABLE `work_shifts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `job_titles`
--
ALTER TABLE `job_titles`
  ADD CONSTRAINT `job_titles_job_category_id_foreign` FOREIGN KEY (`job_category_id`) REFERENCES `job_categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
