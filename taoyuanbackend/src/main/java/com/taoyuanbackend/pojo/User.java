package com.taoyuanbackend.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * @TableName auth_user
 */
@TableName(value ="auth_user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @TableId(type = IdType.AUTO)
    private Integer id;

    private String password;

    private Date lastLogin;

    private Integer isSuperuser;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private Integer isStaff;

    private Integer isActive;

    private Date dateJoined;

    private static final long serialVersionUID = 1L;
}