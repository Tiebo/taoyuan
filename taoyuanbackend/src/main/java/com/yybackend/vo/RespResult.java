package com.yybackend.vo;

import com.alibaba.fastjson.JSONObject;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RespResult {
    private boolean success;

    private int code;

    private String msg;

    private JSONObject data;

    public static RespResult success(JSONObject data) {
        return new RespResult(true, 200, "success", data);
    }
    public static RespResult fail(int code, String msg) {
        return new RespResult(false, code, msg, null);
    }
}
