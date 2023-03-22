package com.taoyuanbackend.service.impl.user;

import com.alibaba.fastjson.JSONObject;
import com.taoyuanbackend.pojo.User;
import com.taoyuanbackend.service.impl.utils.UserDetailsImpl;
import com.taoyuanbackend.service.user.LoginService;
import com.taoyuanbackend.utils.JwtUtil;
import com.taoyuanbackend.vo.RespResult;
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
    public RespResult getToken(String username, String password) {
        System.out.println("username = " + username);
        System.out.println("password = " + password);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);
        UserDetailsImpl userDetails = (UserDetailsImpl) authenticate.getPrincipal();

        User user = userDetails.getUser();
        String jwt = JwtUtil.createJWT(user.getId().toString());
        JSONObject res = new JSONObject();
        res.put("token", jwt);
        System.out.println(user.getUsername() + " login success!");
        return RespResult.success(res);
    }
}
