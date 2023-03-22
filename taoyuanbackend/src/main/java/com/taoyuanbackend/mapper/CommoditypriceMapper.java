package com.taoyuanbackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.taoyuanbackend.pojo.CommodityPrice;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
* @author Tiebo
* @description 针对表【taoyuan_commodityprice】的数据库操作Mapper
* @createDate 2023-03-17 22:32:49
* @Entity com.taoyuanbackend.pojo.Commodityprice
*/
@Mapper
public interface CommoditypriceMapper extends BaseMapper<CommodityPrice> {
	CommodityPrice selectOneByCommodityId(@Param("commodityId") Long commodityId);
}




