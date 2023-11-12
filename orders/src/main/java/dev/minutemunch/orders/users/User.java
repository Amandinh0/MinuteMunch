package dev.minutemunch.orders.users;

import dev.minutemunch.orders.objects.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;

    public ObjectId getId() {
        return id;
    }
    private String email;

    public String getEmail() {
        return email;
    }

    private String password;

    public String getPassword() {
        return password;
    }
    public User(String email, String password) {
        this.password = password;
        this.email = email;
    }
}