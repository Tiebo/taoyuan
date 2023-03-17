package com.yybackend.vo;

public class SystemException extends RuntimeException{
    private final int code;
    private final String msg;

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
    public SystemException(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

}
