package com.yybackend.mapper;

import com.yybackend.pojo.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
* @author Tiebo
* @description 针对表【user】的数据库操作Mapper
* @createDate 2023-03-01 21:00:23
* @Entity com.lightpickerbackend.pojo.User
*/
@Mapper
public interface UserMapper extends BaseMapper<User> {

}




