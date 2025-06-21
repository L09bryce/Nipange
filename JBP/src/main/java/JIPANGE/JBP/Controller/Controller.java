package JIPANGE.JBP.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import JIPANGE.JBP.UserService.UserService;
import JIPANGE.JBP.UxersModel.UsersModel;

@RestController
public class Controller {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/signup")
	public UsersModel register(@RequestBody UsersModel user) {
		return service.getUser(user);
	}
	
	@PostMapping("/login")
	public String verifyUser(@RequestBody UsersModel user) {
	
		return service.verify(user);
	}
	
	@GetMapping("/about")
	public String generaText() {
		return service.generaText();
	}

}
