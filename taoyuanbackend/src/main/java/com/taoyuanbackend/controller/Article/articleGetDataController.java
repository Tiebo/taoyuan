package com.taoyuanbackend.controller.Article;

import com.alibaba.fastjson.JSONObject;
import com.taoyuanbackend.mapper.ArticleMapper;
import com.taoyuanbackend.pojo.Article;
import com.taoyuanbackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class articleGetDataController {
	@Autowired
	private ArticleMapper articleMapper;

	@GetMapping("/api/article/list/")
	public RespResult getArticleList() {
		List<Article> articles = articleMapper.selectList(null);

		List<Article> newArticles = new ArrayList<>();

		for (Article entity : articles) {
			Article article = new Article();
			article.setId(entity.getId());
			article.setArticleBody(entity.getArticleBody());
			article.setTitle(entity.getTitle());
			article.setAuthor(entity.getAuthor());
			article.setAuthorPhoto(entity.getAuthorPhoto());
			article.setCreateTime(entity.getCreateTime());
			article.setUpdateTime(entity.getUpdateTime());
			article.setArticleDes(entity.getArticleDes());
			article.setArticleComment(entity.getArticleComment());
			article.setArticleApproved(entity.getArticleApproved());
			newArticles.add(article);
		}

		JSONObject res = new JSONObject();
		res.put("articles", newArticles);
		return RespResult.success(res);
	}
	@GetMapping("/api/article/info/{id}")
	public RespResult getArticleInfo(@PathVariable String id) {
		Article a = articleMapper.selectById(id);
		JSONObject articleInfo = new JSONObject();
		articleInfo.put("id", a.getId());
		articleInfo.put("article_body", a.getArticleBody());
		articleInfo.put("title", a.getTitle());
		articleInfo.put("author", a.getAuthor());
		articleInfo.put("author_photo", a.getAuthorPhoto());
		articleInfo.put("create_time", a.getCreateTime());
		articleInfo.put("update_time", a.getUpdateTime());
		articleInfo.put("article_des", a.getArticleDes());
		articleInfo.put("article_comment", a.getArticleComment());
		articleInfo.put("article_approved", a.getArticleApproved());
		return RespResult.success(articleInfo);
	}
}
