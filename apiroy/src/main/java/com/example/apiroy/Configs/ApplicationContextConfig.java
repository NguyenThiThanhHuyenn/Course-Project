package com.example.apiroy.Configs;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.EnableTransactionManagement;


import com.example.apiroy.Pojo.User;
import com.example.apiroy.Repository.UserRepository;

@Configuration
@EnableTransactionManagement
public class ApplicationContextConfig {

    @Autowired
    private UserRepository accountRepository;

    @Bean
    public UserDetailsService getUserDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
                User account = accountRepository.findByEmail(email).get();
                if (account == null) {
                    throw new UsernameNotFoundException("Email không tồn tại");
                }
                Set<GrantedAuthority> authorities = new HashSet<>();
                authorities.add(new SimpleGrantedAuthority(account.getRole()));
                return new org.springframework.security.core.userdetails.User(
                        account.getEmail(), account.getPassword(), authorities);
            }
        };
    }
}