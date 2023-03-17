package com.yybackend.service.impl.user;

import com.alibaba.fastjson.JSONObject;
import com.yybackend.pojo.User;
import com.yybackend.service.impl.utils.UserDetailsImpl;
import com.yybackend.service.user.GetUserInfoService;
import com.yybackend.utils.BaseUtils;
import com.yybackend.vo.RespResult;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class GetUserInfoImpl implements GetUserInfoService {
    @Override
    public RespResult getUserInfo() {
        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authenticationToken.getPrincipal();
        User user = userDetails.getUser();

        user.setPassword("0");
        JSONObject res = new JSONObject();
        res.put("user", user);
        res.put("hobby", BaseUtils.getHobbyList(user.getInterest()));
        return RespResult.success(res);
    }
}
