package com.yybackend.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @TableName user
 */
@TableName(value ="user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @TableId(type = IdType.AUTO)
    private Integer id;

    private String username;

    private Integer age;

    private String account;

    private String phone;

    private String email;

    private String photo;

    private String password;

    private String interest;

    private String description;
    // 0-男, 1-女, 2-保密
    private Integer gender;

    private static final long serialVersionUID = 1L;


}