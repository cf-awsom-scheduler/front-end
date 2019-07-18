function Profile({ user }) {
  return (
    <>
      <h2>
        <div src={user.picture} alt={user.displayName} /> Hello,{' '}
        {user.displayName}
      </h2>
      <p>This is what we know about you:</p>
      <ul>
        {Object.keys(user).map(key => (
          <li key={key}>
            {key}: {user[key].toString()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Profile;
