package com.react.todo;

import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.react.todo.entity.Todo;
import com.react.todo.repository.TodoRepository;

@SpringBootApplication
public class ReactBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactBootApplication.class, args);
	}

	
	@Bean
	public ApplicationRunner applicationRunner() {
		return new ApplicationRunner() {			
			@Autowired
			TodoRepository todoRepository;
			
			@Override
			public void run(ApplicationArguments args) throws Exception {
				IntStream.range(1, 4).forEach((idx) -> generateTodo(idx));
								
			}
			
			private Todo generateTodo(int index) {
				Todo todo1 = new Todo();
				todo1.setText("오늘의 할일" + index);
				todo1.setChecked(false);				
				return todoRepository.save(todo1);
			}
			
		};
	}

}
