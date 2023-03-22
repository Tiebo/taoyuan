package com.taoyuanbackend.service.user;


import com.taoyuanbackend.vo.RespResult;

public interface RegisterService {
    RespResult register(String account, String password, String confirmPassword);
}
