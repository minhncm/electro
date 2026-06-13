package com.ncm.electro.service.email;

import java.util.Map;

public interface EmailSenderService {
    void sendVerificationToken(String toEmail, Map<String, Object> attributes);
}
