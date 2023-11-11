package dev.minutemunch.orders.objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService service;

    @GetMapping
    public ResponseEntity<List<Order>> getOrders() {
        return new ResponseEntity<List<Order>>(service.findAllOrders(), HttpStatus.OK);
    }

    @GetMapping("/{email}")
    //path variable lets framework know we want to convert path varible to string id
    public ResponseEntity<Optional<Order>> getSingleOrder(@PathVariable String email) {
        return new ResponseEntity<Optional<Order>>(service.singleOrder(email), HttpStatus.OK);
    }
}
