package com.taoyuanbackend.mapper;

import com.taoyuanbackend.pojo.Commodity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
* @author Tiebo
* @description 针对表【taoyuan_commodity】的数据库操作Mapper
* @createDate 2023-03-17 22:32:41
* @Entity com.taoyuanbackend.pojo.Commodity
*/
@Mapper
public interface CommodityMapper extends BaseMapper<Commodity> {

}




