package com.codeBind.Safar.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Type;

@Entity
@Table(name = "COMP_MST")
public class CompanyMaster implements Serializable{
	
	private static final long serialVersionUID = 8426738380496593995L;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COMP_MST_ID", unique = true, nullable = false, columnDefinition = "bigint")
	private Integer compMstId;

	@Id
	@Column(name = "COMP_CODE", unique = true, nullable = false)
	private String compCode;
	
	@Column(name = "COMP_NAME")
	private String compName;
	
/*	@Column(name = "ADDRESS_ID")
	private Integer address;
*/
	@Column(name = "RAGISTRATION_DT" , columnDefinition = "date")
	@Type(type = "org.hibernate.type.TimestampType")
	private Date registrationDt;
	
	
	@Column(name = "VALID_FROM" , columnDefinition = "date")
	@Type(type = "org.hibernate.type.TimestampType")
	private Date validFrom;
	
	@Column(name = "VALID_TO" , columnDefinition = "date")
	@Type(type = "org.hibernate.type.TimestampType")
	private Date validTo;
	
	@Column(name = "CONTACT_NO")
	private Integer contactNo;
	
	@Column(name = "EMAIL_ID")
	private String emailId;
	
	@Column(name = "STATUS")
	private String status;
	
	@OneToMany(mappedBy = "compMaster", cascade = CascadeType.ALL)
    private List<UserMaster> userMstList;

	/**
	 * @return the compMstId
	 */
	public Integer getCompMstId() {
		return compMstId;
	}

	/**
	 * @param compMstId the compMstId to set
	 */
	public void setCompMstId(Integer compMstId) {
		this.compMstId = compMstId;
	}

	/**
	 * @return the compCode
	 */
	public String getCompCode() {
		return compCode;
	}

	/**
	 * @param compCode the compCode to set
	 */
	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	/**
	 * @return the compName
	 */
	public String getCompName() {
		return compName;
	}

	/**
	 * @param compName the compName to set
	 */
	public void setCompName(String compName) {
		this.compName = compName;
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
	public List<UserMaster> getUserMstList() {
		return userMstList;
	}

	/**
	 * @param userMstList the userMstList to set
	 */
	public void setUserMstList(List<UserMaster> userMstList) {
		this.userMstList = userMstList;
	}

}
