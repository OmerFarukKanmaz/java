package com.rest.webservices.restfulwebservices.helloworld;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldontroller {

    private MessageSource messageSource;

    public HelloWorldontroller(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @GetMapping("hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping("hello-world-bean")
    public helloWorldBean helloWorldBean() {
        return new helloWorldBean("Hello World");
    }

    @GetMapping("hello-world-bean-var/{name}")
    public helloWorldBean helloWorldBeanVar(@PathVariable String name) {
        return new helloWorldBean(String.format("Hello World %s", name));
    }

    @GetMapping("hello-world-international")
    public String helloWorldInternational() {
        Locale locale = LocaleContextHolder.getLocale();
        return messageSource.getMessage("good.morning.message", null, "Default Message", locale);
    }
}