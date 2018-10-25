ipc.of[socketId].emit('message', { action: 'refresh', image: '/home/pi/Code/wollemi-node/multicolor.png' });

ipc.of[socketId].emit('message', { action: 'refresh', image: '/Users/toby/Code/wollemi-node/640x384_landscape_1bpp.png' });

ipc.of[socketId].emit('message', { action: 'refresh', image: './640x384_landscape_1bpp.png' });
