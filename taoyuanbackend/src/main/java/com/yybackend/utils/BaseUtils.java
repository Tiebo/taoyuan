package com.yybackend.utils;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Component
public class BaseUtils {

	public static Date StringToDate(String str) {
		System.out.println("str = " + str);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = format.parse(str);
		} catch (ParseException e) {
			System.out.println("时间格式错误");
		}
		return date;
	}
	public static List<String> getHobbyList(String str) {
		if ("".equals(str) || str == null) {
			return new ArrayList<>();
		}
		String[] split = str.split(",");
		return new ArrayList<>(Arrays.asList(split));
	}

}
