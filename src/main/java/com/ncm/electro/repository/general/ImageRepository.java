package com.ncm.electro.repository.general;

import com.ncm.electro.entity.general.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}