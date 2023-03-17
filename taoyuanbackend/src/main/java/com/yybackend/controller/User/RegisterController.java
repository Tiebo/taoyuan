package com.yybackend.controller.User;

import com.yybackend.service.user.RegisterService;
import com.yybackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @PostMapping("/api/user/account/register/")
    public RespResult Register(@RequestParam Map<String, String> data) {
        String account = data.get("account");
        String password = data.get("password");
        String confirmPassword = data.get("confirm_password");
        return registerService.register(account, password, confirmPassword);
    }

}
