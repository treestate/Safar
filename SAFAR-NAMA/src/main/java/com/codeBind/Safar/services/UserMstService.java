/**
 * 
 */
package com.codeBind.Safar.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codeBind.Safar.model.UserMaster;

/**
 * @author Akshay
 *
 */

@Service
public interface UserMstService {


	public Optional<UserMaster> getUserLoginDtlsByUserId(String userNm) throws Exception;
	
	
}
