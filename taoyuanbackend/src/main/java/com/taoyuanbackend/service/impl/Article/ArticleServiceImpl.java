package com.taoyuanbackend.service.impl.Article;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.taoyuanbackend.pojo.Article;
import com.taoyuanbackend.service.Article.ArticleService;
import com.taoyuanbackend.mapper.ArticleMapper;
import org.springframework.stereotype.Service;

/**
* @author Tiebo
* @description 针对表【taoyuan_article】的数据库操作Service实现
* @createDate 2023-03-17 22:31:36
*/
@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article>
    implements ArticleService{

}




