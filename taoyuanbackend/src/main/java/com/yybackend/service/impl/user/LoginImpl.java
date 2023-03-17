package com.yybackend.service.impl.user;

import com.alibaba.fastjson.JSONObject;
import com.yybackend.pojo.User;
import com.yybackend.service.impl.utils.UserDetailsImpl;
import com.yybackend.service.user.LoginService;
import com.yybackend.utils.JwtUtil;
import com.yybackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;


@Service
public class LoginImpl implements LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Override
    public RespResult getToken(String account, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(account, password);
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);
        UserDetailsImpl userDetails = (UserDetailsImpl) authenticate.getPrincipal();

        User user = userDetails.getUser();
        String jwt = JwtUtil.createJWT(user.getId().toString());
        JSONObject res = new JSONObject();
        res.put("token", jwt);
        System.out.println(user.getAccount() + " login success!");
        return RespResult.success(res);
    }
}
