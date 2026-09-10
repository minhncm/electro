package com.ncm.electro.service.email;

import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EmailSenderServiceImpl implements EmailSenderService{
    private final Configuration freemarkerConfiguration;
    private final JavaMailSender javaMailSender;


    @Override
    public void sendVerificationToken(String toEmail, Map<String, Object> attributes) {
        String text = getEmailContent("verify-email.ftlh", attributes);
        sendEmail(toEmail, "[Electro Shop] Xác thực email", text);
    }

    @Override
    public void sendForgetPasswordToken(String toEmail, Map<String, Object> attributes) {
        String text = getEmailContent("forget-password-email.ftlh", attributes);
        sendEmail(toEmail, "[Electro Shop] Yêu cầu cấp lại mật khẩu", text);
    }

    private String getEmailContent(String template, Map<String, Object> model) {
        try {
            StringWriter writer = new StringWriter();
            freemarkerConfiguration.getTemplate(template).process(model, writer);
            return writer.getBuffer().toString();
        }catch (IOException | TemplateException ex) {
            throw new RuntimeException(ex);

        }
    }

    private void sendEmail(String to, String subject, String text) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text, true);

            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
