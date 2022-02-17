import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = (props) => {
  const { id, title, content, username, writeDate } = props.board;
  const { pNum } = props;

  return (
    <tr className="align-middle text-center">
      <td>{id}</td>
      <td>
        <Link
          to={{
            pathname: '/board/detail/' + id,
            state: { pNum },
          }}
          className="linkText"
        >
          {title}
        </Link>
      </td>
      <td>{username}</td>
      <td>{writeDate.substr(0, 10)}</td>
    </tr>
  );
};

export default BoardItem;
