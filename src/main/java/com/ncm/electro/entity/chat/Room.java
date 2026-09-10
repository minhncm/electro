package com.ncm.electro.entity.chat;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.authentication.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "room")
public class Room extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "last_message_id")
    private Message lastMessage;

    @OneToMany(mappedBy = "room")
    private List<Message> messages = new ArrayList<>();

}