package com.taoyuanbackend.service.commodity;

import com.alibaba.fastjson.JSONObject;
import com.taoyuanbackend.pojo.Commodity;
import com.baomidou.mybatisplus.extension.service.IService;
import com.taoyuanbackend.vo.RespResult;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author Tiebo
* @description 针对表【taoyuan_commodity】的数据库操作Service
* @createDate 2023-03-17 22:32:41
*/
@Service
public interface CommodityGetDataService extends IService<Commodity> {
	List<JSONObject> getAll(Integer type);

	RespResult getCommodityById(Integer id);
}
