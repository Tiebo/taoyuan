package com.yybackend.controller.User;

import com.alibaba.fastjson.JSONObject;
import com.yybackend.mapper.UserMapper;
import com.yybackend.pojo.User;
import com.yybackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class GetUserByIdController {

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/api/get/user/info/{id}/")
	RespResult getUserInfoById(@PathVariable String id) {
        User user = userMapper.selectById(id);
        user.setPassword("0");
        JSONObject res = new JSONObject();
        res.put(user.getUsername(), user);
        return RespResult.success(res);
    }
}
