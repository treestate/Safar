/**
 * 
 */
package com.codeBind.Safar.services;

import org.springframework.stereotype.Service;

import com.codeBind.Safar.SafarException;
import com.codeBind.Safar.model.Vo.DriverVo;

@Service
public interface DriverMstService {
	
/**@Method use get all Driver Dtls
 * @param driverVo
 */
public void getDriverAllDtls(DriverVo driverVo) throws SafarException;

}
