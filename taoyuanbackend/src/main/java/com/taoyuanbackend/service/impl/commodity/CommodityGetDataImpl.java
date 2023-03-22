package com.taoyuanbackend.service.impl.commodity;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.taoyuanbackend.mapper.CommodityMapper;
import com.taoyuanbackend.mapper.CommodityphotoMapper;
import com.taoyuanbackend.mapper.CommoditypriceMapper;
import com.taoyuanbackend.pojo.Commodity;
import com.taoyuanbackend.pojo.CommodityPhoto;
import com.taoyuanbackend.pojo.CommodityPrice;
import com.taoyuanbackend.service.commodity.CommodityGetDataService;
import com.taoyuanbackend.vo.RespResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommodityGetDataImpl extends ServiceImpl<CommodityMapper, Commodity>
implements CommodityGetDataService {
	@Autowired
	private CommoditypriceMapper commoditypriceMapper;
	@Autowired
	private CommodityphotoMapper commodityphotoMapper;

	@Override
	public List<JSONObject> getAll(Integer type) {
		List<Commodity> commodities;
		if (type == -1) {
			commodities = super.list(null);
		} else {
			LambdaQueryWrapper<Commodity> lqw = new LambdaQueryWrapper<>();
			lqw.eq(Commodity::getType, type);
			commodities = super.list(lqw);
		}

		List<JSONObject> resp = new ArrayList<>();

		for (Commodity comm: commodities) {

			CommodityPrice commodityprice = commoditypriceMapper.selectOneByCommodityId(comm.getId());

			List<CommodityPhoto> commodityphotos = commodityphotoMapper.selectAllByCommodityId(comm.getId());

			List<String> photos = new ArrayList<>();
			for (CommodityPhoto photo: commodityphotos) {
				photos.add(photo.getPhoto());
			}
			JSONObject tmp = new JSONObject();

			tmp.put("id", comm.getId());
			tmp.put("name", comm.getName());
			tmp.put("origin", comm.getOrigin());
			tmp.put("unit", comm.getUnit());
			tmp.put("details", comm.getDetails());
			tmp.put("category", comm.getCategory());
			tmp.put("type", comm.getType());
			tmp.put("price_des", commodityprice.getDescription());
			tmp.put("price", commodityprice.getPrice());
			tmp.put("photo", photos);
			tmp.put("shop_name", comm.getShopName());
			tmp.put("shop_photo", comm.getShopPhoto());
			resp.add(tmp);
		}

		return resp;
	}

	@Override
	public RespResult getCommodityById(Integer id) {
		Commodity commodity = super.getById(id);
		CommodityPrice commodityPrice = commoditypriceMapper.selectOne(new LambdaQueryWrapper<CommodityPrice>().eq(CommodityPrice::getCommodityId, id));
		List<CommodityPhoto> commodityPhotos = commodityphotoMapper.selectList(new LambdaQueryWrapper<CommodityPhoto>().eq(CommodityPhoto::getCommodityId, id));
		List<String> photos = new ArrayList<>();
		for (CommodityPhoto commodityPhoto : commodityPhotos) {
			photos.add(commodityPhoto.getPhoto());
		}

		JSONObject res = new JSONObject();
		res.put("id", commodity.getId());
		res.put("name", commodity.getName());
		res.put("origin", commodity.getOrigin());
		res.put("unit", commodity.getUnit());
		res.put("details", commodity.getDetails());
		res.put("type", commodity.getType());
		res.put("price_des", commodityPrice.getDescription());
		res.put("price", commodityPrice.getPrice());
		res.put("photo", photos);
		res.put("category", commodity.getCategory());
		res.put("shop_name", commodity.getShopName());
		res.put("shop_photo", commodity.getShopPhoto());
		return RespResult.success(res);
	}
}
