FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /electro-be
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean packeage -DskipTests

FROM eclipse-temurin:21-jdk-jammy
WORKDIR /electro-be
COPY --from=builder /electro-be/target/*.jar app.jar
ENV SPRING_PROFILES_ACTIVE=docker

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]