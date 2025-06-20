package JIPANGE.JBP.SecurityConfiguration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import JIPANGE.JBP.UserService.UserCredService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private UserCredService credService;

	@Bean
	public SecurityFilterChain secChain (HttpSecurity http) throws Exception {
		
		http.csrf(new Customizer<CsrfConfigurer<HttpSecurity>>() {

			@Override
			public void customize(CsrfConfigurer<HttpSecurity> t) {
				// TODO Auto-generated method stub
				t.disable();
			}
			
		});
		
		http.authorizeHttpRequests(new Customizer<AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry>() {

			@Override
			public void customize(
					AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry t) {
				// TODO Auto-generated method stub
				t.requestMatchers("login").permitAll();
				t.anyRequest().authenticated();
			}
			
		});
		
		http.httpBasic(new Customizer <HttpBasicConfigurer<HttpSecurity>>() {

			@Override
			public void customize(HttpBasicConfigurer<HttpSecurity> t) {
				// TODO Auto-generated method stub
				
			}
			
		});
		
		return http.build();
		
	}
	
	@SuppressWarnings("deprecation")
	@Bean
	public AuthenticationProvider authProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider(credService);
		authenticationProvider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
		return authenticationProvider;
	}
	
		 
	
	
//	@Bean
//	public AuthnticationManager authenticationManager ()
}
