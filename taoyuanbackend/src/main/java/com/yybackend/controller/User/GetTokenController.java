package com.yybackend.controller.User;

import com.yybackend.service.user.LoginService;
import com.yybackend.vo.RespResult;
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
        String account = data.get("account");
        String password = data.get("password");
        return loginService.getToken(account, password);
    }
}