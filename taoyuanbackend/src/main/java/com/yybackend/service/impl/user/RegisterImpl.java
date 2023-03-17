package com.yybackend.service.impl.user;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.yybackend.mapper.UserMapper;
import com.yybackend.pojo.User;
import com.yybackend.service.user.RegisterService;
import com.yybackend.vo.RespResult;
import com.yybackend.vo.SystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class RegisterImpl implements RegisterService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RespResult register(String account, String password, String confirmPassword) {
        JSONObject res = new JSONObject();
        if (account == null || account.equals("")) {
            throw new SystemException(403, "账号不能为空");
        }
        if (password == null || confirmPassword == null || password.equals("")) {
            throw new SystemException(403, "密码不能为空");
        }
        if (!password.equals(confirmPassword)) {
            throw new SystemException(403, "俩次密码不同");
        }
        // 去空格
        account = account.trim();
        if (account.length() > 20) {
            throw new SystemException(403, "账号长度不能大于20");
        }
        if (password.length() > 30) {
            throw new SystemException(403, "密码长度不能大于100");
        }
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getAccount, account);
        User confirmUser = userMapper.selectOne(queryWrapper);
        if (confirmUser != null) {
            throw new SystemException(403, "用户名已存在");
        }

        String encodePwd = passwordEncoder.encode(password);
        String photo = "https://cdn.acwing.com/media/user/profile/photo/184248_lg_4fe90ff833.jpg";
        User user = new User(
                null,
                "未命名",
                0,
                account,
                "",
                "",
                "",
                photo,
                encodePwd,
                "",
                2
        );
        userMapper.insert(user);
        res.put("msg", "success");
        return RespResult.success(res);
    }
}
