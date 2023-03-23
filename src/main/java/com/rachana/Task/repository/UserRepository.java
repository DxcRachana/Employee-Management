package com.rachana.Task.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rachana.Task.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
	public User checkUser(@Param("email") String email, @Param("password") String password);

	/*
	 * @Query("SELECT u FROM User u WHERE u.id >= :id order By u.id LIMIT :limit")
	 * List<User> findByIdGreaterThanOrderByAscLimit(@Param("id") Long
	 * id,@Param("limit") int limit);
	 */

	
	
	
}
