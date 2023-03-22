package com.taoyuanbackend.wx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class UserController {
	@Autowired
	private RestTemplate restTemplate;
	@PostMapping("/weChatLogin")
	public String weChatLogin(@RequestBody WeChatLoginModel model){
		return null;
	}
}
