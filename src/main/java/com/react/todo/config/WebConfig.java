package com.react.todo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
 * 내부적으로 설정된 MVC 설정을 추가로 하고 싶을때  
 * 추가적인 설정 클래스를 만든다.
 */
@Profile("test")
@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000")
				.allowedMethods("*");
	}
	
	
}
