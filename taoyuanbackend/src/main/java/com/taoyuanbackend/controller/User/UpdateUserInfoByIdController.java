package com.taoyuanbackend.controller.User;

import com.taoyuanbackend.service.user.UpdateUserInfo;
import com.taoyuanbackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UpdateUserInfoByIdController {

	@Autowired
	private UpdateUserInfo updateUserInfo;

	@PostMapping("/api/user/account/update/info/")
	public RespResult updateUserInfo(@RequestParam Map<String, String> data) {
		return updateUserInfo.updateUserInfo(data);
	}
}
