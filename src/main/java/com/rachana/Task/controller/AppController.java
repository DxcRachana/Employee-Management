package com.rachana.Task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import com.rachana.Task.model.User;
import com.rachana.Task.repository.UserRepository;
import com.rachana.Task.service.UserLogin;

@Controller
public class AppController {
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private UserLogin userLogin;
	
	
	@GetMapping("/")
	public ModelAndView loginPage() {
	    return new ModelAndView("index.html");
	}
	
	
	
	@GetMapping("/register")
	public ModelAndView showSignUpForm(Model model) {

		return new ModelAndView("signup_form.html");
	}
	
	@PostMapping(value="/process_register")
	public ModelAndView processRegistration(User user) {
		repo.save(user);
		return new ModelAndView("redirect:/");
	}
	
	
	@GetMapping("/home")
	public ModelAndView showHomePage(Model model)
	{
		
		return new ModelAndView("home.html");
	}
	
	
	@GetMapping("/errorPage")
	public ModelAndView showErrorPage()
	{
		return new ModelAndView("alert.html");
	}
	
	@PostMapping(value="/process_login")
	public ModelAndView processLogin(User user) {
		
		boolean isPresent = userLogin.checkUser(user);
		
		
		if(isPresent)
		{
			return new ModelAndView("redirect:/home");
		}
		
		ModelAndView mav = new ModelAndView("redirect:/errorPage");
		mav.addObject("email", user.getEmail());
		
		return mav;
				
	}
	
	@GetMapping("/details")
	public String showDetailsPage(Model model)
	{
		
		return "details.html";
	}
	
	
}
