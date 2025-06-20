package JIPANGE.JBP.UserModel;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name ="Users")
public class UsersModel {
	
	@Id
	private int id;
	private String username;
	private String password;
	
	public UsersModel() {
		
	}
	
	public UsersModel(int id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UsersModel [id=" + id + ", userName=" + username + ", password=" + password + "]";
	}
	
	
	

}
