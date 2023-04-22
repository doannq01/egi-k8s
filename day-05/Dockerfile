FROM jenkins/jenkins:lts

USER root
RUN apt-get update && \
    apt-get install -y sudo && \
    echo "jenkins ALL=NOPASSWD: ALL" >> /etc/sudoers && \
    sudo su- && sudo apt-get install docker.io


USER jenkins