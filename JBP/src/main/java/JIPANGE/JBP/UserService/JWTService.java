package JIPANGE.JBP.UserService;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;


@Service
public class JWTService{
	
	public String secKey = "";
	
	public JWTService() {
			KeyGenerator keyGen;
			try {
				keyGen = KeyGenerator.getInstance("HmacSHA256");
				SecretKey sKey = keyGen.generateKey();
				secKey = Base64.getEncoder().encodeToString(sKey.getEncoded());
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
					
	}

	public String generateToken(String username) {
		// TODO Auto-generated method stub
		
		Map<String, Object> claims = new HashMap<>();
		
		return Jwts.builder()
				.claims()
				.add(claims)
				.subject(username)
				.issuedAt(new Date(System.currentTimeMillis()))
				.expiration(new Date(System.currentTimeMillis() + 1000 * 60 *10))
				.and()
				.signWith(getKey())
				.compact();
	}
	
	public Key getKey() {
		byte[] keyb = Decoders.BASE64.decode(secKey);
		return Keys.hmacShaKeyFor(keyb);
	}
	
	
	public Claims extractAllClaims(String token) {
		
		Key key = getKey();
		
		return Jwts.parser()
				.verifyWith((SecretKey) key)
				.build()
				.parseSignedClaims(token)
				.getPayload();
	}

	public String extractUsername(String token) {
		// TODO Auto-generated method stub
		return extractAllClaims(token).getSubject();
	}

	public boolean validateToken(String token, UserDetails userDet) {
		// TODO Auto-generated method stub
		final String username = extractUsername(token);
		return (username.matches(userDet.getUsername()) && !isTokenExpired(token));
	}

	private boolean isTokenExpired(String token) {
		// TODO Auto-generated method stub
		return extractAllClaims(token).getExpiration().before(new Date());
	}

}
