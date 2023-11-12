package dev.minutemunch.orders.objects;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
class OrderService {
    @Autowired
    private OrderRepository repository;

    public List<Order> findAllOrders() {
        return repository.findAll();
    }

   public Optional<Order> singleOrder(String email){
        return (repository.findByEmail(email));
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public Order addOrder(Order newOrder) {

        Order order = new Order(newOrder.getLocation(), newOrder.getFoodList(), newOrder.getDrink(), newOrder.getDiningSwipes(), newOrder.getEta(), newOrder.getPayout(), newOrder.getPhoneNumber(), newOrder.getEmail(), newOrder.getName(), newOrder.getDiningHall());

        Order savedOrder = repository.save(order);

        return savedOrder;
    }

    public String deleteOrder(ObjectId id) {
        repository.deleteById(id);
        return "deleted";
    }


}
