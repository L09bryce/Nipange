package JIPANGE.JBP.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import JIPANGE.JBP.UserModel.UsersModel;
import JIPANGE.JBP.UserRepo.UserRepo;

@Service
public class UserCredService implements UserDetailsService{
	
	@Autowired
	private UserRepo repo;
	


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		UsersModel user = repo.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("User not found");
		}
		System.out.println(user);
		return new UserPrincipal(user);
	}

}
