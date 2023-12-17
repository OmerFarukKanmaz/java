package com.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {

    private static List<User> users = new ArrayList<>();
    private static int counter = 0;

    static {
        users.add(new User(++counter, "Babo", LocalDate.now().minusYears(25)));
        users.add(new User(++counter, "qwes", LocalDate.now().minusYears(25)));
        users.add(new User(++counter, "frsgh", LocalDate.now().minusYears(25)));
    }

    public List<User> findAll() {
        return users;
    } 

    public User save(User user) {
        user.setID(++counter+1);
        users.add(user);
        return user;
    }

    public User findOne(int id) {
        Predicate<? super User> predicate = user -> user.getID().equals(id);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    public void deleteById(int id) {
        Predicate<? super User> predicate = user -> user.getID().equals(id);
        users.removeIf(predicate);

    }
}
