
package com.codeBind.Safar.services;

import java.util.List;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.codeBind.Safar.SafarException;
import com.codeBind.Safar.dao.DriverMstDao;
import com.codeBind.Safar.model.DriverMst;
import com.codeBind.Safar.model.Vo.DriverVo;
import com.codeBind.Safar.util.CommonUtil;
import com.codeBind.Safar.util.Constants;



@Service(value = "driverMstService")
public class DriverMstServiceImpl implements DriverMstService {

	private static final Logger logger = LogManager.getLogger(DriverMstServiceImpl.class);
	
	@Resource(name="driverMstDao")
	private DriverMstDao driverMstDao;

	/* (non-Javadoc)
	 * @see com.codeBind.Safar.services.DriverMstService#getDriverAllDtls(com.codeBind.Safar.model.Vo.DriverVo)
	 */
	@Override
	public void getDriverAllDtls(DriverVo driverVo) throws SafarException{
		logger.info("Entering getDriverAllDtls()..");
		List<DriverMst>driverMstList = null;
		try {
			driverMstList = driverMstDao.findAll();
		
			for(DriverMst driverMst :driverMstList) {
				System.out.println("Driveer NAme-"+driverMst.getFirstName());
				System.out.println("last NAme-"+driverMst.getLastName());
				
			}
			String json = generateDriverVoDtlsJson(driverMstList);
			System.out.println("json-"+json);
			driverVo.setJsonData(json);
		} catch(Exception e) {
			logger.info("An Exception occurred while loading Driver details",e);
		}
		logger.info("Exiting getDriverAllDtls()..");

	}

	/**@method use to generate Json Data Of Driver Dtls
	 * @param driverMstList
	 * @return
	 */
	private String generateDriverVoDtlsJson(List<DriverMst> driverMstList) {
		logger.info("Entering getDriverAllDtls()..");
		String jsonArrayList = "";
		JSONArray array = new JSONArray();
		JSONObject json = null;	
		try {
			if(driverMstList != null && !driverMstList.isEmpty()) {
				 for(DriverMst driverMst :driverMstList) {
					 json = new JSONObject();
					 CommonUtil.populateJSON(json, "driverMstId",driverMst.getDriverMstId());
					 CommonUtil.populateJSON(json, "name",driverMst.getFirstName() +driverMst.getLastName());
					 CommonUtil.populateJSON(json, "gender",driverMst.getGender());
					 array.put(json);
				 }	
			}
			jsonArrayList = array.toString();
		} catch(Exception e) {
			logger.info("An Exception occurred while loading Driver details",e);
		}	
		
		logger.info("Exiting getDriverAllDtls()..");
		return jsonArrayList;
	}
}
