#!/bin/bash

echo "Update system"
apt update -y

echo "install ansible"
apt install -y ansible 

ansible-playbook /vagrant/docker_setup.yml