package com.yybackend.service.user;

import com.yybackend.vo.RespResult;

import java.util.Map;

public interface UpdateUserInfo {
	RespResult updateUserInfo(Map<String, String> data);
}
