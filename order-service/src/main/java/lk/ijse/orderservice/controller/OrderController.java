package lk.ijse.orderservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/order")
public class OrderController {

    @GetMapping("all")
    public String getAll(){
        return "order 1, order 2, order 3";
    }
}
