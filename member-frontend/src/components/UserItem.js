import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { id, username, name, createDate, lastLogin } = props.user;
  return (
    <tr className="align-middle">
      <td className="text-center">{id}</td>
      <td className="text-center">{username}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{createDate.substr(0, 10)}</td>
      <td className="text-center">
        {lastLogin != null
          ? lastLogin.substr(0, 10) + ' ' + lastLogin.substr(11, 5)
          : '-'}
      </td>
      <td className="text-center">
        <Link to={'/user/detail/' + id} className="btn btn-secondary btn-sm">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default UserItem;
