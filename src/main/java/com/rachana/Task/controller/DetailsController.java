package com.rachana.Task.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.rachana.Task.model.User;
import com.rachana.Task.repository.UserRepository;


@RestController
@RequestMapping("/api")
public class DetailsController {
	
	
	
	@Autowired
	private UserRepository repo;
	
	
	
	@GetMapping("/mydata/{id}")
	public List<User> getEmployeesByIdGreaterThan(@PathVariable Long id, @RequestParam int limit) {
	    return repo.findByIdGreaterThanOrderByAscLimit(id, limit);
	}
	
	@PostMapping("/save")
    public User addUser(@RequestBody User user) {
		return repo.save(user);
	}
	
	
    @DeleteMapping("/delete/{id}")
    public void deleteData(@PathVariable Long id) {
        repo.deleteById(id);
    }
	
}