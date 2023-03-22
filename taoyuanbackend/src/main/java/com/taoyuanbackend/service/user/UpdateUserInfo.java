package com.taoyuanbackend.service.user;

import com.taoyuanbackend.vo.RespResult;

import java.util.Map;

public interface UpdateUserInfo {
	RespResult updateUserInfo(Map<String, String> data);
}
