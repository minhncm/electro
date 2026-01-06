package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}