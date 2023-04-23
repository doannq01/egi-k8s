FROM jenkins/jenkins:lts

USER root
RUN apt-get update && \
    apt-get install -y sudo && \
    echo "jenkins ALL=NOPASSWD: ALL" >> /etc/sudoers

USER jenkins

# sudo su- && sudo apt-get install docker.io