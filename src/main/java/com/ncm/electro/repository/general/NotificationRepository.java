package com.ncm.electro.repository.general;

import com.ncm.electro.entity.general.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}