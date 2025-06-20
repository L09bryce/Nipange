package JIPANGE.JBP.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import JIPANGE.JBP.UserModel.UsersModel;
import JIPANGE.JBP.UserService.UserService;

@RestController
public class Controller {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/login")
	public UsersModel getUser(@RequestBody UsersModel user) {
	
		return service.getUser(user);
	}

}
