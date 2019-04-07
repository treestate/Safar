/**
 * 
 */
package com.codeBind.Safar.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codeBind.Safar.model.UserMaster;

@Repository
public interface UserMstDao extends JpaRepository<UserMaster, String>{

	
}
