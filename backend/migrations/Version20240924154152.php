<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240924154152 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE seance (id INT AUTO_INCREMENT NOT NULL, psychomotricien VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, nom VARCHAR(255) NOT NULL, date DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ses_seance (id INT AUTO_INCREMENT NOT NULL, id_seance_id INT NOT NULL, id_user_id INT NOT NULL, INDEX IDX_71FDC186634CC6B3 (id_seance_id), INDEX IDX_71FDC18679F37AE5 (id_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ses_seance ADD CONSTRAINT FK_71FDC186634CC6B3 FOREIGN KEY (id_seance_id) REFERENCES seance (id)');
        $this->addSql('ALTER TABLE ses_seance ADD CONSTRAINT FK_71FDC18679F37AE5 FOREIGN KEY (id_user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ses_seance DROP FOREIGN KEY FK_71FDC186634CC6B3');
        $this->addSql('ALTER TABLE ses_seance DROP FOREIGN KEY FK_71FDC18679F37AE5');
        $this->addSql('DROP TABLE seance');
        $this->addSql('DROP TABLE ses_seance');
        $this->addSql('DROP TABLE user');
    }
}
