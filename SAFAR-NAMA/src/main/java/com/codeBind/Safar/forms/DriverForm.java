package com.codeBind.Safar.forms;

import java.io.Serializable;

import com.codeBind.Safar.model.Vo.DriverVo;

public class DriverForm implements Serializable {

	private static final long serialVersionUID = -148571385359207402L;

	private DriverVo  driverVo;
	private String error;
	
	public DriverForm(DriverVo driverVo) {
		super();
		this.driverVo = new DriverVo();
	}

	/**
	 * @return the driverVo
	 */
	public DriverVo getDriverVo() {
		return driverVo;
	}

	/**
	 * @param driverVo the driverVo to set
	 */
	public void setDriverVo(DriverVo driverVo) {
		this.driverVo = driverVo;
	}

	/**
	 * @return the error
	 */
	public String getError() {
		return error;
	}

	/**
	 * @param error the error to set
	 */
	public void setError(String error) {
		this.error = error;
	}
	 
}

