package ja13;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class GUI extends JFrame {

    private JButton button = new JButton("Press");
    private JTextField input = new JTextField("", 5);
    private JLabel label = new JLabel("Input:");
    private JRadioButton radio_1 = new JRadioButton("Select_1");
    private JRadioButton radio_2 = new JRadioButton("Select_2");
    private JCheckBox check = new JCheckBox("Check", false);

    public GUI() {
        super("Simple Example");
        this.setBounds(100, 100, 250, 100);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container container = this.getContentPane();
        container.setLayout(new GridLayout(3, 2, 2, 2));
        container.add(label);
        container.add(input);

        ButtonGroup group = new ButtonGroup();
        group.add(radio_1);
        group.add(radio_2);
        container.add(radio_1);
        radio_1.setSelected(true);
        container.add(radio_2);
        container.add(check);

        button.addActionListener(new ButtonEventListener());
        container.add(button);
    }

    class ButtonEventListener implements ActionListener {

        public void actionPerformed(ActionEvent event) {
            String message = "";
            message += "Button was pressed\nText is " + input.getText() + "\n" + (radio_1.isSelected() ? "Radio #1" : "Radio #2") + " is selected!\nCheckbox is " + (check.isSelected() ? "checked" : "unchecked");
            JOptionPane.showMessageDialog(null, message, "Output", JOptionPane.PLAIN_MESSAGE);
        }
    }
}
