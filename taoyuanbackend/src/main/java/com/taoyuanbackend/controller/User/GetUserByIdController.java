package com.taoyuanbackend.controller.User;

import com.alibaba.fastjson.JSONObject;
import com.taoyuanbackend.mapper.UserMapper;
import com.taoyuanbackend.pojo.User;
import com.taoyuanbackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
