package JIPANGE.JBP.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import JIPANGE.JBP.UserModel.UsersModel;
import JIPANGE.JBP.UserRepo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo repo;
	
	public UsersModel getUser(UsersModel user) {
		return repo.save(user);
	}

}
