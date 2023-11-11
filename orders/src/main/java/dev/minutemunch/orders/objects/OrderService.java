package dev.minutemunch.orders.objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
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
}
