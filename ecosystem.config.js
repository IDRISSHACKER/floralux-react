module.exports = {
  deploy: {
    production: {
      user: "aysfishh117",
      host: "78.46.11.32",
      ref: "origin/master",
      repo: "https://github.com/IDRISSHACKER/floraluxapi.git",
      path: "/var/www/floralux.guihon.cm",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
