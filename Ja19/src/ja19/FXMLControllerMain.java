package ja19;

import ja19.Database.Database;
import ja19.afterLoginWindow.ShakeAnimation;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import java.sql.ResultSet;

public class FXMLControllerMain implements Initializable {

    @FXML
    private Label title;
    @FXML
    private Button registrationButton;
    @FXML
    private TextField loginField;
    @FXML
    private PasswordField passwordField;
    @FXML
    private Button loginButton;

    public static Stage registerStage = null;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        loginButton.setOnAction(event -> {
            try {
                String loginText = loginField.getText().trim();
                String passwordText = passwordField.getText().trim();
                if (!loginText.equals("") && !passwordText.equals("")) {
                    _loginUser(loginText, passwordText);
                } else {
                    System.out.println("Empty login or password fields!");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        registrationButton.setOnAction(event -> {
            try {
                Parent anotherRoot = FXMLLoader.load(getClass().getResource("RegistrationWindow/registrationWindow.fxml"));
                Stage anotherStage = new Stage();
                anotherStage.setTitle("Registration");
                anotherStage.setScene(new Scene(anotherRoot));
                anotherStage.setX(FXMain.stage.getX() + 200);
                anotherStage.setY(FXMain.stage.getY() + 100);
                anotherStage.show();
                this.registerStage = anotherStage;
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        title.setOnMouseClicked(event -> {
            try {
                Parent anotherRoot = FXMLLoader.load(getClass().getResource("afterLoginWindow/afterLogin.fxml"));
                Stage anotherStage = new Stage();
                anotherStage.setTitle("");
                anotherStage.setScene(new Scene(anotherRoot));
                anotherStage.setX(FXMain.stage.getX() + 200);
                anotherStage.setY(FXMain.stage.getY() + 100);
                anotherStage.show();
            } catch (Exception e) {
                e.printStackTrace();
            }
//            Parent root = FXMLLoader.load(getClass().getResource("FXMLMain.fxml"));
            //
            //            Scene scene = new Scene(root);
            //
            //            Stage newWindow = new Stage();
            //            newWindow.setTitle("");
            //            newWindow.setScene(scene);
            //            newWindow.setX(newWindow.getX() + 200);
            //            newWindow.setY(newWindow.getY() + 100);
            //            newWindow.show();
        });
    }

    private void _loginUser(String loginText, String passwordText) throws Exception {
        Database db = new Database();
        ResultSet answer = db._loginAUser(loginText, passwordText);
        int counter = 0;
        while (answer.next()) {
            counter++;
        }
        if (counter >= 1) {
            try {
                Parent lastRoot = FXMLLoader.load(getClass().getResource("afterLoginWindow/afterLogin.fxml"));
                Stage lastStage = new Stage();
                lastStage.setTitle("Success");
                lastStage.setScene(new Scene(lastRoot));
                lastStage.setX(FXMain.stage.getX() + 200);
                lastStage.setY(FXMain.stage.getY() + 100);
                lastStage.show();
                FXMain.stage.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            new ShakeAnimation(loginField)._playAnim();
            new ShakeAnimation(passwordField)._playAnim();
        }
    }

}
