import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BoardItem = (props) => {
  const { id, title, username, writeDate, readCnt, isNew } = props.board;
  const { pNum } = props;
  const newButton = (
    <Badge pill bg="success">
      New
    </Badge>
  );

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
          {title}&nbsp;&nbsp;{isNew ? newButton : ''}
        </Link>
      </td>
      <td>{username}</td>
      <td>{writeDate.substr(0, 10)}</td>
      <td>{readCnt}</td>
    </tr>
  );
};

export default BoardItem;
