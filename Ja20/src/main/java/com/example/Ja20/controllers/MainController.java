package com.example.Ja20.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String _home(Model model) {
        model.addAttribute("name", "Denis");
        return "home";
    }

}
