/**
 * 
 */
package com.codeBind.Safar.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.codeBind.Safar.model.DriverMst;

@Repository
@Service(value = "driverMstDao")
public interface DriverMstDao extends JpaRepository<DriverMst, Integer> {

	//public MemberMst crudOnMember() throws Exception;
	
}
