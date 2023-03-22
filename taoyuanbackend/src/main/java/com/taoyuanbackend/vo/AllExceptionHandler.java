package com.taoyuanbackend.vo;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

//对加了@Controller注解的方法进行拦截处理 AOP的实现
@ControllerAdvice
public class AllExceptionHandler {
    //进行异常处理，处理Exception.class的异常
    @ExceptionHandler(SystemException.class)
    @ResponseBody //返回json数据
    public RespResult doException(SystemException e){
        return RespResult.fail(e.getCode(),e.getMsg());
    }
    //进行异常处理，处理Exception.class的异常
    @ExceptionHandler(NullPointerException.class)
    @ResponseBody //返回json数据
    public RespResult doException(NullPointerException e){
        e.printStackTrace();
        return RespResult.fail(400, "数据错误");
    }
}
