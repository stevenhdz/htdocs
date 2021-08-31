<?php
/**
 * @Entity @Table(name="products")
 */
class Product
{
    /** @Id @Column(type="integer") @GeneratedValue */
    protected $id;
    /** @Column(type="string") */
    protected $name;

    protected $name1;

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setName1($name1)
    {
        $this->name1 = $name1;
    }
}
