package dev.minutemunch.orders.users;

import dev.minutemunch.orders.objects.Order;
import dev.minutemunch.orders.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("/{email}")
    //path variable lets framework know we want to convert path varible to string id
    public String getUser(@PathVariable String email) {
         Optional<User> user = service.findUser(email);
        if (user.isPresent()) {
            return user.get().getPassword();
        }
        else return null;
    }
}
