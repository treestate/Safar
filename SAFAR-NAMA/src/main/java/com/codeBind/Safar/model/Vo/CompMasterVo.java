package com.codeBind.Safar.model.Vo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.codeBind.Safar.model.UserMaster;

public class CompMasterVo implements Serializable{
	
	private static final long serialVersionUID = 7873355377867775843L;
	
	private Integer compMstId;
	private String compCode;
	private String compName;
	private Integer address;
	private Date registrationDt;
	private Date validFrom;
	private Date validTo;
	private Integer contactNo;
	private String emailId;
	private String status;
	private List<UserVo> userMstList;
	
	/**
	 * @return the CompMstId
	 */
	public Integer getCompMstId() {
		return compMstId;
	}
	/**
	 * @param CompMstId the CompMstId to set
	 */
	public void setCompMstId(Integer compMstId) {
		this.compMstId = compMstId;
	}
	/**
	 * @return the CompCode
	 */
	public String getCompCode() {
		return compCode;
	}
	/**
	 * @param CompCode the CompCode to set
	 */
	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}
	/**
	 * @return the CompNm
	 */
	public String getCompName() {
		return compName;
	}
	/**
	 * @param CompNm the CompNm to set
	 */
	public void setCompName(String compName) {
		this.compName = compName;
	}
	/**
	 * @return the address
	 */
	public Integer getAddress() {
		return address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(Integer address) {
		this.address = address;
	}
	/**
	 * @return the registrationDt
	 */
	public Date getRegistrationDt() {
		return registrationDt;
	}
	/**
	 * @param registrationDt the registrationDt to set
	 */
	public void setRegistrationDt(Date registrationDt) {
		this.registrationDt = registrationDt;
	}
	/**
	 * @return the validFrom
	 */
	public Date getValidFrom() {
		return validFrom;
	}
	/**
	 * @param validFrom the validFrom to set
	 */
	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}
	/**
	 * @return the validTo
	 */
	public Date getValidTo() {
		return validTo;
	}
	/**
	 * @param validTo the validTo to set
	 */
	public void setValidTo(Date validTo) {
		this.validTo = validTo;
	}
	/**
	 * @return the contactNo
	 */
	public Integer getContactNo() {
		return contactNo;
	}
	/**
	 * @param contactNo the contactNo to set
	 */
	public void setContactNo(Integer contactNo) {
		this.contactNo = contactNo;
	}
	/**
	 * @return the emailId
	 */
	public String getEmailId() {
		return emailId;
	}
	/**
	 * @param emailId the emailId to set
	 */
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	/**
	 * @return the userMstList
	 */
	public List<UserVo> getUserMstList() {
		return userMstList;
	}
	/**
	 * @param userMstList the userMstList to set
	 */
	public void setUserMstList(List<UserVo> userMstList) {
		this.userMstList = userMstList;
	}
}
