/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  app.on('pull_request.closed', async context => {
    const issueComment = context.issue({ body: 'Cool! 😎 Thanks for you hard work! 💪' })
    return context.github.issues.createComment(issueComment)
  })
}
