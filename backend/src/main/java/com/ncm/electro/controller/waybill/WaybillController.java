package com.ncm.electro.controller.waybill;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.ncm.electro.dto.ghn.GhnCallbackOrderRequest;
import com.ncm.electro.service.waybill.WaybillService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/waybills")
@RequiredArgsConstructor
public class WaybillController {
    private final WaybillService waybillService;
    @PutMapping()
    public ResponseEntity<?> callbackStatusWaybillFromGHN(@RequestBody GhnCallbackOrderRequest ghnCallbackOrderRequest) {
        waybillService.callbackStatusWaybillFromGHN(ghnCallbackOrderRequest);
        return ResponseEntity.ok().build();
    }
}
