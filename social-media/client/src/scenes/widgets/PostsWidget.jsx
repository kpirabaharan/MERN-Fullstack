import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { setPosts } from 'state';
import PostWidget from './PostWidget';

const PostsWidget = ({ userId, isProfile = false, isUserProfile }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(`http://localhost:8080/posts/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <>
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
              isUserProfile={isUserProfile}
            />
            <Box m='2rem' />
          </>
        ),
      )}
    </>
  );
};

export default PostsWidget;
