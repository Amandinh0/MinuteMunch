package dev.minutemunch.orders.objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    //tells framework that whatever we get as the request body we want to create a map of key string and value string called payload
    public ResponseEntity<Order> createOrder(@RequestBody Order newOrder) {
        return new ResponseEntity<Order>(service.addOrder(newOrder), HttpStatus.CREATED);
    }
}
