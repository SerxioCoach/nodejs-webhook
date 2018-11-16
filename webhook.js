module.exports = (webhook) => {
  webhook.on('action1’, (session) => {
      session.count = session.count + 1;
  });
}
