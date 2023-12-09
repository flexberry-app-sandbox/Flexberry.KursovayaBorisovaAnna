package Kursovaya_Borisova_anna.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Borisova_anna.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставУслуги
 */
@Entity(name = "IISKursovaya_Borisova_annaСоставУслуги")
@Table(schema = "public", name = "СоставУслуги")
public class SostavUslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private String количество;

    @Column(name = "Единицы")
    private String единицы;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovar")
    @Convert("Tovar")
    @Column(name = "Товар", length = 16, unique = true, nullable = false)
    private UUID _tovarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovar", insertable = false, updatable = false)
    private Tovar tovar;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;


    public SostavUslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКоличество() {
      return количество;
    }

    public void setКоличество(String количество) {
      this.количество = количество;
    }

    public String getЕдиницы() {
      return единицы;
    }

    public void setЕдиницы(String единицы) {
      this.единицы = единицы;
    }


}