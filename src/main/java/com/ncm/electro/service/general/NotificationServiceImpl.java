package com.ncm.electro.service.general;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.genaral.NotificationRequest;
import com.ncm.electro.dto.genaral.NotificationResponse;
import com.ncm.electro.entity.general.Notification;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.genaral.NotificationMapper;
import com.ncm.electro.repository.general.NotificationRepository;
import com.ncm.electro.specification.NotificationSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService{
    private final NotificationRepository notificationRepository;
    private final NotificationMapper notificationMapper;
    private final SseEmitterService sseEmitterService;
    @Override
    public ListResponse<NotificationResponse> findAllByUsername(String username, int page, int size, String sort, String filter) {
        Page<Notification> notifications = notificationRepository.findAll(
                NotificationSpecification.hasUsername(username)
                        .and(NotificationSpecification.sort(sort))
                        .and(NotificationSpecification.filter(filter)),
                PageRequest.of(page - 1, size)
        );

        List<NotificationResponse> notificationResponses = notificationMapper.entityToResponse(notifications.toList());
        return ListResponse.of(notificationResponses, notifications);
    }

    @Override
    public NotificationResponse pushNotification(NotificationRequest request) {
        Notification notification = notificationRepository.save(notificationMapper.requestToEntity(request));
        NotificationResponse notificationResponse = notificationMapper.entityToResponse(notification);
        sseEmitterService.pushEvent(notification.getUser().getUsername(), notificationResponse);
        return notificationResponse;
    }

    @Override
    public NotificationResponse updateNotification(Long id, NotificationRequest request) {
        return notificationRepository
                .findById(id)
                .map(existingEntity -> notificationMapper.partialUpdate(existingEntity, request))
                .map(notificationRepository::save)
                .map(notificationMapper::entityToResponse)
                .orElseThrow(() -> new ResourceNotFoundException(Notification.class.getSimpleName(), FieldName.ID, id));
    }
}
