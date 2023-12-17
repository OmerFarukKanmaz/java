package com.rest.webservices.restfulwebservices.exception.versioning;

public class PersonV2 {

    private String name;
    private String surname;

    public PersonV2(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Override
    public String toString() {
        return "PersonV2 [name=" + name + ", surname=" + surname + "]";
    }

}
