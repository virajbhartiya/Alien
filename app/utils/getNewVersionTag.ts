/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const githubApiRepoTagsUrl =
  'https://api.github.com/repos/virajbhartiya/alien/releases/latest';

export default async function getNewVersionTag() {
  let latestVersionTag = '';

  const response = await axios({
    url: githubApiRepoTagsUrl,
    method: 'get',
    headers: { 'User-Agent': 'node.js' },
  });

  const tagName = response.data.tag_name;

  latestVersionTag = tagName.slice(1);

  return latestVersionTag;
}
