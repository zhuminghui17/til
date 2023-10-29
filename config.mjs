export const Config = (() => {
  const firstName = "Kevin"
  const lastName = "Jiang"

  const fullName = firstName + " " + lastName
  const domainRoot = "https://kevinjiang.ca"
  const canonicalRoot = domainRoot + "/til/"
  const twitterAt = "@kevin51jiang"

  const githubUsername = "kevin51jiang"
  const githubRepo = "til"

  return {
    FIRST_NAME: firstName,
    LAST_NAME: lastName,
    FULL_NAME: fullName,
    DOMAIN_ROOT: domainRoot,
    CANONICAL_ROOT: canonicalRoot,
    TWITTER_AT: twitterAt,
    GITHUB_USERNAME: githubUsername,
    GITHUB_REPO: githubRepo,
  }
})()
