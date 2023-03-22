package com.taoyuanbackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.taoyuanbackend.pojo.CommodityPhoto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
* @author Tiebo
* @description 针对表【taoyuan_commodityphoto】的数据库操作Mapper
* @createDate 2023-03-17 22:32:47
* @Entity com.taoyuanbackend.pojo.Commodityphoto
*/
@Mapper
public interface CommodityphotoMapper extends BaseMapper<CommodityPhoto> {
	List<CommodityPhoto> selectAllByCommodityId(@Param("commodityId") Long commodityId);
}




