package com.ncm.electro.utils;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.exc.JsonNodeException;

@Slf4j
@Converter(autoApply = true)
public class JsonNodeConverter implements AttributeConverter<JsonNode, String> {
    @Override
    public String convertToDatabaseColumn(JsonNode jsonNode) {
        if(jsonNode == null) {
            return null;
        }
        return jsonNode.toPrettyString();
    }

    @Override
    public JsonNode convertToEntityAttribute(String jsonNodeString) {
        if (!StringUtils.hasLength(jsonNodeString)) {
            log.warn("jsonNodeString input is empty, returning null");
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readTree(jsonNodeString);
        } catch (JsonNodeException e) {
            log.error("Error parsing jsonNodeString", e);
        }
        return null;
    }
}
