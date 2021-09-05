module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "ad43bc17347d4a944ca16e9d9464f6ba"),
    },
  },
  settings: {
    cors: {
      origin: [
        "http://localhost",
        "http://localhost:5000",
        "http://localhost:1337",
        "http://127.0.0.1:5000",
        "http://127.0.0.1:1337",
        "http://127.0.0.1",
      ],
    },
  },
});
