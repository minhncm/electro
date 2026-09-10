package com.ncm.electro.service.waybill;

import com.ncm.electro.dto.ghn.GhnCallbackOrderRequest;
import com.ncm.electro.dto.waybill.WaybillRequest;
import com.ncm.electro.dto.waybill.WaybillResponse;
import com.ncm.electro.service.CrudService;

public interface WaybillService extends CrudService<Long, WaybillRequest, WaybillResponse> {
    void callbackStatusWaybillFromGHN(GhnCallbackOrderRequest request);
}
