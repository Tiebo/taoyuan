package com.yybackend.service.impl.utils;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.yybackend.mapper.UserMapper;
import com.yybackend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String account) throws UsernameNotFoundException {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getAccount, account);
        User user = userMapper.selectOne(queryWrapper);
        if (user == null) {
            throw new RuntimeException("用户不存在");
        }

        return new UserDetailsImpl(user);
    }
}
