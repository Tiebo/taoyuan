package com.taoyuanbackend.service.user;


import com.taoyuanbackend.vo.RespResult;

public interface LoginService {
    RespResult getToken(String account, String password);
}
