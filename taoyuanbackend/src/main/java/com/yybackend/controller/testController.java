package com.yybackend.controller;

import com.yybackend.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

	@Autowired
	private RedisUtil redisUtil;
	@GetMapping("/test")
	public String testOne() {
		Object k1 = redisUtil.get("k1");
		System.out.println("k1 = " + k1);
		return "success";
	}
}
