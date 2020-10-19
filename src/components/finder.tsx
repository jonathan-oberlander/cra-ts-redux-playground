import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withPageStyle } from '../hocs/withPageStyle';
import { fetchOnInput } from '../store/actions';
import { selectPing, selectUser, selectError } from '../store/reducer';
import { Ping } from './ping';

export const Finder: React.FC = withPageStyle(() => {
  const dispatch = useDispatch();
  const isPing = useSelector(selectPing);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchOnInput(e.target.value));
  };

  return (
    <>
      <Ping isPing={isPing} />
      <hr />
      <input
        type="text"
        name="user"
        placeholder="type github user name"
        onChange={handleChange}
      />
      <p style={{ fontSize: '0.7em', color: 'gray' }}>
        finder fetches live with a 500ms debounce time
      </p>
      <hr />
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="user">
          <a href={user.url} target="_blank" rel="noopener noreferrer">
            {user.url}
          </a>
          <img
            src={user.avatar}
            alt="see user's avatar"
            width="400"
            height="400"
          />
        </div>
      )}
    </>
  );
});
Finder.displayName = 'UserFinder';
