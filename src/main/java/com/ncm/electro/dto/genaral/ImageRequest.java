package com.ncm.electro.dto.genaral;

import lombok.Data;

@Data
public class ImageRequest {
    private String name;
    private String path;
    private String contentType;
    private Long size;
    private String group;
    private Boolean isThumbnail;
    private Boolean isEliminated;
}
