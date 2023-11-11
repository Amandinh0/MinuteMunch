
package dev.minutemunch.orders.objects;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "reviews")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Location {
    @Id
    private ObjectId id;
    private String residenceHall;

    public void setResidenceHall(String newHall) {
        this.residenceHall = newHall;
    }

    public String getResidenceHall() {
        return this.residenceHall;
    }
    private String residenceArea;

    public void setResidenceArea(String newArea) {
        this.residenceArea = newArea;
    }

    public String getResidenceArea() {
        return this.residenceArea;
    }


    public Location(String residenceHall, String residenceArea) {
        this.residenceArea = residenceArea;
        this.residenceHall = residenceHall;
    }
}
