package com.ncm.electro.repository.address;

import com.ncm.electro.entity.address.Ward;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WardRepository extends JpaRepository<Ward, Long> {
}