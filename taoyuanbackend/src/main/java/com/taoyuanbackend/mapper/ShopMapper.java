package com.taoyuanbackend.mapper;

import com.taoyuanbackend.pojo.Shop;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
* @author Tiebo
* @description 针对表【taoyuan_shop】的数据库操作Mapper
* @createDate 2023-03-17 22:32:51
* @Entity com.taoyuanbackend.pojo.Shop
*/
@Mapper
public interface ShopMapper extends BaseMapper<Shop> {

}




