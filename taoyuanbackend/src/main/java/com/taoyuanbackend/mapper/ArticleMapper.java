package com.taoyuanbackend.mapper;

import com.taoyuanbackend.pojo.Article;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
* @author Tiebo
* @description 针对表【taoyuan_article】的数据库操作Mapper
* @createDate 2023-03-17 22:31:36
* @Entity com.taoyuanbackend.pojo.Article
*/
@Mapper
public interface ArticleMapper extends BaseMapper<Article> {

}




