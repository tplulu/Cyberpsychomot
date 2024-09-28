<?php

namespace App\Entity;

use App\Repository\SesSeanceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SesSeanceRepository::class)]
class SesSeance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'sesSeances')]
    #[ORM\JoinColumn(nullable: false)]
    private ?seance $idSeance = null;

    #[ORM\ManyToOne(inversedBy: 'sesSeances')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $idUser = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdSeance(): ?seance
    {
        return $this->idSeance;
    }

    public function setIdSeance(?seance $idSeance): static
    {
        $this->idSeance = $idSeance;

        return $this;
    }

    public function getIdUser(): ?User
    {
        return $this->idUser;
    }

    public function setIdUser(?User $idUser): static
    {
        $this->idUser = $idUser;

        return $this;
    }
}
