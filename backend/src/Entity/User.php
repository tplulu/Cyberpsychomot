<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    /**
     * @var Collection<int, SesSeance>
     */
    #[ORM\OneToMany(targetEntity: SesSeance::class, mappedBy: 'idUser')]
    private Collection $sesSeances;

    public function __construct()
    {
        $this->sesSeances = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

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
            $sesSeance->setIdUser($this);
        }

        return $this;
    }

    public function removeSesSeance(SesSeance $sesSeance): static
    {
        if ($this->sesSeances->removeElement($sesSeance)) {
            // set the owning side to null (unless already changed)
            if ($sesSeance->getIdUser() === $this) {
                $sesSeance->setIdUser(null);
            }
        }

        return $this;
    }
}
