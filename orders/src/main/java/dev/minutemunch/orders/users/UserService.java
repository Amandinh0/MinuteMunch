package dev.minutemunch.orders.users;

import dev.minutemunch.orders.objects.Order;
import dev.minutemunch.orders.objects.OrderRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
class UserService {
    @Autowired
    private UserRepository repository;

   public Optional<User> findUser(String email){
        return (repository.findByEmail(email));
    }
}
