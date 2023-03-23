package com.rachana.Task.controller;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.rachana.Task.model.User;
import com.rachana.Task.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class DetailsController {
	
	
	
	@Autowired
	private UserRepository repo;
	
	
	@GetMapping("/users")
	public List<User> getUserList() {List<User> user = repo.findAll();
	return user;
	}
	/*
	 * @GetMapping("/mydata/{id}") public List<User>
	 * getEmployeesByIdGreaterThan(@PathVariable Long id, @RequestParam int limit) {
	 * return repo.findByIdGreaterThanOrderByAscLimit(id, limit); }
	 */
	
	
	
	
	@PostMapping("/save")
    public User addUser(@RequestBody User user) {
		return repo.save(user);
	}
	
	
    @DeleteMapping("/delete/{id}")
    public void deleteData(@PathVariable Long id) {
        repo.deleteById(id);
    }
    
    
    @GetMapping("/export")
    public ResponseEntity<String> exportData() {
        List<User> data = repo.findAll();
        StringBuilder sb = new StringBuilder();
        for (User d : data) {
            sb.append(d.getId() + "\t" + d.getFirstName() + "\t\t" + d.getLastName() + "\t\t" + d.getEmail() + "\n");
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_PLAIN);
        headers.setContentDisposition(ContentDisposition.builder("attachment").filename("data.txt").build());
        return new ResponseEntity<>(sb.toString(), headers, HttpStatus.OK);
    }
    
 
}