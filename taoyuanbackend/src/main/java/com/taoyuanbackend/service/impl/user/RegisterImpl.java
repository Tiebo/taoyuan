package com.taoyuanbackend.service.impl.user;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.taoyuanbackend.mapper.UserMapper;
import com.taoyuanbackend.pojo.User;
import com.taoyuanbackend.service.user.RegisterService;
import com.taoyuanbackend.vo.RespResult;
import com.taoyuanbackend.vo.SystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class RegisterImpl implements RegisterService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RespResult register(String username, String password, String confirmPassword) {
        JSONObject res = new JSONObject();
        if (username == null || username.equals("")) {
            throw new SystemException(403, "账号不能为空");
        }
        if (password == null || confirmPassword == null || password.equals("")) {
            throw new SystemException(403, "密码不能为空");
        }
        if (!password.equals(confirmPassword)) {
            throw new SystemException(403, "俩次密码不同");
        }
        // 去空格
        username = username.trim();
        if (username.length() > 20) {
            throw new SystemException(403, "账号长度不能大于20");
        }
        if (password.length() > 30) {
            throw new SystemException(403, "密码长度不能大于100");
        }
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getUsername, username);
        User confirmUser = userMapper.selectOne(queryWrapper);
        if (confirmUser != null) {
            throw new SystemException(403, "用户名已存在");
        }

        String encodePwd = passwordEncoder.encode(password);
        String photo = "https://cdn.acwing.com/media/user/profile/photo/184248_lg_4fe90ff833.jpg";
        User user = new User(
                null,
                encodePwd,
                new Date(),
                1,
                username,
                "",
                "",
                "",
                0,
                0,
                new Date()
        );
        userMapper.insert(user);
        res.put("msg", "success");
        return RespResult.success(res);
    }
}
