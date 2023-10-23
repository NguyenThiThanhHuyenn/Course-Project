package com.example.apiroy.Configs;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


import com.example.apiroy.Filters.CustomAuthenticationEntryPoint;




@Configuration
@EnableWebSecurity
public class SecurityConfig{

    // @Autowired
    // private AuthenticationProvider authenticationProvider;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider dao = new DaoAuthenticationProvider();
        dao.setUserDetailsService(userDetailsService);
        dao.setPasswordEncoder(passwordEncoder());
        return dao;
    }

    @Bean
    public CustomAuthenticationEntryPoint customAuthenticationEntryPoint(){
        return new CustomAuthenticationEntryPoint();
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.ignoringRequestMatchers("/api/**").disable())
            .authenticationProvider( authenticationProvider())
            .httpBasic(basic -> basic.authenticationEntryPoint(customAuthenticationEntryPoint()))
            .logout(logout -> logout.logoutSuccessUrl("/"))
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/audio-file/**").permitAll()
                .requestMatchers("/api/comment/**").permitAll()
                .requestMatchers("/api/genre/**").permitAll()
                .requestMatchers("/api/chapter/**").permitAll()
                .requestMatchers("/api/user/**").permitAll()
                .requestMatchers("/api/user/register","/register").permitAll()
                .requestMatchers("/api/user/login","/login").permitAll()
                .requestMatchers("/api/user/{id}/post-avatar","/post-avatar").permitAll()
                .requestMatchers("/api/book/{id}").permitAll()
                .requestMatchers("/api/book/{id}/audio-files").permitAll()
                .requestMatchers("/api/book/{id}/chapter").permitAll()
                .requestMatchers("/api/book/{id}/update-book").permitAll()
                .requestMatchers("/api/book/approved-book-list").permitAll()
                .requestMatchers("/api/book/rejected-book-list").permitAll()
                .requestMatchers("/api/book/pending-book-list").permitAll()
                .requestMatchers("/api/book/{id}/post-cover-image","/post-cover-image").permitAll()
                .requestMatchers("/api/book/{id}/post-book","/post-book").permitAll()
                .requestMatchers("/api/book/{id}/approved","/api/book/{id}/rejected").hasRole("ADMIN") // Chỉ cho phép người dùng có quyền ADMIN truy cập URL này
                .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); 
    }

   @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
