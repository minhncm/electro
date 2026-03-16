FROM ubuntu:latest
LABEL authors="NCM"

ENTRYPOINT ["top", "-b"]