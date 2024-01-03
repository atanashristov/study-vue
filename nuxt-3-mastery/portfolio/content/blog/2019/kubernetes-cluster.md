---
description: Kubernetes - Setup a Cluster using Kubeadm
image: /images/logos/kubernetes-logo.png
head:
  meta:
    - name: 'keywords'
      content: 'Kubernetes, Kubeadm'
publishedAt: 2019-04-05T00:00:00-06:00
toc: true
---

# Kubernetes - Setup a Cluster using Kubeadm

![Kubernetes - Setup a Cluster using Kubeadm](/images/logos/kubernetes-logo.png)

This blog post contains an example how to set up Kubernetes cluster with Virtual Box virtual machines.

I am using `kubeadm` to setup I cluster with one master and two worker nodes.

## Setup Virtual Box Virtual Machines

To satisfy the prerequisites for the rest of the example, I need first to set up 3 virtual machines on Virtual Box.

I am following the instructions for setting up `kubeadmin` located at [kubernetes.io](https://kubernetes.io/docs/setup/independent/install-kubeadm/){:target="_blank"}. At the beginning of the documentation page there is a list of supported operating systems. I'll be using _Ubuntu_ for the examples.

The process of setting up a kubernetes cluster follows multiple steps:

| #   | Master              | Worker Node 1       | Worker Node 2       |
| --- | ------------------- | ------------------- | ------------------- |
| 1   | Setup VM            | Setup VM            | Setup VM            |
| 2   | Install docker      | Install docker      | Install docker      |
| 3   | Install `kubeadmin` | Install `kubeadmin` | Install `kubeadmin` |
| 4   | Initialize master   | -                   | -                   |
| 5   | POD Network         | POD Network         | POD Network         |
| 6   | -                   | Join Node           | Join Node           |

First step is to create _one_ virtual machine for the master node. Later, this same VM will be replicated for all the worker nodes. I download Virtual Box image from [osboxes.org web site](https://www.osboxes.org/ubuntu/){:target="_blank"}.

The downloaded file is compressed `.7z` file. I extracted the file in `D:\VM\`. The file size is quite big, one should be aware of that:

```bash
ls 'D:\VM\Ubuntu 19.04 (64bit).vdi'

    Directory: D:\VM
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        4/18/2019   3:58 PM     5868879872 Ubuntu 19.04 (64bit).vdi
```

Once downloaded, I set up new VM in Virtual Box, which I name `kubemaster`. I set the _memory size_ at least as _2048MB_, then I select _Use an existing virtual hard disc file_:

![Create first VM](/images/kubernetes/create_first_vm_1.png)

Once the VM is created, I go to _Settings_ and from _System_ I change the number of processors to _two processors_:

![Set first VM Processors](/images/kubernetes/set_first_vm_processors_1.png)

Then from the _Network_ tab I set up _two network adapters_:

- Adapter 1: Bridged

This adapter is needed to access the internet, download and install packages, etc.

![Adapter 1](/images/kubernetes/set_first_vm_adapter1_1.png)

I power up login to the `kubemaster` machine using username _osboxes_ and password _osboxs.org_.

First I update the system, install _net-tools_ and check is _ssh_ service is running:

```bash
sudo su
apt-get update
apt install net-tools openssh-server
service ssh status
```

Next I login (in my case to `192.168.0.30`) using remote terminal, username _osboxes_ and password _osboxs.org_ to verify the ssh connection.

Next I shutdown the VM entering `sudo shutdown now` in the terminal.

The VM now I will use as template for the other 2 nodes `kubemode1` and `kubenode2`. I clone the VM and make sure I checked in _Reinitialize MAC address of all network cards_. Also, I make sure the _clone type_ is _Linked Clone_:

![Clone Kubenode 1](/images/kubernetes/clone_kubenode1_2.png)

I power up all 3 nodes. I login to the 2 new nodes and take the IP address. Now this is the list of nodes with the Bridged network adapters:

| VM         | IP           |
| ---------- | ------------ |
| kubemaster | 192.168.0.30 |
| kubenode1  | 192.168.0.31 |
| kubenode1  | 192.168.0.32 |

All machines have the same _osboxes_ hostname. I have to set up new hostnames: kubemaster, kubenode1, kubenode2.

The next are the steps to set hostname for the master node. Once this is done, I repeat the corresponding steps on the other two worker nodes.

Ssh by IP address to the master node and switch to root user. Edit the file `/etc/hostname` and make sure it contains the name `kubemaster`.

Then I edit `/etc/hosts` file and update `127.0.1.1 osboxes` to `127.0.1.1 kubemaster`.

I power off the VM.

### Host Only Network

Next step is to create _host-only_ adapter, as the bridged adapter only is to connect to internet and the IP addresses are not guaranteed.

- Adapter 2: Host-only Ethernet Adapter

This adapter is needed to set up static IP addresses on each and every virtual machine from the cluster, so they can talk to each other.

First I make sure I have host-only network. I go to _Global Tools->Network Host Manager_ to confirm I have one. This host-only network I will be using for the examples:

![Host-only network](/images/kubernetes/host_only_net_1.png)

I also make sure the DHCP above is unchecked.

Then I set the second adapter attached to _Host-only Adapter_:

![Adapter 2](/images/kubernetes/set_first_vm_adapter2_1.png)

Currently I only have IP address on the _bridged_ adapter, but not the _host-only adapter_:

![Master IP addresses](/images/kubernetes/master_ip_addr_1.png)

I power up the VMs.

Next I setup IP address on the _Host-only adapter_. The IP address will be static:

| VM         | IP           |
| ---------- | ------------ |
| kubemaster | 192.168.1.80 |
| kubenode1  | 192.168.1.81 |
| kubenode1  | 192.168.1.82 |

I login as root on all 3 VMs and run `ifconfig`. There is a new interface called `enp0s8`.

I set IP address temporary for this session only. On the master node:

```bash
ifconfig enp0s8 192.168.1.80
```

I repeat the same on the worker nodes with their IPs.

Then, to make these changes permanent, on the master node I edit file `vim /etc/network/interfaces`, and add settings for the interface _enp0s8_:

```bash
# interfaces(5) file used by ifup(8) and ifdown(8)
auto lo
iface lo inet loopback

# Configure enp0s8
auto enp0s8
iface enp0s8 inet static
      address 192.168.1.80
      netmask 255.255.255.0
```

I repeat these same changes on the other 2 worker nodes.

I reboot the virtual machine running `reboot now`. Once the machine is up, I and confirm the IP addresses and the host name are now correct.

I confirm I can ssh from each node to the other two nodes. I also make sure I have network connectivity from all 3 nodes running `ping www.google.com`

Last thing I need to **disable the swap** on all 3 nodes. As root user I run:

```bash
swapoff -a
```

on the 3 nodes. Then also comment in `/etc/fstab` the row for the swap partition. This will turn off the swap upon restart of the VMs.

At the end I have the following virtual machines:

| #   | IP Address (dynamic) | IP address (host only) | Host Name  |
| --- | -------------------- | ---------------------- | ---------- |
| 1   | 192.168.0.30         | 192.168.1.81           | kubemaster |
| 2   | 192.168.0.31         | 192.168.1.82           | kubenode1  |
| 3   | 192.168.0.32         | 192.168.1.83           | kubenode2  |

## Setup Kubernetes Cluster

I install _Docker_ on all the nodes. Run as root:

```bash
apt-get update
apt install -y docker.io
```

Next step is to install `kubeadmin`, as well as `kubelet` and `kubectl`.

Following the steps from the [installation page](https://kubernetes.io/docs/setup/independent/install-kubeadm/){:target="_blank"}, for Ubuntu:

```bash
apt-get update && apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl
```

I also make sure the Docker service is enabled on all 3 machines:

```bash
systemctl enable docker.service
```

Next step is to initialize a cluster on the master node.

Following the [create cluster with kubeadm documentation page](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/){:target="_blank"}, I am using POD network adapter (--pod-network-cidr), and I make sure I am using the static IP address on the host-only adapter (--apiserver-advertise-address):

```bash
kubeadm init --pod-network-cidr=192.168.0.0/16 --apiserver-advertise-address=192.168.1.80
```

and when it finishes, I get this message with instructions to start the cluster:

```bash
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.1.80:6443 --token udtcaj.7likqlvoxsfx1rq3 \
    --discovery-token-ca-cert-hash sha256:d52f9d5e2011605133eefa8a2bd9bc59aba959c19389814be8e8e883711ef721
```
