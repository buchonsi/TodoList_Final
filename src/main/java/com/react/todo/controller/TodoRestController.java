package com.react.todo.controller;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.react.todo.entity.Todo;
import com.react.todo.exception.ResourceNotFoundException;
import com.react.todo.repository.TodoRepository;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
//("/api/todos")
public class TodoRestController {
	@Autowired
	private TodoRepository repository;

	@GetMapping("/api/todos")
	public List<Todo> getTodos(HttpServletResponse response) {
		Cookie setCookie = new Cookie("username", "React"); // 쿠키 이름을 name으로 생성
		setCookie.setMaxAge(60 * 60 * 24); // 기간을 하루로 지정
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Expose-Headers","Access-Control-Allow-Origin,Access-Control-Allow-Credentials");
		setCookie.setHttpOnly(false);
		response.addCookie(setCookie);
		
		return repository.findAll();
	}

	@GetMapping("/api/todos/{id}")
	public Todo getTodo(@PathVariable Long id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo", "id", id));
	}

	@PostMapping("/api/todos")
	public List<Todo> create(@RequestBody Todo todo) {
		repository.save(todo);
		return repository.findAll();
	}

	@PutMapping("/api/todos/{id}")
	public List<Todo> update(@PathVariable Long id, @RequestBody Todo todoDetail) {

		Todo todo = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo", "id", id));

		todo.setChecked(todoDetail.getChecked());
		todo.setText(todoDetail.getText());
		repository.save(todo);

		return repository.findAll();
	}

	@DeleteMapping("/api/todos/{id}")
	public List<Todo> delete(@PathVariable Long id) {
		Todo todo = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo", "id", id));
		repository.delete(todo);
		return repository.findAll();
	}

}
