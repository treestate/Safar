package com.codeBind.Safar;

public class SafarException extends Exception{


	private static final long serialVersionUID = 1L;
	
    //private String errorCode= ErrorCodes.GENERAL_EXCEPTION_KEY;
	private String errorCode= "Please Contact Administrator..";
	
	public SafarException() {
		super();
	}
	
	public SafarException(String message, String errorCode) {
		super(message);
		this.errorCode = errorCode;
	}

	public SafarException(String message, Throwable exception) {
		super(message, exception);
	}

	public SafarException(String message) {
		super(message);
	}

	public SafarException(Throwable exception) {
		super(exception);
	}
	
	public SafarException(Throwable exception, String errorCode) {
		super(exception);
		this.errorCode = errorCode;
	}
	
	  /**
     * @return String
     */
    public String getErrorCode() {
    	return errorCode;
    }

    /**
     * @param String errorCode
     */
    public void setErrorCode(String errorCode) {
    	this.errorCode = errorCode;
    }

}
