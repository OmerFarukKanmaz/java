// package com.rest.webservices.restfulwebservices.exception.versioning;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// public class VersioningPersonController {

// @GetMapping("v1/person")
// public PersonV1 getFirstVersion1OfPerson() {
// return new PersonV1("Bobo");
// }

// @GetMapping("v2/person")
// public PersonV2 getFirstVersion2OfPerson() {
// return new PersonV2("Bobo", "Charlie");
// }

// @GetMapping(path = "/person", params = "version=1")
// public PersonV1 getFirstVersion1OfPersonRequestParams() {
// return new PersonV1("Bobo");
// }

// @GetMapping(path = "/person", params = "version=1")
// public PersonV2 getFirstVersion2OfPersonRequestParams() {
// return new PersonV2("Bobo", "Charlie");
// }

// @GetMapping(path = "/person/header", headers = "X-API-VERSION=1")
// public PersonV1 getFirstVersion1OfPersonHeader() {
// return new PersonV1("Bobo");
// }

// @GetMapping(path = "/person/header", headers = "X-API-VERSION=1")
// public PersonV2 getFirstVersion2OfPersonRequestHeader() {
// return new PersonV2("Bobo", "Charlie");
// }

// @GetMapping(path = "/person/accept", produces =
// "application/vnd.company.app-v1+json")
// public PersonV1 getFirstVersion1OfPersonAccept() {
// return new PersonV1("Bobo");
// }

// @GetMapping(path = "/person/accept", produces =
// "application/vnd.company.app-v2+json")
// public PersonV2 getFirstVersion2OfPersonRequestAccept() {
// return new PersonV2("Bobo", "Charlie");
// }

// }
