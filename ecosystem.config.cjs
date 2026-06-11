module.exports = {
  apps: [
    {
      name: 'kaduapps-social',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3003',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '300M',
      autorestart: true,
      env: { NODE_ENV: 'production', PORT: 3003 },
      error_file: '/home/kaduapps-social/logs/error.log',
      out_file: '/home/kaduapps-social/logs/out.log',
      time: true,
    },
  ],
};
