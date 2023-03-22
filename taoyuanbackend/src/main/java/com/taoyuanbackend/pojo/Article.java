package com.taoyuanbackend.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @TableName taoyuan_article
 */
@TableName(value ="taoyuan_article")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Article implements Serializable {
    @TableId(type = IdType.AUTO)
    private Long id;

    private String title;

    private String author;

    private String authorPhoto;

    private String articleBody;

    private String createTime;

    private String updateTime;

    private Integer articleApproved;

    private Integer articleComment;

    private String articleDes;

    private static final long serialVersionUID = 1L;

}