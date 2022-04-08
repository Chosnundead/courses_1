/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ja19.afterLoginWindow;

import javafx.animation.TranslateTransition;
import javafx.scene.Node;
import javafx.util.Duration;

public class ShakeAnimation {

    private TranslateTransition tt;

    public ShakeAnimation(Node node) {
        this.tt = new TranslateTransition(Duration.millis(200), node);
        this.tt.setFromX(0f);
        this.tt.setFromY(0f);
        this.tt.setByX(13f);
        this.tt.setByY(6f);
        this.tt.setCycleCount(3);
        this.tt.setAutoReverse(true);
    }

    public void _playAnim() {
        this.tt.playFromStart();
    }
}
