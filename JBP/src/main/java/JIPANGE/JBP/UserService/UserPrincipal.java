package JIPANGE.JBP.UserService;

import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import JIPANGE.JBP.UxersModel.UsersModel;



public class UserPrincipal implements UserDetails{
	
	@Autowired
	private UsersModel user;
	
	public UserPrincipal(UsersModel user) {
		this.user = user;
	}
	
	public UserPrincipal() {
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getUsername();
	}

}
