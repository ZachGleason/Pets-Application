-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema petproject
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema petproject
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `petproject` DEFAULT CHARACTER SET utf8 ;
USE `petproject` ;

-- -----------------------------------------------------
-- Table `petproject`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petproject`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255),
  `lastname` VARCHAR(255),
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `salt` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petproject`.`type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petproject`.`type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petproject`.`pets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petproject`.`pets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `breed` VARCHAR(255) NOT NULL,
  `parents_name` VARCHAR(255) NULL,
  `allergies` VARCHAR(255) NULL,
  `notes` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  `type_id` INT NOT NULL,
  `media` VARCHAR(2083) NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pets_type_idx` (`type_id` ASC) VISIBLE,
  INDEX `fk_pets_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_pets_type`
    FOREIGN KEY (`type_id`)
    REFERENCES `petproject`.`type` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pets_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `petproject`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petproject`.`medications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petproject`.`medications` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `dosage` VARCHAR(45) NOT NULL,
  `frequency` VARCHAR(45) NOT NULL,
  `notes` TEXT NULL,
  `pets_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  INDEX `fk_Medications_pets1_idx` (`pets_id` ASC) VISIBLE,
  CONSTRAINT `fk_Medications_pets1`
    FOREIGN KEY (`pets_id`)
    REFERENCES `petproject`.`pets` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petproject`.`foods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petproject`.`foods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `portion` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  `notes` TEXT NULL,
  `pets_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_foods_pets1_idx` (`pets_id` ASC) VISIBLE,
  CONSTRAINT `fk_foods_pets1`
    FOREIGN KEY (`pets_id`)
    REFERENCES `petproject`.`pets` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petproject`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petproject`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `time` VARCHAR(255) NOT NULL,
  `frequency` VARCHAR(255) NOT NULL,
  `isDaily` TINYINT(1) NOT NULL DEFAULT 0,
  `isCompleted` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  `pets_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tasks_pets1_idx` (`pets_id` ASC) VISIBLE,
  CONSTRAINT `fk_tasks_pets1`
    FOREIGN KEY (`pets_id`)
    REFERENCES `petproject`.`pets` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

ALTER TABLE `petproject`.`pets` 
ADD COLUMN `birth` DATE NULL DEFAULT NULL AFTER `users_id`,
ADD COLUMN `rescue_date` DATE NULL DEFAULT NULL AFTER `birth`;
