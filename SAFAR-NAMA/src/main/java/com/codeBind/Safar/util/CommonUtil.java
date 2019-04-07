package com.codeBind.Safar.util;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

public class CommonUtil {

	private static final Logger LOGGER = Logger.getLogger(CommonUtil.class);


	/**
	 * @param JSONObject json
	 * @param String keyStr
	 * @param String valStr
	 * @throws JSONException
	 */
	public static void populateJSON(JSONObject json, String keyStr, String valStr) throws JSONException {
		if (StringUtils.isNotBlank(valStr)) {
			json.put(keyStr, valStr);
		} else {
			json.put(keyStr, StringUtils.EMPTY);
		}
	}

	/**
	 * @param JSONObject json
	 * @param String keyStr
	 * @param String valStr
	 * @throws JSONException
	 */
	public static void populateJSON(JSONObject json, String keyStr, Integer valStr) throws JSONException {
		if (valStr != null) {
			json.put(keyStr, valStr);
		} else {
			json.put(keyStr, StringUtils.EMPTY);
		}
	}
}