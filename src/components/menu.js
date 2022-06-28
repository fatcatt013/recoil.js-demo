import React from 'react';
import { useRecoilState } from 'recoil';
import { user as userAtom } from '../atoms';

export default function Menu() {
  const userOptions = ['fatcatt013', 'rsaleri', 'rockhold'];
  const [user, setUser] = useRecoilState(userAtom);
  return (
    <nav className="menu">
      {userOptions.map((u) => (
        <a
          onClick={() => {
            setUser(u);
          }}
          key={u}
          style={{ marginLeft: '20px' }}
        >
          {u}
        </a>
      ))}
    </nav>
  );
}
