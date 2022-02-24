import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BoardItem = (props) => {
  const { id, no, title, username, writeDate, readCnt, isNew } = props.board;
  const { pNum, keyword } = props;
  const newButton = (
    <Badge pill bg="success">
      New
    </Badge>
  );

  return (
    <tr className="align-middle text-center">
      <td>{no}</td>
      <td>
        <Link
          to={{
            pathname: '/board/detail/' + id,
            state: { pNum, keyword },
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
