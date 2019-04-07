/**
 * 
 */
package com.codeBind.Safar.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DRIVER_MST")
public class DriverMst implements Serializable {

	private static final long serialVersionUID = 4357475927685793265L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DRIVER_MST_ID", unique = true, nullable = false, columnDefinition = "bigint")
	private Integer driverMstId;
	
	@Column(name = "FIRST_NM")
	private String firstName;
	
	@Column(name = "MIDDEL_NM")
	private String middleName;
	
	@Column(name = "LAST_NM")
	private String lastName;
	
	@Column(name = "GENDER")
	private String gender;

	/**
	 * @return the driverMstId
	 */
	public Integer getDriverMstId() {
		return driverMstId;
	}

	/**
	 * @param driverMstId the driverMstId to set
	 */
	public void setDriverMstId(Integer driverMstId) {
		this.driverMstId = driverMstId;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the middleName
	 */
	public String getMiddleName() {
		return middleName;
	}

	/**
	 * @param middleName the middleName to set
	 */
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
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
	
}
