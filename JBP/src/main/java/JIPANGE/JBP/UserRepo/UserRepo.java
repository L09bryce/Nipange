package JIPANGE.JBP.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import JIPANGE.JBP.UxersModel.UsersModel;



@Repository
public interface UserRepo extends JpaRepository<UsersModel, Integer>{

	UsersModel findByUsername(String username);
	

}
