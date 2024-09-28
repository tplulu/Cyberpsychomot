<?php

namespace App\Entity;

use App\Repository\SeanceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SeanceRepository::class)]
class Seance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $psychomotricien = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    /**
     * @var Collection<int, SesSeance>
     */
    #[ORM\OneToMany(targetEntity: SesSeance::class, mappedBy: 'idSeance')]
    private Collection $sesSeances;

    public function __construct()
    {
        $this->sesSeances = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPsychomotricien(): ?string
    {
        return $this->psychomotricien;
    }

    public function setPsychomotricien(string $psychomotricien): static
    {
        $this->psychomotricien = $psychomotricien;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return Collection<int, SesSeance>
     */
    public function getSesSeances(): Collection
    {
        return $this->sesSeances;
    }

    public function addSesSeance(SesSeance $sesSeance): static
    {
        if (!$this->sesSeances->contains($sesSeance)) {
            $this->sesSeances->add($sesSeance);
            $sesSeance->setIdSeance($this);
        }

        return $this;
    }

    public function removeSesSeance(SesSeance $sesSeance): static
    {
        if ($this->sesSeances->removeElement($sesSeance)) {
            // set the owning side to null (unless already changed)
            if ($sesSeance->getIdSeance() === $this) {
                $sesSeance->setIdSeance(null);
            }
        }

        return $this;
    }
}
