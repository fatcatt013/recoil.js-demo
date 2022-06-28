import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { repos as repoAtom, user as userAtom } from './atoms';
import Menu from './components/menu';

function App() {
  const [repos, setRepos] = useRecoilState(repoAtom);
  const user = useRecoilState(userAtom);
  useEffect(() => {
    const getRepos = async () => {
      const url = `https://api.github.com/users/${user[0]}/repos`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, [user]);

  return (
    <>
      <Menu />
      {repos.map((repo) => (
        <div key={repo.url}>
          <a href={repo.url}>
            {repo.author} / {repo.name}
          </a>
          <div>{repo.description}</div>
          <div>
            {repo.stars} stars / {repo.forks} forks
          </div>
        </div>
      ))}
    </>
  );
}
export default App;
