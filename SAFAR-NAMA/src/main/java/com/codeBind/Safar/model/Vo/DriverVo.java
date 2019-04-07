package com.codeBind.Safar.model.Vo;

import java.io.Serializable;

public class DriverVo implements Serializable{

	private static final long serialVersionUID = -4644044751943874141L;

	private String name;
	private Integer mobileNo;
	private String Address;
	private String gender;	
	private String vehicalDtls;
	private String jsonData;
	
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		name = name;
	}
	/**
	 * @return the mobileNo
	 */
	public Integer getMobileNo() {
		return mobileNo;
	}
	/**
	 * @param mobileNo the mobileNo to set
	 */
	public void setMobileNo(Integer mobileNo) {
		this.mobileNo = mobileNo;
	}
	/**
	 * @return the address
	 */
	public String getAddress() {
		return Address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		Address = address;
	}
	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}
	/**
	 * @param gender the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}
	/**
	 * @return the vehicalDtls
	 */
	public String getVehicalDtls() {
		return vehicalDtls;
	}
	/**
	 * @param vehicalDtls the vehicalDtls to set
	 */
	public void setVehicalDtls(String vehicalDtls) {
		this.vehicalDtls = vehicalDtls;
	}
	/**
	 * @return the jsonData
	 */
	public String getJsonData() {
		return jsonData;
	}
	/**
	 * @param jsonData the jsonData to set
	 */
	public void setJsonData(String jsonData) {
		this.jsonData = jsonData;
	}
}
