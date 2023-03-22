package com.taoyuanbackend.controller.User;

import com.taoyuanbackend.service.user.LoginService;
import com.taoyuanbackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class GetTokenController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/api/user/account/token/")
    public RespResult getToken(@RequestParam Map<String, String> data) {
        System.out.println("data = " + data);
        String username = data.get("username");
        String password = data.get("password");
        return loginService.getToken(username, password);
    }
}