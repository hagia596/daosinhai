CREATE TABLE `userProfile` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fullName` varchar(255),
	`age` int,
	`occupation` varchar(255),
	`interests` text,
	`location` varchar(255),
	`phone` varchar(20),
	`email` varchar(320),
	`bio` text,
	`metadata` json,
	`lastUpdated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `userProfile_id` PRIMARY KEY(`id`),
	CONSTRAINT `userProfile_userId_unique` UNIQUE(`userId`)
);
