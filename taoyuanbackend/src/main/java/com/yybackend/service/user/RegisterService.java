package com.yybackend.service.user;


import com.yybackend.vo.RespResult;

public interface RegisterService {
    RespResult register(String account, String password, String confirmPassword);
}
