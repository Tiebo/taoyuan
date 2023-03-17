package com.yybackend.service.user;


import com.yybackend.vo.RespResult;

public interface LoginService {
    RespResult getToken(String account, String password);
}
