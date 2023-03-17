package com.yybackend.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@EnableCaching
@Configuration
public class RedisConfig {
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
	@Bean
	public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
		RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();
		template.setConnectionFactory(factory);
		Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new
				Jackson2JsonRedisSerializer(Object.class);
		ObjectMapper om = new ObjectMapper();
		om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
		om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
		jackson2JsonRedisSerializer.setObjectMapper(om);
		StringRedisSerializer stringRedisSerializer = new
				StringRedisSerializer();

		// key采用String的序列化方式
		template.setKeySerializer(stringRedisSerializer);
		// hash的key也采用String的序列化方式
		template.setHashKeySerializer(stringRedisSerializer);
		// value序列化方式采用jackson
		template.setValueSerializer(jackson2JsonRedisSerializer);
		// hash的value序列化方式采用jackson
		template.setHashValueSerializer(jackson2JsonRedisSerializer);
		template.afterPropertiesSet();
		return template;
	}
	@Bean
	public RedisCacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
		// 创建String和JSON序列化对象，分别对key和value的数据进行类型转换
		RedisSerializer<String> strSerializer = new StringRedisSerializer();

		Jackson2JsonRedisSerializer jacksonSeial = new Jackson2JsonRedisSerializer(Object.class);
		ObjectMapper mapper = new ObjectMapper();
		mapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
		mapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL);
		jacksonSeial.setObjectMapper(mapper);

		// 自定义缓存数据序列化方式和有效期限
		RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
				.entryTtl(Duration.ofDays(1))   // 设置缓存有效期为1天
				.serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(strSerializer)) // 使用strSerializer对key进行数据类型转换
				.serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jacksonSeial)) // 使用jacksonSeial对value的数据类型进行转换
				.disableCachingNullValues();   // 对空数据不操作

		RedisCacheManager cacheManager = RedisCacheManager.builder(redisConnectionFactory).cacheDefaults(config).build();
		return cacheManager;
	}
}
