/**
 * 
 */
package com.codeBind.Safar.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeBind.Safar.dao.UserMstDao;
import com.codeBind.Safar.model.UserMaster;

/**
 * @author Akshay
 *
 */

@Service
public class UserMstServiceImpl implements UserMstService{

	@Autowired
	private UserMstDao userMstDao;
	
	@Override
	public Optional<UserMaster> getUserLoginDtlsByUserId(String userNm) throws Exception {
		
		Optional<UserMaster> userMst = null;
		
		userMst = userMstDao.findById(userNm);
		
		return userMst;
	}

}
