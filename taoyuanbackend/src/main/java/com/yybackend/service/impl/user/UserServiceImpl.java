package com.yybackend.service.impl.user;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yybackend.pojo.User;
import com.yybackend.service.user.UserService;
import com.yybackend.mapper.UserMapper;
import org.springframework.stereotype.Service;

/**
* @author Tiebo
* @description 针对表【user】的数据库操作Service实现
* @createDate 2023-03-01 21:00:23
*/
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService{

}




