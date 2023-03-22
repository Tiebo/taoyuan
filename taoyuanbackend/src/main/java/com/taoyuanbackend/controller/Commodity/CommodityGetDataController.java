package com.taoyuanbackend.controller.Commodity;

import com.alibaba.fastjson.JSONObject;
import com.taoyuanbackend.service.commodity.CommodityGetDataService;
import com.taoyuanbackend.utils.BaseUtils;
import com.taoyuanbackend.vo.RespResult;
import com.taoyuanbackend.vo.SystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommodityGetDataController {
	@Autowired
	private CommodityGetDataService commodityGetDataService;
	@GetMapping("/api/commodity/all/")
	public List<JSONObject> GetAll(@RequestParam("type") String type) {
		if (BaseUtils.isNullOrEmpty(type)) {
			throw new SystemException(400, "type为空");
		}

		return commodityGetDataService.getAll(Integer.valueOf(type));
	}

	@GetMapping("/api/commodity/info/")
	public RespResult getCommodityInfo(@RequestParam("id") Integer id) {
		return commodityGetDataService.getCommodityById(id);
	}

}
