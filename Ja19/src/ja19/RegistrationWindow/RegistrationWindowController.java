/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/javafx/FXMLController.java to edit this template
 */
package ja19.RegistrationWindow;

import ja19.Database.Database;
import ja19.FXMLControllerMain;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import javafx.scene.control.ToggleGroup;

/**
 * FXML Controller class
 *
 * @author Kaltb
 */
public class RegistrationWindowController implements Initializable {

    @FXML
    private Label title;
    @FXML
    private TextField loginField;
    @FXML
    private PasswordField passwordField;
    @FXML
    private TextField firstNameField;
    @FXML
    private TextField secondNameField;
    @FXML
    private TextField thirdNameField;
    @FXML
    private RadioButton femaleRadioBox;
    @FXML
    private ToggleGroup sexGroup;
    @FXML
    private RadioButton maleRadioBox;
    @FXML
    private TextField countryField;
    @FXML
    private Button registerButton;

    /**
     * Initializes the controller class.
     */
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        Database db = new Database();

        registerButton.setOnAction(event -> {
            try {
                db._registerAUser(firstNameField.getText(), secondNameField.getText(), thirdNameField.getText(), loginField.getText(), passwordField.getText(), countryField.getText(), (maleRadioBox.isSelected() ? "Male" : "Female"));
                FXMLControllerMain.registerStage.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

}
