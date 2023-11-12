package dev.minutemunch.orders.objects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import org.bson.types.ObjectId;

@Getter
@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    private ObjectId id;

    public ObjectId getId() {
        return id;
    }

    private Location location;

    public Location getLocation() {
        return location;
    }

    private List<String> foodList;

    public List<String> getFoodList() {
        return foodList;
    }

    private List<String> drinkList;

    public List<String> getDrinkList() {
        return drinkList;
    }

    private Integer diningSwipes;

    public Integer getDiningSwipes() {
        return diningSwipes;
    }
    private String eta;

    public String getEta() {
        return eta;
    }

    private Float payout;

    public Float getPayout() {
        return payout;
    }

    private String phoneNumber;

    public String getPhoneNumber() {
        return phoneNumber;
    }

    private String email;

    public String getEmail() {
        return email;
    }

    private String name;

    public String getName() {
        return name;
    }

    private String diningHall;

    public String getDiningHall() {
        return diningHall;
    }
    public Order(Location location, List<String> foodList, List<String> drinkList, Integer diningSwipes, String eta, Float payout, String phoneNumber, String email, String name, String diningHall) {
        this.foodList = foodList;
        this.drinkList = drinkList;
        this.diningSwipes = diningSwipes;
        this.eta = eta;
        this.payout = payout;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.name = name;
        this.diningHall = diningHall;
        this.location = new Location(location.getResidenceHall(), location.getResidenceArea());
    }
}