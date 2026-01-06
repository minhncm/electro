package com.ncm.electro.entity.chat;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.authentication.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "message")
public class Message extends BaseEntity {
    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @OneToOne(mappedBy = "lastMessage", cascade =  CascadeType.ALL)
    private Room roomLastMessage;

}