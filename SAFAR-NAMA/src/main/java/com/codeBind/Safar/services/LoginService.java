package com.codeBind.Safar.services;

import com.codeBind.Safar.SafarException;
import com.codeBind.Safar.forms.LoginForm;
import com.codeBind.Safar.model.Vo.UserVo;


public interface LoginService {

	/**@method use to authenticate User
	 * @param form
	 * @return
	 * @throws SafarException 
	 */
	public UserVo authenticateUser(LoginForm form) throws SafarException;

	
}
