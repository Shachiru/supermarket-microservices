package lk.ijse.productservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/product")
public class ProductController {

    @GetMapping("all")
    public String getAll(){
        return "pr 1, pr 2, pr 3";
    }
}

//  GET - http://localhost:8081/product-service/api/v1/product/all
