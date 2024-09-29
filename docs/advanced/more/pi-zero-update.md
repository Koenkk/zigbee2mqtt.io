---
sidebar: auto
---

# Updating Zigbee2MQTT out-of-place on Raspberry Pi Zero (2, W)

For newer versions of Zigbee2MQTT, starting with 1.37.1, updating may hang or take forever until it fails.
This is due to the limited memory (512MB) the devices have, where the `npm ci` command will just hang, time out or throw OOM errors behind the scenes. This is especially valid in the case that you have anything other than zigbee2mqtt running on the same Pi that consumes memory.
The workaround below contains instructions for updating Zigbee2MQTT out of place by plugging the microSD card into an Ubuntu machine and using `chroot` and QEMU arm (or aarch64) emulation to perform the update out of place

::: warning
This is an experimental workaround and you should use caution when following the below steps
:::

## On the Raspberry Pi

Login to your Pi and make a copy of your data folder, in case something goes wrong.

```bash
sudo systemctl stop zigbee2mqtt
cp -R /opt/zigbee2mqtt/data ~/data-backup
```

Then poweroff your Pi and pull its microsd.

## On the Ubuntu Machine

### Preparation
Install the required packages:

```bash
sudo apt-get install -y qemu qemu-user-static binfmt-support
```

Plug in the microSD and find out what letter it is and note it down (ex. `/dev/sdc`):
```bash
sudo fdisk -l
```

Check it wasn't automatically mounted and it if was, unmount it:
```bash
# replace drive letter with the one from above
sudo mount | grep /dev/sdc
# find the mountpoint and unmount it
umount /media/ubuntu/rootfs
umount /media/ubuntu/bootfs
```

Mount the microsd in your mountpoint:
```bash
# Use drive letter from before
sudo mount -o rw /dev/sdc1 /mnt
sudo mount -o rw /dev/sdc2 /mnt/boot
```

Mount the binds:
```bash
sudo mount --bind /dev /mnt/dev/
sudo mount --bind /sys /mnt/sys/
sudo mount --bind /proc /mnt/proc/
sudo mount --bind /dev/pts /mnt/dev/pts
```

Apply the `ld.so.preload` fix:
```bash
sed -i 's/^/#/g' /mnt/etc/ld.so.preload
```

Copy over the qemu static binary. Depending on your rpi, select 64bit or 32bit binary.

For 32bit:
```bash
cp /usr/bin/qemu-arm-static /mnt/usr/bin/.
```

For 64bit:
```bash
cp /usr/bin/qemu-aarch64-static /mnt/usr/bin/.
```

Finally `chroot` into your pi:

```bash
chroot /mnt /bin/bash
```

### Updating

Login as your user:
```bash
su USER
```

Now you should be able to follow the same update steps as normally.

It can be as simple as:
```bash
cd /opt/zigbee2mqtt
bash update.sh
```

Once done, exit from the chroot via `exit`.

### Final steps

(Optional) Delete the qemu binary:
```bash
sudo rm /mnt/usr/bin/qemu-arm-static
sudo rm /mnt/usr/bin/qemu-aarch64-static
```

Revert and unmount:
```bash
sed -i 's/^#//g' /mnt/etc/ld.so.preload
umount /mnt/{dev/pts,dev,sys,proc,boot,}
```


Safely eject and plug it back into your rpi.
