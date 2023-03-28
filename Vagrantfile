Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = "2"
  end



  config.vm.provision "shell" do |s|
    ssh_pub_key = File.readlines("#{Dir.home}/.ssh/id_rsa.pub").first.strip
    s.inline = <<-SHELL
        # Create ci user
        useradd -s /bin/bash -d /home/ci/ -m -G sudo ci
        echo 'ci ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
        mkdir -p /home/ci/.ssh && chown -R ci /home/ci/.ssh
        echo #{ssh_pub_key} >> /home/ci/.ssh/authorized_keys
    SHELL
end
