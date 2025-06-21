package JIPANGE.JBP.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import JIPANGE.JBP.UserRepo.UserRepo;
import JIPANGE.JBP.UxersModel.UsersModel;


@Service
public class UserService {
	
	@Autowired
	private UserRepo repo;
	
	@Autowired
	private JWTService service;
	
	@Autowired
	private AuthenticationManager authManager;
	
	
	public UsersModel getUser(UsersModel user) {
		
		PasswordEncoder encoder = new BCryptPasswordEncoder(12);
		user.setPassword(encoder.encode(user.getPassword()));
		return repo.save(user);
	}
	
	public String generaText() {
		return "fuck yah";
	}
	
	public String verify(UsersModel user) {
		
		Authentication authentication = authManager.authenticate(
				new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		if(authentication.isAuthenticated()) 
			return service.generateToken(user.getUsername());
		return "fail";
	}

}
