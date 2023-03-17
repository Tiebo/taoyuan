package com.yybackend.service.impl.user;

import com.alibaba.fastjson.JSONObject;
import com.yybackend.mapper.UserMapper;
import com.yybackend.pojo.User;
import com.yybackend.service.impl.utils.UserDetailsImpl;
import com.yybackend.vo.RespResult;
import com.yybackend.vo.SystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UpdateUserInfo implements com.yybackend.service.user.UpdateUserInfo {

	@Autowired
	private UserMapper userMapper;
	@Override
	public RespResult updateUserInfo(Map<String, String> data) {
		UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
		UserDetailsImpl userDetails = (UserDetailsImpl) authenticationToken.getPrincipal();
		User user = userDetails.getUser();

		Integer age = Integer.valueOf(data.get("age"));
		String email = data.get("email");
		String description = data.get("description");
		String interest = data.get("interest");
		Integer gender = Integer.valueOf(data.get("gender"));
		String username = data.get("username");
		String phone = data.get("phone");

		if (username == null || username.equals("")) {
			throw new SystemException(403, "昵称不能为空");
		}

		// 去空格
		username = username.trim();
		if (username.length() > 20) {
			throw new SystemException(403, "昵称长度不能大于20");
		}

		user.setAge(age);
		user.setEmail(email);
		user.setDescription(description);
		user.setInterest(interest);
		user.setPhone(phone);
		user.setGender(gender);
		user.setUsername(username);
		userMapper.updateById(user);
		JSONObject res = new JSONObject();
		res.put("error_message", "success");
		return RespResult.success(res);
	}
}
