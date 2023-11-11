package dev.minutemunch.orders.objects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import org.bson.types.ObjectId;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    private ObjectId id;

    private Location location;

    private List<String> foodList;

    private List<String> drinkList;

    private Integer diningSwipes;

    private String eta;

    private Float payout;

    private String phoneNumber;

    private String email;

    private String name;

    private String diningHall;
    public Order(List<String> foodList, List<String> drinkList, Integer diningSwipes, String eta, Float payout, String phoneNumber, String email, String name, String diningHall) {
        this.foodList = foodList;
        this.drinkList = drinkList;
        this.diningSwipes = diningSwipes;
        this.eta = eta;
        this.payout = payout;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.name = name;
        this.diningHall = diningHall;
    }
}