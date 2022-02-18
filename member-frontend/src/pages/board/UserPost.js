import React, { useEffect, useState } from 'react';

const UserPost = ({ userId }) => {
  const [posts, setPosts] = useState({ id: '', title: '', writeDate: '' });
  const link = 'http://localhost:9595/board/post/' + userId;
  console.log(link);

  useEffect(() => {
    fetch('http://localhost:9595/board/post/' + userId, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, [userId]);

  return (
    <tbody>
      <tr align="center">
        <th colSpan={3}>Post</th>
        <th>Post Date</th>
      </tr>
      {
        (posts.id = ''
          ? posts.map((post) => (
              <tr>
                <td colSpan={3}>{post.title}</td>
                <td align="center">{post.writeDate.substr(0, 10)}</td>
              </tr>
            ))
          : '')
      }
    </tbody>
  );
};

export default UserPost;
