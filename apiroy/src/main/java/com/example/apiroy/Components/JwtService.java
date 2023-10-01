package com.example.apiroy.Components;

import java.text.ParseException;
import java.util.Date;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;


public class JwtService {
    
    public static final String SECRET_KEY = "ubdbcebueyB@B@GEGD!DYBOY#dyb3ybdbBDB@YBD";
    public static final byte[] SHARED_SECRET_KEY = SECRET_KEY.getBytes();
    public static final int EXPIRE_TIME = 86400000;
    
    public String generateToken(String email) {
        try {
            JWSSigner signer = new MACSigner(SHARED_SECRET_KEY);
    
            // Tạo payload cho token
            JWTClaimsSet.Builder builder = new JWTClaimsSet.Builder();
            builder.claim("email", email); // Thêm claim "email"
            builder.expirationTime(new Date(System.currentTimeMillis() + EXPIRE_TIME)); // Thời gian hết hạn
    
            JWTClaimsSet claimsSet = builder.build();
    
            // Tạo token ký và ký vào bằng cách sử dụng signer
            SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.HS256), claimsSet);
            signedJWT.sign(signer);
    
            // Serialize token thành chuỗi
            return signedJWT.serialize();
        } catch (JOSEException e) {
            e.printStackTrace();
            return null;
        }
    }

    public String getEmailFromToken(String token) {
        try {
            // Parse token
            SignedJWT signedJWT = SignedJWT.parse(token);

            // Xác thực token bằng cách sử dụng shared secret key
            JWSVerifier verifier = new MACVerifier(SHARED_SECRET_KEY);
            if (signedJWT.verify(verifier) && !isTokenExpired(signedJWT)) {
                // Lấy thông tin người dùng từ payload của token
                JWTClaimsSet claims = signedJWT.getJWTClaimsSet();
                return claims.getStringClaim("email");
            }
        } catch (ParseException | JOSEException e) {
            e.printStackTrace();
        }
        return null;
    }
    

    public boolean validateToken(String token) {
        try {
            // Parse token
            SignedJWT signedJWT = SignedJWT.parse(token);

            // Xác thực token bằng cách sử dụng shared secret key
            JWSVerifier verifier = new MACVerifier(SHARED_SECRET_KEY);
            return signedJWT.verify(verifier) && !isTokenExpired(signedJWT);
        } catch (ParseException | JOSEException e) {
            e.printStackTrace();
            return false;
        }
    }

    private boolean isTokenExpired(SignedJWT jwt) throws ParseException {
        Date expirationTime = jwt.getJWTClaimsSet().getExpirationTime();
        return expirationTime != null && expirationTime.before(new Date());
    }
}

    
    
