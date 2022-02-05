import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ postsData }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
